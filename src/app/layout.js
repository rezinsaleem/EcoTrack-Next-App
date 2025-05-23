import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EcoTrack - Home Energy Management Made Easy.",
  description: "A platform for tracking and managing home energy consumption.",
  keywords:
    "home energy management, energy consumption, tracking, eco-friendly",
  icons: {
    icon: "/EcoTrack.jpg",
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*  */}
      <body
        className={`
    ${geistSans.variable} ${geistMono.variable}
    antialiased bg-[#0f0f0f] text-gray-200
    min-h-screen w-full overflow-x-hidden
  `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
