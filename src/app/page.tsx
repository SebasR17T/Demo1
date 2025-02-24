import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
