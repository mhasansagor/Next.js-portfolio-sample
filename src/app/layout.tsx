import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehedi Hasan — Portfolio | Web Developer",
  description:
    "Futuristic developer portfolio of Mehedi Hasan, a senior web engineer crafting performant, beautiful digital experiences with React, Next.js & Tailwind CSS.",
  keywords: [
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Matthew Dodger",
    "Frontend Engineer",
    "Terminal Portfolio",
  ],
  authors: [{ name: "Mehedi Hasan" }],
  
  openGraph: {
    title: "Mehedi Hasanr — Portfolio | Web Developer",
    description:
      "Futuristic developer portfolio of Mehedi Hasan, a senior web engineer crafting performant digital experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan — Portfolio | Web Developer",
    description:
      "Futuristic developer portfolio of Mehedi Hasan, a senior web engineer crafting performant digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexMono.variable} antialiased`}
        style={{ backgroundColor: "#011629" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
