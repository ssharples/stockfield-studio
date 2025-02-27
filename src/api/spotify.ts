import axios from 'axios';
import { Buffer } from 'buffer';

const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
  throw new Error('Missing Spotify API credentials. Please set NEXT_PUBLIC_SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables.');
}

let accessToken: string | null = null;
let tokenExpiration: number | null = null;

let lastRequestTime = 0;
const RATE_LIMIT_DELAY = 1000; // 1 second between requests

async function getAccessToken() {
  // Rate limit protection
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
    await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY - timeSinceLastRequest));
  }
  lastRequestTime = Date.now();
  try {
    if (accessToken && tokenExpiration && Date.now() < tokenExpiration) {
      return accessToken;
    }

    const auth = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    if (!response.data.access_token) {
      throw new Error('No access token received from Spotify');
    }

    accessToken = response.data.access_token;
    tokenExpiration = Date.now() + (response.data.expires_in * 1000);
    return accessToken;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    throw error;
  }
}

export async function getPlaylistTracks(playlistId: string) {
  try {
    const token = await getAccessToken();
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.data?.items) {
      throw new Error('Invalid playlist tracks response');
    }
    
    return response.data.items;
  } catch (error) {
    console.error('Error getting playlist tracks:', error);
    throw error;
  }
}

export async function searchTracks(query: string, limit = 10) {
  try {
    const token = await getAccessToken();
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        q: query,
        type: 'track',
        limit: limit
      }
    });
    
    if (!response.data?.tracks?.items) {
      throw new Error('No tracks found matching your filters');
    }
    
    return response.data.tracks.items;
  } catch (error) {
    console.error('Error searching tracks:', error);
    throw error;
  }
}

export async function getPlaylistDetails(playlistId: string) {
  try {
    const token = await getAccessToken();
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.data?.name) {
      throw new Error('Invalid playlist details response');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error getting playlist details:', error);
    throw error;
  }
}
