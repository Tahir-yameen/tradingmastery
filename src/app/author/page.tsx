"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function AuthorPage() {
  return (
    <div className="bg-[#050816] text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative py-16 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl lg:text-6xl font-black">
            Meet <span className="text-green-400">Trading Professional</span>
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Learn real-world trading strategies, risk management, and mindset
            from an experienced trader.
          </p>
        </motion.div>
      </section>

      {/* ================= AUTHOR PROFILE ================= */}
      <section className="px-6 py-2">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/author.png"
              alt="Author"
              width={150}
              height={150}
              className="rounded-2xl"
            />
          </motion.div>

          {/* RIGHT - CONTENT */}
          <div>
            <h6 className="text-lg font-bold">
              TY
            </h6>

            <p className="text-green-400 font-semibold mt-2">
              Professional Trading
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              A professional trader with years of experience in
              Forex, Crypto and Stock markets. Specializes in price action,
              risk management and building consistent trading systems.
              Through Trading Mastery, helping beginners become confident and
              professional traders.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-6">
              {/* <a
                href="https://www.linkedin.com/in/tahir-yameen-22ba7a2b4/"
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
              >
                <FaLinkedin />
              </a> */}

              {/* <a
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
              >
                <FaYoutube />
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-6 py-16 mt-10 bg-black/40">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {[
            { value: "10+", label: "Years Experience" },
            { value: "25K+", label: "Students" },
            { value: "4.9", label: "Rating" },
            { value: "100+", label: "Strategies" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-green-400">
                {item.value}
              </h3>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Expertise
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Price Action",
              "Risk Management",
              "Technical Analysis",
              "Crypto Trading",
              "Forex Trading",
              "Trading Psychology",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Start Your Trading Journey Today 🚀
        </h2>

        <p className="text-gray-400 mt-4">
          Learn strategies, manage risk, and build consistent profits.
        </p>

        <Link
          href="/docs/welcome"
          className="inline-block mt-8 bg-green-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-green-400 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}