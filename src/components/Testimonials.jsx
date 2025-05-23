"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Abby Joe",
    role: "Homeowner",
    place: "Austin, TX",
    quote:
      "EcoTrack made monitoring my home energy simple and effective. The app helped me cut down on unnecessary usage.",
    image: "/user1.jpg",
  },
  {
    name: "Shikhavat",
    role: "Energy Advisor",
    place: "San Francisco, CA",
    quote:
      "Thanks to EcoTrack’s real-time data, I guide clients to reduce energy waste and save on bills efficiently.",
    image: "/user4.jpg",
  },
  {
    name: "Emma John",
    role: "Smart Home User",
    place: "Seattle, WA",
    quote:
      "I love EcoTrack’s alerts and Alexa integration. It’s a smart device every tech-savvy homeowner should have.",
    image: "/user3.jpg",
  },
  {
    name: "Alex Smith",
    role: "Home Energy Manager",
    place: "New York, NY",
    quote:
      "EcoTrack’s integration and detailed reports make managing my home’s energy use much easier and smarter.",
    image: "/user2.jpg",
  },
];



const Testimonials = () => {
  return (
    <div className="py-10 px-5">
      <div className="w-full flex justify-center items-center h-[90px] md:h-[90px] sm:h-[120px]">
        <motion.h2
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white  text-3xl md:text-[40px] sm:text-[30px] text-center font-semibold"
        >
          Testimonials
        </motion.h2>
      </div>

      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3000}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          960: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        className="w-full max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center p-4">
              <div className="bg-[#1a1a1a] rounded-xl p-6 w-[300px] border h-full text-center transform transition-all duration-500 ease-in-out mt-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto mb-4 rounded-full object-cover shadow-md border-2 border-gray-200"
                />
                <p className="text-gray-300 italic mb-4">
                  “{testimonial.quote}”
                </p>
                <h3 className="text-lg font-semibold text-gray-400">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-200">
                  {testimonial.role}
                  {testimonial.place && (
                    <>
                      {" "}
                      — <span>{testimonial.place}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
