
import { Shield } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-6 flex items-center">
          <Shield className="mr-3" /> Privacy Policy
        </h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect minimal personal information to provide and improve our service. 
            This may include browsing data, device information, and optional newsletter subscriptions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">How We Use Your Data</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Improve user experience</li>
            <li>Personalize content</li>
            <li>Send optional newsletters</li>
            <li>Analyze site traffic</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or delete your personal information. 
            Contact us at privacy@interactinews.com for any privacy-related requests.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;
