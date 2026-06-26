// export function createMetadata({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) {
//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//     },
//     twitter: {
//       title,
//       description,
//     },
//   };
// }

export function createMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const baseUrl = "https://tradingmastery.com";

  return {
    metadataBase: new URL(baseUrl),

    title,
    description,

    keywords: ["trading mastery", "learn trading", "trading course online", "forex trading for beginners", "crypto trading strategies", "stock market trading course", "price action trading", "technical analysis", "trading psychology", "day trading", "swing trading", "trading mentorship", "profitable trading system", "smart money concepts", "ICT trading", "trading education"],

    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "Trading Mastery",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.png`],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}