
import { FileText } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6 flex items-center">
          <FileText className="mr-3" /> Terms of Service
        </h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing NewsPulse, you agree to these terms of service. 
            Please read them carefully.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Respect content copyrights</li>
            <li>Do not reproduce content without permission</li>
            <li>Maintain respectful communication</li>
            <li>Use the service for lawful purposes only</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            NewsPulse provides news content for informational purposes. 
            We are not responsible for actions taken based on our content.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
