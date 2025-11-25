'use client';

import { useState } from 'react';

interface AudioPlayerProps {
  duration: string;
}

export default function AudioPlayer({ duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className="bg-surface-raised border border-surface-border rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-4">
        {/* Play/Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-14 h-14 rounded-full bg-accent hover:bg-accent-hover flex items-center justify-center transition-colors flex-shrink-0"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg className="w-6 h-6 text-surface" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-surface ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Progress */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="text-sm text-zinc-400 tabular-nums w-12">0:00</span>
            <input
              type="range"
              className="progress-bar flex-1"
              min="0"
              max="100"
              value={currentTime}
              onChange={(e) => setCurrentTime(Number(e.target.value))}
              aria-label="Playback progress"
            />
            <span className="text-sm text-zinc-500 tabular-nums w-12">{duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-white bg-surface-overlay rounded-lg transition-colors">
            1x
          </button>
          <button className="p-2 text-zinc-400 hover:text-white transition-colors" aria-label="Volume">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 0112.728 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
