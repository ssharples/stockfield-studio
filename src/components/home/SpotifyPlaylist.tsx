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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          {playlist?.name || 'Loading...'}
        </h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Filter tracks..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          />
          <select
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTracks.map(({ track }) => (
          <div key={track.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={track.album.images[0].url} 
              alt={track.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{track.name}</h3>
              <p className="text-gray-600">
                {track.artists.map(artist => artist.name).join(', ')}
              </p>
              <audio 
                controls
                src={track.preview_url}
                className="w-full mt-4"
              />
              <a
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Open in Spotify
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
