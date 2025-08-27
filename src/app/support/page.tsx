
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LifeBuoy, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SupportPage() {
  return (
    <div className="flex justify-center items-center py-8">
      <Card className="w-full max-w-2xl text-center border-primary glow-shadow">
        <CardHeader>
          <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
            <LifeBuoy className="w-10 h-10 text-primary" />
            Support
          </CardTitle>
          <CardDescription className="text-lg">
            We're here to help! If you have any questions or need assistance, please reach out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
            <p className="text-muted-foreground mb-4">
              The best way to get in touch with us is by email. We aim to respond to all inquiries within 24-48 hours.
            </p>
            <Button asChild size="lg">
              <a href="mailto:support@brainvia.app">
                <Mail className="mr-2" /> support@brainvia.app
              </a>
            </Button>
          </div>
          <div className="p-6 bg-secondary/50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Frequently Asked Questions</h3>
            <p className="text-muted-foreground">
              Before reaching out, you might find an answer to your question in our FAQ section (coming soon).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
