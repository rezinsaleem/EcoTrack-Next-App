"use client";
import { Monitor, ChartPie, Bell, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
 const features = [
  {
    icon: <Monitor className="h-10 w-10 text-primary" />,
    title: "Real-Time Energy Monitoring",
    description:
      "Track your home’s energy consumption live easily through our intuitive mobile app.",
  },
  {
    icon: <ChartPie className="h-10 w-10 text-primary" />,
    title: "Detailed Usage Reports",
    description:
      "Analyze detailed daily and monthly energy data to optimize your electricity use and save money.",
  },
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: "Smart Alerts & Notifications",
    description:
      "Receive instant notifications for unusual energy spikes or potential device issues promptly.",
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Seamless Smart Home Integration",
    description:
      "Works smoothly with Alexa, Google Home, and many other smart devices in your home.",
  },
];


  return (
    <section className="py-12 px-4 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional service and value to
            our customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 px-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                delay: index * 0.1, 
              }} 
              className="flex flex-col items-center text-center p-6 rounded-lg border border-green-700 bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
