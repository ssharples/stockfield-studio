import { useEffect, useState } from 'react';
import { getPlaylistTracks, getPlaylistDetails } from '../../api/spotify';

interface Track {
  track: {
    id: string;
    name: string;
    artists: Array<{ 
      name: string;
      genres?: string[];
    }>;
    album: {
      name: string;
      images: Array<{ url: string }>;
      genres?: string[];
    };
    preview_url: string;
    external_urls: {
      spotify: string;
    };
    genres?: string[];
  };
}

export default function SpotifyPlaylist({ playlistId }: { playlistId: string }) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [playlist, setPlaylist] = useState<any>(null);
  const [filter, setFilter] = useState<string>('');
  const [genreFilter, setGenreFilter] = useState<string>('');
  const [availableGenres, setAvailableGenres] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [tracksData, playlistData] = await Promise.all([
        getPlaylistTracks(playlistId),
        getPlaylistDetails(playlistId)
      ]);
      
      // Extract unique genres from tracks
      const genres = new Set<string>();
      tracksData.forEach((track: Track) => {
        track.track.genres?.forEach((genre: string) => genres.add(genre));
        track.track.artists.forEach((artist: { genres?: string[] }) => 
          artist.genres?.forEach((genre: string) => genres.add(genre))
        );
        track.track.album.genres?.forEach((genre: string) => genres.add(genre));
      });
      
      setTracks(tracksData);
      setPlaylist(playlistData);
      setAvailableGenres(Array.from(genres).sort());
    }
    fetchData();
  }, [playlistId]);

  const filteredTracks = tracks.filter(track => {
    const matchesText = 
      track.track.name.toLowerCase().includes(filter.toLowerCase()) ||
      track.track.artists.some(artist => 
        artist.name.toLowerCase().includes(filter.toLowerCase())
      );

    const matchesGenre = genreFilter === '' || 
      (track.track.genres && track.track.genres.includes(genreFilter)) ||
      track.track.artists.some(artist => 
        artist.genres && artist.genres.includes(genreFilter)
      ) ||
      (track.track.album.genres && track.track.album.genres.includes(genreFilter));

    return matchesText && matchesGenre;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">
          {playlist?.name || 'Loading Playlist...'}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search tracks..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
          />
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
          >
            <option value="">All Genres</option>
            {availableGenres.map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredTracks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTracks.map(({ track }) => (
            <div key={track.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative aspect-square">
                <img 
                  src={track.album.images[0].url} 
                  alt={track.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 truncate" title={track.name}>
                  {track.name}
                </h3>
                <p className="text-gray-600 text-sm truncate" title={track.artists.map(artist => artist.name).join(', ')}>
                  {track.artists.map(artist => artist.name).join(', ')}
                </p>
                
                {track.preview_url ? (
                  <audio 
                    controls
                    src={track.preview_url}
                    className="w-full mt-4 rounded-lg"
                    onError={(e) => {
                      console.error('Audio playback error:', e);
                      alert('Unable to play audio preview');
                    }}
                  />
                ) : (
                  <div className="mt-4 text-sm text-gray-500">
                    No preview available
                  </div>
                )}

                <a
                  href={track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Open in Spotify
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600">No tracks found matching your filters</p>
        </div>
      )}
    </div>
  );
}
