
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, Mic, MicOff, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VoiceSearchProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

export const VoiceSearch = ({ onSearch, isSearching }: VoiceSearchProps) => {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const { toast } = useToast();
  
  // Check if speech recognition is supported
  useEffect(() => {
    const supported = 
      'SpeechRecognition' in window || 
      'webkitSpeechRecognition' in window;
    setSpeechSupported(supported);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };
  
  const toggleListening = () => {
    if (!speechSupported) {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support voice commands. Please use a modern browser like Chrome.",
        variant: "destructive"
      });
      return;
    }
    
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };
  
  const startListening = () => {
    setIsListening(true);
    
    // Use the SpeechRecognition API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      onSearch(transcript);
      setIsListening(false);
    };
    
    recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      toast({
        title: "Voice Recognition Error",
        description: `Error: ${event.error}. Please try again.`,
        variant: "destructive"
      });
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    try {
      recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      setIsListening(false);
    }
  };
  
  const stopListening = () => {
    setIsListening(false);
    // In a real implementation, we would stop the recognition instance
  };
  
  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search the Quran or say 'Show verses about forgiveness'"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-10 w-full"
          />
          {isSearching && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            </div>
          )}
        </div>
        
        <Button type="submit" variant="default" className="bg-emerald-600 hover:bg-emerald-700">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
        
        {speechSupported && (
          <Button 
            type="button" 
            variant={isListening ? "destructive" : "outline"}
            onClick={toggleListening}
          >
            {isListening ? (
              <>
                <MicOff className="h-4 w-4 mr-2" />
                Stop
              </>
            ) : (
              <>
                <Mic className="h-4 w-4 mr-2" />
                Voice
              </>
            )}
          </Button>
        )}
      </form>
    </Card>
  );
};
