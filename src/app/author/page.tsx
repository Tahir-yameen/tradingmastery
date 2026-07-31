"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-[#050816] px-4 py-6 text-white sm:px-6">

      {/* ================= HERO ================= */}
      <section className="relative px-0 py-16 text-center sm:px-6">
        <div className="absolute inset-0 bg-linear-to-b from-green-500/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-black sm:text-4xl lg:text-6xl">
            Meet <span className="text-green-400">Trading Professional</span>
          </h1>

          <p className="mt-3 text-base text-gray-400 sm:text-lg">
            Learn real-world trading strategies, risk management, and mindset
            from an experienced trader.
          </p>
        </motion.div>
      </section>

      {/* ================= AUTHOR PROFILE ================= */}
      <section className="py-2 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-2">

          {/* LEFT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/author.jpg"
              alt="Author"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </motion.div>

          {/* RIGHT - CONTENT */}
          <div>
            <h6 className="text-lg font-bold">
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
      <section className="mt-10 bg-black/40 px-0 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center sm:gap-8 md:grid-cols-4">

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
      <section className="px-0 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">

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
      <section className="px-0 py-20 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
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