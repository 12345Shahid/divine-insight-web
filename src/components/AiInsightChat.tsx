
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, SendIcon } from 'lucide-react';
import { ChatMessage, sendChatMessage } from '@/services/geminiService';
import { Verse } from '@/types/quran';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

interface AiInsightChatProps {
  verse: Verse;
}

export const AiInsightChat = ({ verse }: AiInsightChatProps) => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'ai',
      content: `Welcome! I can help answer your questions about Surah ${verse.surah}, Verse ${verse.number} or other Islamic topics. What would you like to know?`,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    const userMessage: ChatMessage = {
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      const response = await sendChatMessage([...messages, userMessage], verse);
      
      const aiMessage: ChatMessage = {
        role: 'ai',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      setTimeout(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [messages]);

  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col h-[350px] md:h-[400px]">
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${
              message.role === 'user' 
                ? 'ml-8 flex justify-end' 
                : 'mr-8'
            }`}
          >
            <div 
              className={`px-4 py-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-center justify-start mb-4 mr-8">
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-lg flex items-center">
              <Loader2 className="h-4 w-4 animate-spin mr-2 text-emerald-600" />
              <span className="text-sm">Generating response...</span>
            </div>
          </div>
        )}
      </ScrollArea>
      
      <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex space-x-2">
        <Input
          ref={inputRef}
          placeholder="Ask a question about this verse..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          className="flex-1"
        />
        <Button 
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isLoading}
          size="icon"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <SendIcon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
