"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ClientLottiePlayer = dynamic(() => import("./ClientLottiePlayer"), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <section className="mt-10 px-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 text-gray-800 dark:text-white typing-animation">
            Resell Software Licenses Seamlessly with SoftSell!
          </h1>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            SoftSell helps you legally buy and resell unused software licenses.
            Save money, reduce waste, and unlock the true value of digital
            assets with ease and transparency.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              Get Started
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border-2 border-red-600 text-red-600 dark:text-red-400 dark:border-red-400 font-semibold py-1.5 px-6 rounded-full hover:bg-red-600 hover:text-white dark:hover:bg-red-500 transition-transform transform hover:-translate-y-1"
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Right Side - Lottie Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mb-10 md:mb-0 mx-auto"
        >
          <ClientLottiePlayer src="/HeroAnimation.json" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
