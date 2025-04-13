
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Support = () => {
  const contactEmail = "create.contact.369@gmail.com";
  
  const handleEmailClick = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Support</h1>
        
        <Card className="max-w-md mx-auto shadow-md">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <p className="text-muted-foreground text-center">
              If you have any questions, issues, or feedback about QuranIQ, 
              please don't hesitate to contact us at:
            </p>
            
            <Button 
              variant="outline" 
              className="flex items-center space-x-2"
              onClick={handleEmailClick}
            >
              <Mail size={18} />
              <span>{contactEmail}</span>
            </Button>
            
            <p className="text-sm text-muted-foreground text-center pt-4">
              We strive to respond to all inquiries within 48 hours.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Support;
