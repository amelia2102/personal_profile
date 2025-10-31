import React from "react";
import { FaPaintBrush, FaCode, FaPenNib, FaBolt } from "react-icons/fa";

function MySkillSection() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-white w-full px-4 sm:px-6 lg:px-8 pb-20 scroll-mt-48"
      style={{ maxWidth: '1140px', height: 'auto', margin: '0 auto' }}
    >
      <div className="flex flex-col items-center justify-start w-full">
        <h2 className="text-[25px] font-bold text-gray-900 text-center mb-[53px]">
          My Skill
        </h2>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
            justify-items-center
          "
          style={{ width: "100%", maxWidth: "976px" }}
        >
          <div
            className="bg-[#F0E7FF] rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{ width: "220px", height: "192px" }}
          >
            <FaPaintBrush
              className="text-[#FF54B0]"
              style={{ width: "40.5px", height: "36px", marginBottom: "12px" }}
            />
            <h3 className="text-[18px] font-bold text-gray-900 mb-1">
              UI/UX
            </h3>
            <p className="text-[14px] font-normal text-[#5A5F73]">
              Figma, Adobe XD, Sketch
            </p>
          </div>

          <div
            className="bg-[#E0EAFE] rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{ width: "220px", height: "192px" }}
          >
            <FaCode
              className="text-[#7755FF]"
              style={{ width: "40.5px", height: "36px", marginBottom: "12px" }}
            />
            <h3 className="text-[18px] font-bold text-gray-900 mb-1">
              Frontend Dev
            </h3>
            <p className="text-[14px] font-normal text-[#5A5F73]">
              React, Vue, Tailwind
            </p>
          </div>

          <div
            className="bg-[#FFE978] rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{ width: "220px", height: "192px" }}
          >
            <FaPenNib
              className="text-[#EAB308]"
              style={{ width: "40.5px", height: "36px", marginBottom: "12px" }}
            />
            <h3 className="text-[18px] font-bold text-gray-900 mb-1">
              Branding
            </h3>
            <p className="text-[14px] font-normal text-[#5A5F73]">
              Logo, Identity, Print
            </p>
          </div>

          <div
            className="bg-[#F0E7FF] rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            style={{ width: "220px", height: "192px" }}
          >
            <FaBolt
              className="text-[#7755FF]"
              style={{ width: "40.5px", height: "36px", marginBottom: "12px" }}
            />
            <h3 className="text-[18px] font-bold text-gray-900 mb-1">
              Motion Graphic
            </h3>
            <p className="text-[14px] font-normal text-[#5A5F73]">
              After Effects, Lottie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkillSection;