
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  surah: number;
  verse: number;
  qari: string;
  onQariChange: (qari: string) => void;
}

export const AudioPlayer = ({ surah, verse, qari, onQariChange }: AudioPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  
  const handlePlayPause = () => {
    // In a real implementation, this would control audio playback
    setPlaying(!playing);
  };

  const handlePrev = () => {
    // In a real implementation, this would play the previous verse
  };

  const handleNext = () => {
    // In a real implementation, this would play the next verse
  };
  
  // In a real app, this would use the actual audio from the API
  const audioUrl = `https://everyayah.com/data/${qari}/${surah.toString().padStart(3, '0')}${verse.toString().padStart(3, '0')}.mp3`;

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
          >
            {playing ? (
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
            defaultValue={volume}
            max={100}
            step={1}
            className="w-24"
            onValueChange={setVolume}
          />
        </div>
      </div>
      
      {/* Hidden audio element (would be controlled via JavaScript in a real implementation) */}
      <audio src={audioUrl} className="hidden" />
    </div>
  );
};
