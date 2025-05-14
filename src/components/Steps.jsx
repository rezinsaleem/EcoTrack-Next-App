'use client';
import { motion } from 'framer-motion';


const Steps = () => {
  return (
    <div className="relative overflow-hidden text-center text-white  px-5 py-[50px] mt-10">
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2  blur-[150px] -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-4xl font-bold mb-10"
      >
        It Works in<br />
        Just 3 Simple Steps
      </motion.h2>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-10"
      >
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center gap-5 bg-[#1a1a1a] p-6 w-[280px] lg:w-[250px] lg:h-[350px] rounded-[12px] shadow-md transition-transform duration-300 relative lg:rotate-[-5deg] lg:top-[50px] mx-4">
          <img src="/upload1.png" width="100" alt="Consultation" />
          <h3 className="text-[23px] font-medium text-white py-5">Upload License</h3>
          <p className="text-[14px] text-[#b5b5b5]">Easily upload your software license to start the process.</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center gap-5 bg-[#1a1a1a] p-6 w-[280px] lg:w-[280px] rounded-[12px] shadow-md transition-transform duration-300 relative mx-4 hover:-translate-y-2">
          <img src="/barchart1.png" width="140" alt="Design & Development" />
          <h3 className="text-[23px] font-medium text-white py-5">Get Valuation</h3>
          <p className="text-[14px] text-[#b5b5b5]">Receive an instant and accurate valuation of your license.</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center gap-5 bg-[#1a1a1a] p-6 w-[280px] lg:w-[250px] lg:h-[350px] rounded-[12px] shadow-md transition-transform duration-300 relative lg:rotate-[5deg] lg:top-[50px] mx-4">
          <img src="/dollar.png" width="100" alt="Review & Launch" />
          <h3 className="text-[23px] font-medium text-white py-5">Get Paid</h3>
          <p className="text-[14px] text-[#b5b5b5]">Complete the sale securely and receive your payment instantly.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Steps;
