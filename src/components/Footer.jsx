import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react"; // added Linkedin icon

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1: Name and Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-green-500">Sayan Mukherjee</h2>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Passionate Web Developer creating modern and responsive websites.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-green-500 mb-3">
            Contact Info
          </h3>
          <div className="text-gray-300 space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-500" />
              <a
                href="mailto:smksayan@gmail.com"
                className="hover:text-green-500 transition"
              >
                smksayan@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" /> +91 7908272731
            </p>
            <p className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-green-500" />
              <a
                href="https://www.linkedin.com/in/sayan-mukherjee-179266227/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-green-500 mb-3">
            Quick Links
          </h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a
                href="#heroSection"
                className="hover:text-green-500 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-500 transition">
                Who I Am
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-500 transition">
                What I Do
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-green-500 transition">
                My Works
              </a>
            </li>
            <li>
              <a href="#blogs" className="hover:text-green-500 transition">
                My Blog
              </a>
            </li>
            <li>
              <a href="#hireMe" className="hover:text-green-500 transition">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-800 pt-5">
        © {new Date().getFullYear()} Sayan Mukherjee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
