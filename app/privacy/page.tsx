import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        {/* Header */}
        <header className="bg-gray-900 text-white py-10 text-center">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-md mt-2 text-gray-400">
            Learn how Revision collects, uses, and protects your personal information.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl text-gray-200 font-semibold mb-4">Your Privacy Matters</h2>
            <p className="text-gray-300 text-md leading-relaxed">
              Revision is committed to protecting your privacy. This policy explains what information we collect, how we use it, and the choices you have. We are transparent about our practices and dedicated to safeguarding your data.
            </p>
            <p className="text-gray-300 text-md leading-relaxed mt-4">
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-2xl text-gray-200 font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-300 text-md leading-relaxed">
              We may collect personal information such as your name, email address, and IP address when you sign up for newsletters, comment on articles, or contact us. We also gather non-personal data through cookies and analytics tools.
            </p>
            <p className="text-gray-300 text-md leading-relaxed mt-4">
              This information helps us improve our content, monitor performance, and provide a better user experience.
            </p>
          </section>

          {/* How We Use It */}
          <section>
            <h2 className="text-2xl text-gray-200 font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-md text-gray-300 space-y-2">
              <li>To provide and maintain our website and services.</li>
              <li>To personalize content and deliver relevant updates.</li>
              <li>To respond to your comments or inquiries.</li>
              <li>To analyze trends and improve functionality.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl text-gray-200 font-semibold mb-4">Data Sharing & Third Parties</h2>
            <p className="text-gray-300 text-md leading-relaxed">
              We do not sell or rent your personal information. We may share data with trusted third-party providers for services like analytics, email distribution, or hosting — all bound by confidentiality agreements.
            </p>
            <p className="text-gray-300 text-md leading-relaxed mt-4">
              These partners only access data necessary to perform their specific tasks and are obligated not to disclose or use it for other purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl text-gray-200 font-semibold mb-4">Your Privacy Rights</h2>
            <p className="text-gray-300 text-md leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also opt out of email communications at any time. To exercise these rights, please contact us directly.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl text-gray-200 font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 text-md leading-relaxed">
              We may update our Privacy Policy occasionally. Changes will be reflected on this page with a revised effective date. Continued use of our services means you accept the updated terms.
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;
