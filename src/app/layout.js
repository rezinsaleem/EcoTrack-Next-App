import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoftSell - Your trusted platform for premium software deals.",
  description: "A platform for selling software and services",
  icons: {
    icon: "/softsell1.jpg",
  },
  openGraph: {
    title: "SoftSell",
    description: "A platform for selling software and services",
    url: "",
    siteName: "SoftSell",
    images: [
      {
        url: "/softsell1.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      {/*  */}
      <body
        className={`
    ${geistSans.variable} ${geistMono.variable}
    antialiased bg-white text-black dark:bg-black dark:text-white
    min-h-screen w-full overflow-x-hidden
    transition-colors duration-300
  `}
      >
        <Navbar />
        {children}
        <ChatWidget/>
        <Footer />
      </body>
    </html>
  );
}
