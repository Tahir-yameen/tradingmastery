import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black to-gray-900 px-4 py-16 text-gray-300 sm:px-6 lg:px-8">
      
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Terms & Conditions
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
              Welcome to{" "}
              <span className="text-green-500 font-semibold">
                Trading Mastery
              </span>
              . By accessing or using our platform, you agree to comply with and
              be bound by the following Terms and Conditions.
            </p>
          </section>

          {/* Use of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Use of Our Service
            </h2>
            <p>
              You agree to use our platform only for lawful purposes. You must
              not misuse our services or attempt to disrupt the platform.
            </p>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. User Accounts
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for maintaining account confidentiality</li>
              <li>All activities under your account are your responsibility</li>
              <li>You must provide accurate and complete information</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Intellectual Property
            </h2>
            <p>
              All content on this platform, including text, graphics, logos, and
              software, is the property of Trading Mastery and is protected by
              copyright laws.
            </p>
          </section>

          {/* Prohibited Activities */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Prohibited Activities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempting unauthorized access to systems</li>
              <li>Using the platform for fraudulent purposes</li>
              <li>Uploading harmful or malicious content</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              We are not liable for any direct, indirect, or incidental damages
              resulting from the use of our platform.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate access to our services
              at our discretion, without prior notice.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Changes to Terms
            </h2>
            <p>
              We may update these Terms & Conditions at any time. Continued use
              of the platform means you accept the updated terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Governing Law
            </h2>
            <p>
              These terms are governed by applicable laws. Any disputes will be
              handled in accordance with local regulations.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              <span className="text-green-500">
                support@tradingmastery.com
              </span>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}