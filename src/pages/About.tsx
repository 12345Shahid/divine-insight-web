
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold text-center mb-8">About QuranIQ</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                QuranIQ is dedicated to providing a unified, ad-supported, and feature-rich platform 
                for studying the Quran. We offer a fast, user-friendly, and no-login-required research 
                platform that integrates tafsir, hadith, and AI-driven insights into a seamless experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To revolutionize Quranic engagement by merging cutting-edge AI with Islamic knowledge in a 
                frictionless, privacy-first environment. Ideal for scholars, seekers, and everyday Muslims alike.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="shadow-md max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>What makes QuranIQ special</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>AI-Powered Verse Explorer with contextual insights</li>
              <li>Multi-Qari Audio Streaming from trusted sources</li>
              <li>Voice Command Search for natural language queries</li>
              <li>Bookmarking without account creation</li>
              <li>Multiple translations available at your fingertips</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
