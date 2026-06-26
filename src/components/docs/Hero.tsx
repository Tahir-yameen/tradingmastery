// "use client";

// import { motion } from "framer-motion";
// import { content } from "@/data/content";
// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-[#050816] overflow-hidden">

//       <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent"/>

//       <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

//         <div>

//           <span className="px-4 py-2 rounded-full border border-green-500 text-green-400 text-sm">
//             {content.hero.badge}
//           </span>

//           <motion.h1
//             initial={{opacity:0,y:30}}
//             animate={{opacity:1,y:0}}
//             className="text-white mt-8 font-black leading-none"
//           >
//             <span className="block text-5xl lg:text-7xl">
//               {content.hero.title1}
//             </span>

//             <span className="block text-green-400 text-6xl lg:text-8xl">
//               {content.hero.title2}
//             </span>

//             <span className="block text-5xl lg:text-7xl">
//               {content.hero.title3}
//             </span>

//           </motion.h1>

//           <p className="text-gray-400 mt-8 text-lg max-w-xl">
//             {content.hero.description}
//           </p>

//           <div className="mt-10 flex gap-4">

//             <Link href="/docs/welcome" className="bg-green-500 px-6 py-3 rounded-lg font-bold text-black">
//               {content.hero.primaryCTA}
//             </Link>

//             {/* <button className="border border-gray-700 px-6 py-3 rounded-lg text-white">
//               View Curriculum
//             </button> */}

//           </div>

//           <div className="mt-10 flex gap-10 text-gray-300">
//             <div>
//               <div className="text-3xl font-bold">15k+</div>
//               <div>Readers</div>
//             </div>

//             <div>
//               <div className="text-3xl font-bold">4.9</div>
//               <div>Rating</div>
//             </div>
//           </div>

//         </div>

//         <motion.div
//           initial={{opacity:0,scale:.9}}
//           animate={{opacity:1,scale:1}}
//           className="flex justify-center"
//         >
//           <Image
//             src="/booktp.png"
//             alt="book"
//             width={480}
//             height={480}
//             className="drop-shadow-[0_35px_60px_rgba(0,255,136,.4)]"
//           />
//         </motion.div>

//       </div>

//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { content } from "@/data/content";
// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-[#050816] overflow-hidden">
      
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent" />

//       <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
//         {/* Left Content */}
//         <div>
          
//           {/* Badge */}
//           <span className="inline-block px-4 py-2 rounded-full border border-green-500 text-green-400 text-sm">
//             {content.hero.badge}
//           </span>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-white mt-8 font-black leading-tight"
//           >
//             <span className="block text-5xl lg:text-7xl">
//               {content.hero.title1}
//             </span>

//             <span className="block text-green-400 text-6xl lg:text-8xl">
//               {content.hero.title2}
//             </span>

//             <span className="block text-5xl lg:text-7xl">
//               {content.hero.title3}
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <p className="text-gray-400 mt-8 text-lg max-w-xl">
//             {content.hero.description}
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-10 flex gap-4 flex-wrap">
            
//             {/* Primary CTA */}
//             <Link
//               href="/docs/welcome"
//               className="bg-green-500 px-6 py-3 rounded-lg font-bold text-black inline-block
//                          hover:bg-green-400 transition-all duration-300 shadow-lg hover:scale-105"
//             >
//               {content.hero.primaryCTA}
//             </Link>
          
//             {/* Divider */}
//             <span className="w-px h-4 bg-border mx-1"></span>

//             {/* Link */}
//             <a
//               href="#live-reviews"
//               className="text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5"
//             >
//               Live Reviews Rating

//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-3 h-3"
//                 aria-hidden="true"
//               >
//                 <path d="M5 12h14" />
//                 <path d="m12 5 7 7-7 7" />
//               </svg>
//             </a>

//             <div>
//               <div className="text-lg font-bold">4.9</div>
//             </div>

//             {/* Secondary CTA
//             <Link
//               href="/docs/curriculum"
//               className="border border-gray-700 px-6 py-3 rounded-lg text-white inline-block
//                          hover:border-green-500 hover:text-green-400 transition-all duration-300"
//             >
//               View Curriculum
//             </Link> */}

//           </div>

//           <div className="flex items-center gap-2.5 mt-4">
//             {/* Animated Ping Dot */}
//             <span className="relative flex h-2.5 w-2">
//               <span
//                 className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
//                 style={{ animationDuration: "1s" }}
//               ></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
//             </span>

//             {/* Stats */}
//             <span className="text-lg font-bold text-foreground tracking-tight">
//               26,514+
//             </span>

//             <span className="text-sm text-muted-foreground">
//               professionals learning
//             </span>
//             </div>

//           {/* Stats */}
//           <div className="mt-10 flex gap-10 text-gray-300">
//             {/* <div>
//               <div className="text-3xl font-bold">15k+</div>
//               <div>Readers</div>
//             </div> */}

//           </div>

//         </div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="flex justify-center"
//         >
//           <Image
//             src="/booktp.png"
//             alt="Book Preview"
//             width={480}
//             height={480}
//             priority
//             className="drop-shadow-[0_35px_60px_rgba(0,255,136,0.4)]"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050816] overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full border border-green-500 text-green-400 text-sm">
            {content.hero.badge}
          </span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white mt-8 font-black leading-tight"
          >
            <span className="block text-5xl lg:text-7xl">
              {content.hero.title1}
            </span>

            <span className="block text-green-400 text-6xl lg:text-8xl">
              {content.hero.title2}
            </span>

            <span className="block text-5xl lg:text-7xl">
              {content.hero.title3}
            </span>
          </motion.h1>

          {/* Description */}
          <p className="text-gray-400 mt-8 text-lg max-w-xl">
            {content.hero.description}
          </p>

          {/* CTA Section */}
          <div className="mt-10 flex items-center gap-6 flex-wrap">
            
            {/* Primary CTA */}
            <Link
              href="/docs/welcome"
              className="bg-green-500 px-6 py-3 rounded-lg font-bold text-black inline-block
                         hover:bg-green-400 transition-all duration-300 shadow-lg hover:scale-105"
            >
              {content.hero.primaryCTA}
            </Link>

            {/* Divider */}
            <span className="hidden sm:block w-px h-6 bg-white/20" />

            {/* Reviews */}
            <a
              href="#live-reviews"
              className="text-sm font-bold text-green-400 hover:text-green-300 transition-colors flex items-center gap-1.5"
            >
              Live Reviews

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">4.9</span>
              <span className="text-sm text-gray-400">rating</span>
            </div>
          </div>

          {/* Live Users */}
          <div className="flex items-center gap-2.5 mt-6">
            
            {/* Animated Ping */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>

            <span className="text-lg font-bold text-white tracking-tight">
              26,514+
            </span>

            <span className="text-sm text-gray-400">
              professionals learning
            </span>
          </div>

            {/* Author */}
            <div className="flex items-center gap-2.5 mt-3">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                Authored by
              </span>
            </div>

        <div className="flex items-center gap-3 py-2">
          <a
            href="https://www.linkedin.com/in/tahir-yameen-22ba7a2b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition"
          >
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
              TY
            </div>

            <span className="text-sm font-bold text-white">
              Tahir Yameen
            </span>
          </a>
        </div>            
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center transition-transform duration-300 hover:scale-110"
        >
          <Image
            src="/og-image.png"
            alt="Trading Mastery Book Preview"
            width={320}
            height={320}
            priority
            className="rounded-lg shadow-[0_30px_80px_rgba(0,255,136,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
}