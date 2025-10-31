import React from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function ContactSection() {
  return (
    <section 
    id="contact"
    className="bg-[#F3E8FF] py-20 flex justify-center items-center scroll-mt-40">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center px-8 md:px-16 gap-10">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-600 mb-8">
            Interested working together? Let’s talk about your project and make
            something amazing!
          </p>

          <div className="space-y-3 mb-8">
            <p className="flex items-center justify-center md:justify-start gap-3 text-gray-700">
              <FaEnvelope className="text-purple-600" />{" "}
              <span className="font-medium text-purple-600">ameliaayudyaningtikoputri@gmail.com</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3 text-gray-700">
              <FaPhone className="text-purple-600" />{" "}
              <span className="font-medium text-purple-600">+62 821-4084-9103</span>
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4 text-gray-600">
            <a href="https://github.com/amelia2102"
               target="_blank"
               rel="noopener noreferrer"
               className="transition transform hover:scale-110"
               style={{ color: "#E4405F" }}
            >
              <FaInstagram size={20} />
            </a>
            <a href="https://www.instagram.com/sir.yaeger_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
               target="_blank"
               rel="noopener noreferrer"
               className="transition transform hover:scale-110"
               style={{ color: "#171515" }}
            >
              <FaGithub size={20} />
            </a>
            <a href="https://wa.me/6282140849103"
               target="_blank"
               rel="noopener noreferrer"
               className="transition transform hover:scale-110"
               style={{ color: "#25D366" }}
            >
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ameliaatp363750278/"
               target="_blank"
               rel="noopener noreferrer"
               className="transition transform hover:scale-110"
               style={{ color: "#0077B5" }}
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Type your message..."
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#755FFF] to-[#FF54B0] text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;