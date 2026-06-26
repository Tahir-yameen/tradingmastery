import React from "react";
import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About - Trading Mastery",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300 px-6 py-16">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Trading Mastery
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Trading Mastery is a modern platform designed to help traders 
              go from beginner to professional level with structured learning, 
              powerful tools, and real-world strategies.
            </p>

            <p className="mt-4 text-gray-400">
              Our mission is to simplify trading and provide clear, actionable 
              knowledge without confusion or unnecessary complexity.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center [--img-size:320px] md:[--img-size:420px]">
            <div className="relative w-[--img-size] h-[--img-size]">

              {/* Glow */}
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

              <Image
                src="/etm.png"
                alt="About Trading Mastery"
                fill
                className="object-contain relative z-10"
              />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
          {[
            { value: "24K+", label: "Active Users" },
            { value: "150+", label: "Strategies" },
            { value: "10K+", label: "Students" },
            { value: "4.9★", label: "User Rating" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur"
            >
              <h3 className="text-2xl font-bold text-green-500">
                {item.value}
              </h3>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* MISSION + VISION */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Our Mission
            </h2>
            <p className="text-gray-400">
              To empower traders with practical knowledge, tools, and confidence 
              to succeed in financial markets without relying on guesswork.
            </p>
          </div>

          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Our Vision
            </h2>
            <p className="text-gray-400">
              To become a global hub for trading education where anyone can learn, 
              grow, and achieve financial independence.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Beginner to Pro",
                desc: "Step-by-step learning path for all levels",
              },
              {
                title: "Real Strategies",
                desc: "Practical trading systems used by professionals",
              },
              {
                title: "Modern Tools",
                desc: "Advanced calculators and trading utilities",
              },
              {
                title: "AI Insights",
                desc: "Smart analysis to improve decision-making",
              },
              {
                title: "Community",
                desc: "Learn and grow with other traders",
              },
              {
                title: "Continuous Updates",
                desc: "Always improving with latest market trends",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-green-500/40 transition"
              >
                <h3 className="text-lg font-semibold text-green-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Trading Journey Today 🚀
          </h2>
          <p className="text-gray-400 mb-6">
            Join thousands of traders improving their skills daily.
          </p>

          <a
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}