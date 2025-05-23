"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ClientLottiePlayer = dynamic(() => import("./ClientLottiePlayer"), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <section className=" px-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-[90vh]">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 text-white typing-animation">
            Track Your Home Energy Usage Effortlessly with EcoTrack!
          </h1>

          <motion.p
            className="text-gray-300 mb-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            EcoTrack helps you monitor and optimize your home’s energy use effortlessly. Cut costs, reduce your carbon footprint, and take control of your energy habits - all from one simple dashboard.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              Get Started
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border-2 border-green-600 text-green-600  font-semibold py-1.5 px-6 rounded-full hover:bg-green-600 hover:text-white  transition-transform transform hover:-translate-y-1"
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
          className="w-full md:w-1/2 mb-6 md:mb-0 mx-auto flex justify-center"
        >
          <ClientLottiePlayer src="/HeroAnimation.json" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
