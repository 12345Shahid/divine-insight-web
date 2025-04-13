
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Bookmark, Headphones, Search, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/Layout';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-800 dark:from-emerald-400 dark:to-teal-300">
              QuranIQ
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
              Discover, explore, and understand the Quran with advanced insights and beautiful recitations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/read-quran')} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <BookOpen className="mr-2 h-5 w-5" /> Read Quran
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/bookmarks')}>
                <Bookmark className="mr-2 h-5 w-5" /> My Bookmarks
              </Button>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 px-4 bg-white dark:bg-slate-950">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Immersive Quran Study Experience
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="rounded-lg p-6 bg-slate-50 dark:bg-slate-900 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Multiple Translations</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Access the Quran in multiple languages including English, Urdu, Indonesian, and French.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="rounded-lg p-6 bg-slate-50 dark:bg-slate-900 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Audio Recitations</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Listen to beautiful recitations from renowned Qaris around the world.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="rounded-lg p-6 bg-slate-50 dark:bg-slate-900 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Voice Search</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Simply speak to search for verses and topics throughout the Quran.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="rounded-lg p-6 bg-slate-50 dark:bg-slate-900 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Verse Explorer</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Dive deeper into each verse with contextual explanations and insights.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="rounded-lg p-6 bg-slate-50 dark:bg-slate-900 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                  <Bookmark className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Bookmarking</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Save your favorite verses to revisit them anytime, with no account needed.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="py-16 px-4 bg-gradient-to-br from-teal-500 to-emerald-700 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your Quranic Journey Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Explore the divine words with modern tools designed for deeper understanding and reflection.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/read-quran')}
              className="bg-white text-emerald-700 hover:bg-emerald-100"
            >
              Start Reading
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
