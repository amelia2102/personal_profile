import React from "react";
import profile from "../assets/images/profile.jpg"; 
import { FaCheck, FaPaperPlane } from "react-icons/fa";

function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-[580px] w-full flex items-center justify-center pt-32 pb-16 px-6"
      style={{ backgroundColor: "#FAFBFC" }}
    >
      <div className="max-w-[1050px] w-full flex flex-col md:flex-row items-center md:items-start justify-center mx-auto gap-16 text-left">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="relative flex-shrink-0">
            <div className="relative rounded-3xl border-4 border-[#E0EAFE] overflow-hidden shadow-[0px_8px_10px_rgba(0,0,0,0.1),0px_20px_25px_rgba(0,0,0,0.1)] transform transition-transform duration-300 hover:scale-105">
              <img
                src={profile}
                alt="Profile"
                className="w-72 h-72 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg max-w-2xl mx-auto md:mx-0">
              Hi! I’m Amelia Ayudyaning a passionate designer and frontend developer
              who loves crafting clean, modern, and creative designs. I combine my skills
              in visual design, coding, and illustration to create engaging digital experiences.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              {["UI/UX Design", "Graphic Design", "Drawing", "Branding"].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 bg-[#F3F1FF] text-[#5B4BDF] px-5 py-2.5 rounded-lg font-medium transform transition-transform duration-300 hover:scale-105"
                >
                  <FaCheck className="text-sm" /> {skill}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#755FFF] to-[#FF54B0] text-white px-16 py-4 rounded-xl text-lg font-semibold shadow-md hover:opacity-90 transition"
            >
              <FaPaperPlane /> Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;