import axios from 'axios';

const SPOTIFY_CLIENT_ID = '77824daf23e946c8a13b88913ef482b8';
const SPOTIFY_CLIENT_SECRET = 'b6794beada0640b78f444fd42acd6a37';

let accessToken: string | null = null;
let tokenExpiration: number | null = null;

async function getAccessToken() {
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
