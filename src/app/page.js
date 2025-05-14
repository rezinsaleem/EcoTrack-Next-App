
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Contact } from "lucide-react";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <Steps/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactForm/>
    </>
  );
}
