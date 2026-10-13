import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const handwriting = Caveat({ variable: "--font-handwriting", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: "Faiz Ahmad — MERN Full Stack Developer & AI Builder",
  description: "Meet Faiz Ahmad, a MERN full stack developer and AI builder. Explore web development projects, GitHub contributions, and experience with React, Next.js, Node.js, and AI.",
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  category: "technology",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", url: "/", siteName: "Faiz Ahmad", locale: "en_US", title: "Faiz Ahmad — Developer & AI Builder", description: "Thoughtful web experiences. Useful AI products. Explore Faiz Ahmad’s full stack development portfolio.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Faiz Ahmad — MERN Full Stack Developer & AI Builder" }] },
  twitter: { card: "summary_large_image", title: "Faiz Ahmad — Developer & AI Builder", description: "Explore Faiz Ahmad’s full stack development portfolio, GitHub activity, and AI projects.", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${handwriting.variable} h-full antialiased`}
    >
      {/* Browser extensions may add body attributes before React hydrates. */}
      <body className="min-h-full font-sans" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('theme')==='light'?'light':'dark'}catch{}` }}/>
        {children}
      </body>
    </html>
  );
}
