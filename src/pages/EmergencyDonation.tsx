
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Heart, Building, PalmtreeIcon, BookOpen } from 'lucide-react';

const EmergencyDonation = () => {
  const { toast } = useToast();
  
  const handleDonate = (cause: string) => {
    toast({
      title: "Thank you for your donation!",
      description: `Your donation to ${cause} has been received. This is a demo page.`,
    });
  };

  return (
    <Layout>
      <div className="container py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-3 text-emerald-700 dark:text-emerald-500">Emergency Donation</h1>
          <p className="text-lg text-center text-slate-600 dark:text-slate-400 mb-8">
            Support our causes and help make a difference. We need emergency donations especially for Palestine.
          </p>
          
          {/* Donation Option (previously Combined Donation) */}
          <Card className="mb-8 border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20">
            <CardHeader>
              <CardTitle className="text-center text-emerald-800 dark:text-emerald-300">Donation</CardTitle>
              <CardDescription className="text-center">Support all our causes with a single donation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700 dark:text-slate-300">
                Donate to this account and your contribution will be distributed across Palestine Relief, Islamic Deeds, 
                and QuranIQ Application Improvement. 10% will be allocated for application maintenance and development.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-4">
                <p className="font-medium">Bikash Account Number:</p>
                <p className="text-lg font-mono mt-1">9999-8888-7777-6666</p>
              </div>
              <div className="flex mt-4">
                <Input id="combined" placeholder="Amount" type="number" defaultValue="100" />
                <Button onClick={() => handleDonate("Combined Causes")} className="ml-2">Donate</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Distribution: We will distribute your donation as needed among all causes with at least 10% supporting 
                the QuranIQ application and its developers.
              </p>
            </CardContent>
          </Card>
          
          {/* Important Notice Card */}
          <Card className="mb-10 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
            <CardHeader>
              <CardTitle className="text-center text-amber-800 dark:text-amber-400">Important Notice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 dark:text-amber-400">
                When you donate for Palestine or Islamic deeds across the world, 10% of your donation will be allocated 
                to the improvement of QuranIQ application as "hadiah" (gift). This helps us maintain and enhance the 
                application for all users.
              </p>
              <p className="mt-4 text-amber-700 dark:text-amber-400">
                If you prefer your donation to go entirely to your chosen cause, please use the dedicated donation options below.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Palestine Relief */}
            <Card className="border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <PalmtreeIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  Palestine Relief
                </CardTitle>
                <CardDescription className="text-center">Support humanitarian aid</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                  Your donation provides essential aid to Palestinians in need including medical supplies and food.
                </p>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-4">
                  <p className="font-medium">Bikash Account Number:</p>
                  <p className="text-lg font-mono mt-1">1234-5678-9012-3456</p>
                </div>
                <div className="flex mt-4">
                  <Input id="palestine" placeholder="Amount" type="number" defaultValue="50" />
                  <Button onClick={() => handleDonate("Palestine Relief")} className="ml-2">Donate</Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Islamic Deeds */}
            <Card className="border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  Islamic Deeds
                </CardTitle>
                <CardDescription className="text-center">Support Islamic causes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                  Support mosque construction, Islamic education, and other community services worldwide.
                </p>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-4">
                  <p className="font-medium">Bikash Account Number:</p>
                  <p className="text-lg font-mono mt-1">3456-7890-1234-5678</p>
                </div>
                <div className="flex mt-4">
                  <Input id="islamic" placeholder="Amount" type="number" defaultValue="50" />
                  <Button onClick={() => handleDonate("Islamic Deeds")} className="ml-2">Donate</Button>
                </div>
              </CardContent>
            </Card>
            
            {/* App Improvement */}
            <Card className="border-emerald-200 dark:border-emerald-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Building className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  QuranIQ Improvement
                </CardTitle>
                <CardDescription className="text-center">Support our application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                  Help enhance this application with new features, better translations, and improved resources.
                </p>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg mb-4">
                  <p className="font-medium">Bikash Account Number:</p>
                  <p className="text-lg font-mono mt-1">5678-9012-3456-7890</p>
                </div>
                <div className="flex mt-4">
                  <Input id="quraniq" placeholder="Amount" type="number" defaultValue="50" />
                  <Button onClick={() => handleDonate("QuranIQ Development")} className="ml-2">Donate</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* About Donations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How Your Donations Help</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  <strong>Palestine Relief:</strong> Your donations provide essential humanitarian aid including food, 
                  medicine, shelter, and educational resources to Palestinians in need.
                </p>
                <p>
                  <strong>Islamic Deeds:</strong> Support various Islamic charitable causes including mosque construction,
                  Islamic education programs, Quran distribution, and other community services worldwide.
                </p>
                <p>
                  <strong>QuranIQ Improvement:</strong> Help us enhance this application with new features, better translations,
                  improved audio quality, and expanded educational resources to benefit Muslims around the world.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg mt-4">
                  <p className="text-sm italic text-slate-600 dark:text-slate-400">
                    <Heart className="inline h-4 w-4 mr-1 text-red-500" />
                    When you donate through our shared options (90/10 split), you're helping sustain this free 
                    Quran application while also contributing to your chosen cause. This "hadiah" (gift) ensures 
                    that we can continue providing these services without mandatory subscription fees.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                Note: This is a demonstration page. No actual transactions will be processed.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EmergencyDonation;
