
export interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
    finishReason: string;
  }>;
}

export interface GeminiRequest {
  contents: Array<{
    parts: Array<{
      text: string;
    }>;
  }>;
}

export interface AiInsights {
  historicalContext: string;
  reflection: string;
  application: string;
}

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}
