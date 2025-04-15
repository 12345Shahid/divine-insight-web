
// API key for Gemini
const GEMINI_API_KEY = "AIzaSyDFX8oR3jKgLdKnja6JEPPYTBPwhxw_7r0";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent";

interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
    finishReason: string;
  }>;
}

interface GeminiRequest {
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

const formatVerseForPrompt = (verse: { surah: number; number: number; arabic: string; translations: Record<string, string> }) => {
  return `Surah ${verse.surah}, Verse ${verse.number}
Arabic text: ${verse.arabic}
English translation: ${verse.translations.english}`;
};

export const generateAiInsights = async (verse: { surah: number; number: number; arabic: string; translations: Record<string, string> }): Promise<AiInsights> => {
  try {
    const verseInfo = formatVerseForPrompt(verse);
    
    const prompt = `
      I need insights about the following Quranic verse from an Islamic perspective:
      ${verseInfo}
      
      Please provide the following information in a respectful, educational manner:
      1. Historical Context: When was this verse revealed and what was happening at that time?
      2. Reflection: What spiritual or moral lessons can be derived from this verse?
      3. Application: How might Muslims apply the teachings of this verse in their daily lives?
      
      Format your response as JSON with these three fields: historicalContext, reflection, and application.
      Keep each section concise (2-3 sentences each).
    `;
    
    const requestBody: GeminiRequest = {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    };
    
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching AI insights: ${response.statusText}`);
    }
    
    const data = await response.json() as GeminiResponse;
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response from AI service');
    }
    
    const textResponse = data.candidates[0].content.parts[0].text;
    
    try {
      // Try to parse as JSON
      const parsedResponse = JSON.parse(textResponse.trim()) as AiInsights;
      return parsedResponse;
    } catch (e) {
      // If JSON parsing fails, try to extract sections manually
      const historicalContextMatch = textResponse.match(/Historical Context[:\s]+(.*?)(?=Reflection|$)/s);
      const reflectionMatch = textResponse.match(/Reflection[:\s]+(.*?)(?=Application|$)/s);
      const applicationMatch = textResponse.match(/Application[:\s]+(.*?)(?=$)/s);
      
      return {
        historicalContext: historicalContextMatch ? historicalContextMatch[1].trim() : "No historical context available.",
        reflection: reflectionMatch ? reflectionMatch[1].trim() : "No reflection available.",
        application: applicationMatch ? applicationMatch[1].trim() : "No application insights available."
      };
    }
  } catch (error) {
    console.error('Error generating AI insights:', error);
    return {
      historicalContext: "Could not retrieve historical context at this time.",
      reflection: "Could not generate reflection at this time.",
      application: "Could not generate application insights at this time."
    };
  }
};

export const sendChatMessage = async (messages: ChatMessage[], verse: { surah: number; number: number; arabic: string; translations: Record<string, string> }): Promise<string> => {
  try {
    const verseInfo = formatVerseForPrompt(verse);
    
    // Format previous messages for context
    const conversationHistory = messages
      .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n');
    
    const prompt = `
      You are an AI assistant helping with understanding Quranic verses from an Islamic perspective.
      
      Verse information:
      ${verseInfo}
      
      Previous conversation:
      ${conversationHistory}
      
      Please provide a helpful, educational, and respectful response about Islamic topics. Keep your answer concise (2-4 sentences).
    `;
    
    const requestBody: GeminiRequest = {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    };
    
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      throw new Error(`Error getting chat response: ${response.statusText}`);
    }
    
    const data = await response.json() as GeminiResponse;
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response from AI service');
    }
    
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw new Error('Failed to get a response. Please try again later.');
  }
};
