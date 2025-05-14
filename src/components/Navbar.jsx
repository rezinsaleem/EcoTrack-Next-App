"use client";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    const initialDark = storedTheme
      ? storedTheme === "dark"
      : prefersDark;
  
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-between">
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="mr-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-start items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/softsell.png" alt="SoftSell Logo" className="h-9 w-9" />
            <span className="text-2xl font-bold">
              <span className="text-red-600">Soft</span>
              <span className="text-gray-600 dark:text-gray-200">Sell</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={toggleTheme} className="ml-2">
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#about" className="text-gray-600 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white">About Us</Link>
          <Link href="#how-it-works" className="text-gray-600 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white">How It Works</Link>
          <Link href="#why-choose-us" className="text-gray-600 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white">Sell Liscence</Link>
          
          <Link href="#contact" className="text-gray-600 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white">Contact</Link>

          <Link href="#signin" className="text-gray-600 dark:text-gray-300 font-semibold hover:text-black dark:hover:text-white">Sign In</Link>

          <button onClick={toggleTheme} className="ml-2">
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 pb-4">
          <Link href="#about" onClick={() => setMenuOpen(false)} className="block text-gray-700 dark:text-gray-200">About Us</Link>
          <Link href="#how-it-works" onClick={() => setMenuOpen(false)} className="block text-gray-700 dark:text-gray-200">How It Works</Link>
          <Link href="#why-choose-us" onClick={() => setMenuOpen(false)} className="block text-gray-700 dark:text-gray-200">Why Choose Us</Link>
          <Link href="#testimonials" onClick={() => setMenuOpen(false)} className="block text-gray-700 dark:text-gray-200">Testimonials</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-700 dark:text-gray-200">Contact</Link>
          
          <Link href="#signin" onClick={() => setMenuOpen(false)} className="block text-gray-700 dark:text-gray-200">Sign In</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
