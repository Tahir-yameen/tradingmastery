"use client";

import Link from "next/link";
// import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import Hero from "@/components/docs/Hero";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-linear-to-b from-black to-gray-900">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              TRADING
              <br />
              MASTERY
            </h2>
            {/* <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Build modern, scalable and beautifully structured
              documentation with ease.
            </p> */}
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
              CONCERNS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="footer-link">
                  •	Start Your Journey
                </Link>
              </li>
              <li>
                <Link href="/author" className="footer-link">
                  •	Author
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="footer-link">
                  
                </Link>
              </li> */}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
              Who Are We.?
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="footer-link">
                  •	About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  •	Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="footer-link">
                  •	Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="footer-link">
                  • Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
              Stay Updated
            </h3>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-3 py-2 text-sm text-white outline-none w-full placeholder:text-gray-500"
              />
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 text-sm font-medium text-black transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* COPYRIGHT */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} YourDocs. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
            {/* <div className="flex items-center gap-4 text-gray-400">
            
            <a href="#" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <Github size={18} />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <Twitter size={18} />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <Linkedin size={18} />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <Youtube size={18} />
            </a>

            </div> */}
        </div>
      </div>
    </footer>
  );
}