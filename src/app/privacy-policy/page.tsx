import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black to-gray-900 px-4 py-16 text-gray-300 sm:px-6 lg:px-8">
      
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 leading-relaxed">

          {/* Intro */}
          <section>
            <p>
              At <span className="text-green-500 font-semibold">Trading Mastery</span>, 
              we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal details (name, email address, phone number)</li>
              <li>Usage data (pages visited, time spent, interactions)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          {/* How We Use */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate with you</li>
              <li>To personalize user experience</li>
              <li>To ensure platform security</li>
            </ul>
          </section>

          {/* Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Sharing Your Information
            </h2>
            <p>
              We do not sell or trade your personal information. We may share data 
              with trusted partners who help us operate our platform, provided they 
              agree to keep your information confidential.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Cookies
            </h2>
            <p>
              We use cookies to enhance your experience. You can choose to disable 
              cookies through your browser settings.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your data. 
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be 
              posted on this page with an updated date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Contact Us
            </h2>
            <p>
              If you have any questions, contact us at:
              <br />
              <span className="text-green-500">support@tradingmastery.com</span>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}