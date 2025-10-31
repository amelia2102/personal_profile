import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";
import PortfolioSection from "./components/PortofolioSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="font-poppins bg-white m-0 p-0 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <main className="px-6 py-10 space-y-10 bg-white">
        <SkillSection />
      </main>
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;