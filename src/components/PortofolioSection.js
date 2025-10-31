import React from "react";
import uidesign from "../assets/images/UiDesign.png";
import mobile from "../assets/images/MobileApp.png";
import motion from "../assets/images/Motion.png";
import { FaWhatsapp } from "react-icons/fa";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Dashboard Web App",
      category: "UI Design",
      description: "UI/UX, Frontend",
      image: uidesign,
    },
    {
      title: "Mobile App Landing",
      category: "Mobile App",
      description: "Design, Branding",
      image: mobile,
    },
    {
      title: "Motion Graphic",
      category: "Motion",
      description: "Animation, Branding",
      image: motion,
    },
  ];

  return (
    <section
      id="portofolio"
      className="w-full py-16 flex flex-col items-center scroll-mt-40"
      style={{ backgroundColor: "#FAFBFC" }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Portfolio</h2>

      <div className="flex flex-wrap justify-center gap-10 px-8 max-w-[1400px]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 w-[380px]"
          >
            <div className="relative w-full h-[240px]">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-3 right-3 bg-white text-sm font-semibold text-gray-700 px-3 py-1 rounded-full shadow">
                {project.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/6282140849103"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition">
        <FaWhatsapp className="text-white text-lg" />
        More on WhatsApp
      </a>
    </section>
  );
};

export default PortfolioSection;