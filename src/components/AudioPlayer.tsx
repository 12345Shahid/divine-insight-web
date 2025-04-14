
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, SkipBack, SkipForward, Volume2, Loader2 } from 'lucide-react';
import { getAudioUrl } from '@/services/quranApi';

interface AudioPlayerProps {
  surah: number;
  verse: number;
  qari: string;
  onQariChange: (qari: string) => void;
}

export const AudioPlayer = ({ surah, verse, qari, onQariChange }: AudioPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const audioUrl = getAudioUrl(surah, verse, qari);
  
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        setLoading(true);
        audioRef.current.play().catch(err => {
          console.error("Error playing audio:", err);
          setError("Could not play audio. Please try again.");
          setLoading(false);
        });
      }
    }
  };

  const handlePrev = () => {
    // Go to previous verse - would need to be implemented with parent component
    // For now, just restart the current audio
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    }
  };

  const handleNext = () => {
    // Go to next verse - would need to be implemented with parent component
  };
  
  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
    }
  };
  
  useEffect(() => {
    // Update audio src when surah, verse, or qari changes
    if (audioRef.current) {
      setPlaying(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setError(null);
    }
  }, [surah, verse, qari]);
  
  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    
    if (!audio) return;
    
    const onLoadedData = () => {
      setLoading(false);
      setError(null);
      audio.volume = volume[0] / 100;
    };
    
    const onPlaying = () => {
      setPlaying(true);
      setLoading(false);
    };
    
    const onPause = () => {
      setPlaying(false);
    };
    
    const onEnded = () => {
      setPlaying(false);
    };
    
    const onError = () => {
      setError("Error loading audio. Please try another verse or qari.");
      setPlaying(false);
      setLoading(false);
    };
    
    // Add event listeners
    audio.addEventListener('loadeddata', onLoadedData);
    audio.addEventListener('playing', onPlaying);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);
    
    // Cleanup
    return () => {
      audio.removeEventListener('loadeddata', onLoadedData);
      audio.removeEventListener('playing', onPlaying);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, [volume]);

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handlePrev}>
            <SkipBack className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="default"
            size="icon" 
            className="h-10 w-10 rounded-full bg-emerald-600 hover:bg-emerald-700"
            onClick={handlePlayPause}
            disabled={loading || !!error}
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : playing ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </Button>
          
          <Button variant="outline" size="icon" onClick={handleNext}>
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex-1 min-w-[120px]">
          <Select value={qari} onValueChange={onQariChange}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select Qari" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alafasy">Mishary Alafasy</SelectItem>
              <SelectItem value="sudais">Abdurrahman As-Sudais</SelectItem>
              <SelectItem value="husary">Mahmoud Khalil Al-Husary</SelectItem>
              <SelectItem value="muaiqly">Maher Al Muaiqly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-2 ml-auto">
          <Volume2 className="h-4 w-4 text-slate-500" />
          <Slider
            value={volume}
            max={100}
            step={1}
            className="w-24"
            onValueChange={handleVolumeChange}
          />
        </div>
      </div>
      
      {error && (
        <div className="mt-2 text-xs text-red-500">
          {error}
        </div>
      )}
      
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} preload="metadata" className="hidden" />
    </div>
  );
};
