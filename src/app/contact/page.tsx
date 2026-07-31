"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    "How quickly will I receive a response?",
    "Do you offer technical support?",
    "Can I schedule a 1-on-1 consultation?",
    "How can I provide feedback or suggestions?",
    "What topics can you help me with?",
    "Is my personal information secure?",
  ];

  return (
    <div className="bg-black px-4 py-6 text-white sm:px-6">

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-0 py-16 md:grid-cols-2 sm:px-6">
        
        <div>
          <p className="text-green-500 font-semibold mb-2">CONTACT US</p>
          
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            We're Here to Help <br />
            <span className="text-green-500">You Succeed</span>
          </h1>

          <p className="mt-4 max-w-md text-base text-gray-400 sm:text-lg">
            Have a question or need assistance? Our team is ready to help you on your trading journey.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <div className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

            {/* Image */}
            <Image
              src="/etm.png"
              alt="Envelope Illustration"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>

        {/* <div className="flex justify-center">
          <div className="w-64 h-64 bg-green-500/10 rounded-2xl flex items-center justify-center border border-green-500/20">
            <span className="text-green-500 text-3xl font-bold">TM</span>
          </div>
        </div> */}
      </section>

      {/* MAIN SECTION */}
      <section className="mx-auto grid max-w-7xl gap-6 px-0 py-2 sm:px-6 lg:grid-cols-3">

        {/* FORM */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <input placeholder="Full Name" className="input" />
            <input placeholder="Email Address" className="input" />
          </div>

          <input placeholder="Subject" className="input mt-4" />

          <textarea placeholder="Your Message..." rows={5} className="input mt-4"></textarea>

          <button className="mt-4 w-full bg-green-500 hover:bg-green-600 transition p-3 rounded-lg flex items-center justify-center gap-2 font-semibold">
            Send Message <Send size={16} />
          </button>

          <p className="text-xs text-gray-400 mt-3">
            We respect your privacy. Your information is safe with us.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-6">
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Get in Touch</h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex gap-3 items-center">
                <Mail className="text-green-500" size={18} />
                support@tradingmastery.com
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="text-green-500" size={18} />
                +1 (555) 123-4567
              </div>

              <div className="flex gap-3 items-center">
                <MapPin className="text-green-500" size={18} />
                New York, USA
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Connect With Us</h3>

            <div className="flex gap-4">
              {["🐦", "▶️", "📘", "📸"].map((icon, i) => (
                <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-0 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((q, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="bg-white/5 border border-white/10 rounded-lg p-4 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span>{q}</span>
                <span>{open === i ? "-" : "+"}</span>
              </div>

              {open === i && (
                <p className="text-gray-400 mt-2 text-sm">
                  This is a sample answer. You can customize it based on your needs.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-0 pb-20 sm:px-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div>
            <h3 className="font-semibold text-lg">Still have questions?</h3>
            <p className="text-gray-400 text-sm">
              Our support team is available Monday to Friday.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10">
              Live Chat
            </button>

            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}