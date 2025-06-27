import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Container from "../Container/Container";

const Footer = () => {
  return (
   <Container>
     <footer className="bg-gray-100 dark:bg-gray-900 md:p-10 p-4 text-black dark:text-white px-6 py-10">

       <Fade delay={100} cascade damping={0.3}>
      <div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo + About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            className="h-20 md:h-full mb-4 object-contain"
            src="https://i.ibb.co/Qjc1NP3J/logo.png"
            alt="RoomsyNest Logo"
          />
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>RoomsyNest</strong> helps you find compatible roommates based on location, budget, lifestyle, and interests. Whether you're moving or sharing, we connect you with the right people for a better living experience.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-10 my-8 text-lg text-gray-600 dark:text-gray-300">
            <a href="https://www.facebook.com/mohammadsanvi0" className="hover:text-blue-500">
              <FaFacebookF size={30} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaTwitter size={30}/>
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedinIn size={30}/>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h6 className="text-lg font-semibold text-blue-500 mb-4">Quick Links</h6>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/find-rommate"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-400"
                }
              >
                Add to Find Roommate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse-listing"
                className={ ({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-400"
                }
              >
                Browse Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-listing"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-400"
                }
              >
                My Listings
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h6 className="text-lg font-semibold text-blue-500 mb-4">Legal</h6>
          <ul className="space-y-2 text-sm font-medium">
            <li><a href="#" className="hover:text-blue-400">Terms of Use</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} RoomsyNest — All rights reserved.
      </div>
      </div>
</Fade>

    </footer>
   </Container>
  );
};

export default Footer;
