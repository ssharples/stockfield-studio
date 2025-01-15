import React, { useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { useWavesurfer } from '../../hooks/useWavesurfer';
import WaveSurfer from 'wavesurfer.js';

interface AudioPlayerProps {
  url: string;
  title: string;
  onPlayerReady?: (wavesurfer: WaveSurfer) => void;
  stopOthers?: () => void;
}

export default function AudioPlayer({ url, title, onPlayerReady, stopOthers }: AudioPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isReady, isPlaying, togglePlayPause, wavesurfer } = useWavesurfer({
    url,
    container: containerRef,
    waveColor: '#EF4444',
    progressColor: '#B91C1C',
    height: 80,
    barWidth: 3,
    barGap: 2,
  });

  useEffect(() => {
    if (wavesurfer && onPlayerReady) {
      onPlayerReady(wavesurfer);
    }
  }, [wavesurfer, onPlayerReady]);

  const handlePlayPause = () => {
    if (stopOthers) {
      stopOthers();
    }
    togglePlayPause();
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div 
        ref={containerRef} 
        className="w-full h-20 bg-dark-800/50 rounded-lg overflow-hidden"
      />
      <div className="flex justify-center">
        <button
          onClick={handlePlayPause}
          disabled={!isReady}
          className="button-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          <span>{isPlaying ? 'Pause' : 'Play'}</span>
        </button>
      </div>
    </div>
  );
}
