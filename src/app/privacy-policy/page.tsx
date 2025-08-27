
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex justify-center py-8">
      <Card className="w-full max-w-4xl border-primary glow-shadow">
        <CardHeader>
          <CardTitle className="text-3xl font-bold flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 prose dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Brainvia. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
          </p>

          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect via the Application includes:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your email address, that you voluntarily give to us when you register with the Application.</li>
            <li><strong>Game Data:</strong> We store your game progress, including scores, levels, and XP, in your browser's local storage to provide a seamless experience. This data is not transmitted to our servers.</li>
          </ul>

          <h2 className="text-xl font-semibold">3. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Enable user-to-user communications on a future leaderboard.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Application.</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
          
          <h2 className="text-xl font-semibold">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: support@brainvia.app
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
