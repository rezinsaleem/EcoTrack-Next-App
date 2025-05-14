"use client";

import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  licenseType: z.string().min(1, { message: "Please select a license type" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    try {
      const fieldSchema = z.object({ [name]: formSchema.shape[name] });
      fieldSchema.parse({ [name]: value });
      setErrors((prev) => ({ ...prev, [name]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = error.errors[0]?.message || "Invalid input";
        setErrors((prev) => ({ ...prev, [name]: message }));
      }
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, licenseType: value }));
    validateField("licenseType", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let isValid = true;
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      try {
        const fieldSchema = z.object({ [key]: formSchema.shape[key] });
        fieldSchema.parse({ [key]: value });
      } catch (error) {
        isValid = false;
        if (error instanceof z.ZodError) {
          newErrors[key] = error.errors[0]?.message || "Invalid input";
        }
      }
    });

    setErrors(newErrors);

    if (isValid) {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        });
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-3xl mx-auto my-8 p-6 bg-[#1a1a1a] border rounded-lg shadow-sm">
        <div className="text-center py-10">
          <div className="text-green-600 text-3xl mb-4">✔️</div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className=" mb-6">
            Your message has been received. We’ll get back to you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-red-500 to-red-700  text-white px-4 py-2 rounded hover:bg-red-800"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-12 px-4">
      <div className="container mx-auto my-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4  max-w-2xl mx-auto">
            Have questions or ready to get started? Fill out the form below.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto p-6 bg-[#1a1a1a] border rounded-lg shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full px-4 py-2 border rounded ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-sm mt-1 text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`w-full px-4 py-2 border rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-sm mt-1 text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label className="block mb-1 font-medium">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className={`w-full px-4 py-2 border rounded ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.company && (
                <p className="text-sm mt-1 text-red-500">{errors.company}</p>
              )}
            </div>

            {/* License Type */}
            <div>
              <label className="block mb-1 font-medium">
                License Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.licenseType}
                onChange={handleSelectChange}
                className={`w-full px-4 py-2 border rounded bg-[#1a1a1a] ${
                  errors.licenseType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select license type</option>
                <option value="basic">Proprietary License</option>
                <option value="professional">Subscription License</option>
                <option value="enterprise">Freeware License</option>
                <option value="custom">Floating License</option>
              </select>
              {errors.licenseType && (
                <p className="text-sm mt-1 text-red-500">
                  {errors.licenseType}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block mb-1 font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or inquiry..."
              className={`w-full px-4 py-2 border rounded min-h-[120px] ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-sm mt-1 text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-red-800 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
