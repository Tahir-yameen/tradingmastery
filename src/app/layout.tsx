import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/docs/Footer";
import Navbar from "@/components/docs/navbar";
import { DocsSidebarProvider } from "@/context/docs-sidebar-context";


export const metadata: Metadata = {
  title: "Trading Mastery",
  description:
    "Learn trading, test strategies, and build consistent profits with Trading Mastery platform.",

  metadataBase: new URL("https://tradingmastery.com"),

  openGraph: {
    title: "Trading Mastery",
    description:
      "Master trading with strategies, tools, and real-world execution.",
    url: "https://tradingmastery.com",
    siteName: "Trading Mastery",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trading Mastery",
    description:
      "Learn, Analyze, Trade, and Grow with Trading Mastery.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <DocsSidebarProvider>
            <Navbar />
            {children}
            <Footer />
          </DocsSidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}