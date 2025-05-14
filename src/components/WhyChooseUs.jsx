"use client";
import { Award, Clock, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description:
        "We ensure every license we resell is 100% genuine, verified, and legally compliant.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to assist you whenever you need help.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure & Reliable",
      description:
        "Advanced security measures to protect your data and ensure reliable service.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast Delivery",
      description:
        "Instant license delivery right after payment—no waiting, no delays.",
    },
  ];

  return (
    <section className="py-12 px-4 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
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
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-red-800 bg-card shadow-sm transition-all hover:shadow-md"
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
