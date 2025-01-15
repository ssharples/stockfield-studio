import { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface WavesurferOptions {
  url: string;
  container: React.RefObject<HTMLDivElement>;
  waveColor?: string;
  progressColor?: string;
  cursorColor?: string;
  barWidth?: number;
  barGap?: number;
  height?: number;
}

export function useWavesurfer({
  url,
  container: containerRef,
  waveColor = '#EF4444',
  progressColor = '#B91C1C',
  cursorColor = '#ffffff',
  barWidth = 2,
  barGap = 1,
  height = 100,
}: WavesurferOptions) {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.error('Waveform container not found');
      return;
    }

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor,
      progressColor,
      cursorColor,
      barWidth,
      barGap,
      height,
      normalize: true,
      mediaControls: true,
      autoplay: false,
      interact: true,
      dragToSeek: true,
      backend: 'MediaElement'
    });

    wavesurfer.current = ws;

    const loadTrack = async () => {
      try {
        console.log('Loading audio from:', url);
        // Create a fetch request with CORS headers
        const response = await fetch(url, {
          mode: 'cors'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Create a blob URL from the response
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        
        // Load the blob URL into wavesurfer
        await ws.load(blobUrl);
        console.log('Audio loaded successfully');
        setIsReady(true);
      } catch (error) {
        console.error('Error loading track:', error);
        if (error instanceof Error) {
          console.error('Error details:', {
            message: error.message,
            name: error.name,
            stack: error.stack
          });
        }
      }
    };

    // Add small delay to ensure container is fully rendered
    const timeout = setTimeout(() => {
      loadTrack();
    }, 100);

    ws.on('play', () => setIsPlaying(true));
    ws.on('pause', () => setIsPlaying(false));
    ws.on('finish', () => setIsPlaying(false));

    return () => {
      clearTimeout(timeout);
      ws.destroy();
    };
  }, [containerRef, url, waveColor, progressColor, cursorColor, barWidth, barGap, height]);

  const togglePlayPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  return {
    wavesurfer: wavesurfer.current,
    isReady,
    isPlaying,
    togglePlayPause,
  };
}
