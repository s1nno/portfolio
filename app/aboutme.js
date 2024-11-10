import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Projects from "./components/Projects";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <AboutSection />
        
      </main>
    </>
  );
}
