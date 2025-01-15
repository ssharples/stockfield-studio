import React, { useRef } from 'react';
import AudioPlayer from './AudioPlayer';
import WaveSurfer from 'wavesurfer.js';

interface AudioComparisonProps {
  beforeUrl: string;
  afterUrl: string;
}

export default function AudioComparison({ beforeUrl, afterUrl }: AudioComparisonProps) {
  const players = useRef<{ before?: WaveSurfer; after?: WaveSurfer }>({});

  const handlePlayerReady = (type: 'before' | 'after', wavesurfer: WaveSurfer) => {
    players.current[type] = wavesurfer;
  };

  const stopOtherPlayer = (currentType: 'before' | 'after') => {
    const otherType = currentType === 'before' ? 'after' : 'before';
    if (players.current[otherType] && !players.current[otherType]?.isDestroyed) {
      players.current[otherType]?.pause();
    }
  };

  return (
    <div id="audio-comparison" className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-xl font-semibold mb-4">Before</h4>
        <AudioPlayer 
          url={beforeUrl} 
          title="Original Mix"
          onPlayerReady={(ws) => handlePlayerReady('before', ws)}
          stopOthers={() => stopOtherPlayer('before')}
        />
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4">After</h4>
        <AudioPlayer 
          url={afterUrl} 
          title="Mastered Version"
          onPlayerReady={(ws) => handlePlayerReady('after', ws)}
          stopOthers={() => stopOtherPlayer('after')}
        />
      </div>
    </div>
  );
}
