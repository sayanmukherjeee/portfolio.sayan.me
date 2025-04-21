import React, { useState, useEffect, useRef } from "react";

// MUI Icons
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BuildIcon from "@mui/icons-material/Build";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ArticleIcon from "@mui/icons-material/Article";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navItems = [
    { href: "#heroSection", icon: <HomeIcon fontSize="small" />, label: "Home" },
    { href: "#about", icon: <PersonIcon fontSize="small" />, label: "Who I Am" },
    { href: "#services", icon: <BuildIcon fontSize="small" />, label: "What I Do" },
    { href: "#projects", icon: <WorkOutlineIcon fontSize="small" />, label: "My Works" },
    { href: "#blogs", icon: <ArticleIcon fontSize="small" />, label: "My Blog" },
    { href: "#hireMe", icon: <MailOutlineIcon fontSize="small" />, label: "Hire Me" },
  ];
  

  return (
    <>
      <header
        className={`bg-[#F0FFF4] w-full flex items-center justify-between px-6 py-4 sticky top-0 z-20 transition-shadow duration-200 ${
          hasShadow ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-900">
            <span className="text-green-600">S</span>ayan{" "}
            <span className="text-green-600">M</span>ukherjee
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              className="flex items-center space-x-1 text-gray-800 hover:text-green-500 transition-colors duration-200"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-red-500"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          <a
            href="/pdf/Sayan-Mukherjee-Resume-SoftwareEngineer.pdf"
            download
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </header>
      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"></div>
      )}

      {/* Slide-in Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-50 w-64 bg-[#F0FFF4] shadow-md z-30 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          {navItems.map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center space-x-2 text-gray-800 hover:text-red-500 transition-colors duration-200"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
