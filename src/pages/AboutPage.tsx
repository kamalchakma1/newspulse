
import { Shield, FileText, Info } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-6 flex items-center">
          <Info className="mr-3" /> About InteractiNews
        </h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            InteractiNews is dedicated to delivering the latest news with interactive experiences 
            that engage and inform. We believe in transparent, unbiased reporting that empowers 
            our readers to understand the world around them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            A team of passionate journalists and technology experts committed to bringing 
            you the most up-to-date and engaging news across various categories including 
            Politics, Entertainment, Sports, Technology, and Business.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Accuracy and Integrity</li>
            <li>Transparency</li>
            <li>User-Centric Experience</li>
            <li>Continuous Innovation</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
