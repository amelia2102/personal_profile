import React from "react";
import profile from "../assets/images/profile.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-24 md:py-32 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="max-w-xl text-center md:text-left space-y-8 md:pl-12">
        <p className="text-purple-600 font-semibold">Hello, I’m</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Creative Designer & <br /> Frontend Developer
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Passionate in creating beautiful and functional digital experiences.
          I love blending creativity with technology to make impactful solutions
          for users and brands.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          <a
            href="#portofolio"
            className="bg-gradient-to-r from-[#755FFF] to-[#FF54B0] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-purple-500 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-8">
          <a
            href="https://github.com/amelia2102"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
            style={{ color: "#171515" }}
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.instagram.com/sir.yaeger_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
            style={{ color: "#E4405F" }}
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://wa.me/6282140849103"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
            style={{ color: "#25D366" }}
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/ameliaatp363750278/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
            style={{ color: "#0077B5" }}
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      <div className="relative mb-10 md:mb-0 flex justify-center md:justify-end items-center md:w-1/2">
        
        <div className="relative mb-10 md:mb-0 flex justify-center md:justify-end items-center md:w-1/2"></div>

        <img
          src={profile}
          alt="Profile"
          className="relative w-100 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-lg md:-translate-x-10 z-10"
        />
      </div>

    </section>
  );
}

export default HeroSection;