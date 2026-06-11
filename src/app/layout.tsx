import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Trading Mastery",
  description: "Learn trading from beginner to professional level.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
