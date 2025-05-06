import React from 'react'
import Footer from '../../components/Footer'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Wavvy",
};

const TermsAndConditions = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        {/* Header */}
        {/* <header className="bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500 text-white py-10 text-center">
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="text-sm mt-3 text-white/90">
            Please read these terms and conditions carefully before using Wavvy.
          </p>
        </header> */}

<header className="bg-gradient-to-r from-indigo-500 via-purple-500   to-pink-500 text-white py-10 text-center">
          <h1 className="text-4xl mt-14 font-bold">Terms and Conditions</h1>
          <p className="text-md mt-2 text-gray-300">
          Please read these terms and conditions carefully before using Wavvy.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-xl  font-semibold text-indigo-700 mb-3">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using Wavvy, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of the terms, you should not use our website.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              These terms apply to all visitors, users, and others who access or use the service.
            </p>
          </section>

          {/* Use of Content */}
          <section>
            <h2 className="text-xl text-indigo-700 font-semibold mb-3">Use of Content</h2>
            <p className="text-gray-700 leading-relaxed">
              The content provided on Wavvy is for informational purposes only. It is not intended as financial, investment, or legal advice. Users should conduct their own due diligence before making any decisions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may not reproduce, distribute, or modify any content without express written permission from Wavvy.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-xl text-indigo-700 font-semibold mb-3">User Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Accountability:</strong> You are responsible for any activity that occurs under your account.</li>
              <li><strong>Accuracy:</strong> You agree not to post misleading, false, or deceptive content on the site.</li>
              <li><strong>Compliance:</strong> You must comply with all applicable laws and regulations when using our services.</li>
              <li><strong>Security:</strong> Do not attempt to access data or systems you are not authorized to use.</li>
              <li><strong>Respect:</strong> Engage respectfully with other users and our team. Abuse or harassment will not be tolerated.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl text-indigo-700 font-semibold mb-3">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, including articles, graphics, logos, and design elements, is the property of Wavvy and protected by copyright and trademark laws.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Unauthorized use of our content is strictly prohibited and may result in legal action.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl text-indigo-700 font-semibold mb-3">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              Wavvy will not be liable for any losses or damages arising from the use or inability to use the website, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl text-indigo-700 font-semibold mb-3">Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Continued use of the site after changes constitutes your acceptance of the new terms.
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default TermsAndConditions;
