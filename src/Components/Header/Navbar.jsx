import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import useThemeToggle from "../ThemeToggole/ThemeToggole";
import { CiDark, CiLight, CiLineHeight } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FiSun } from "react-icons/fi";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import Container from "../Container/Container";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const { theme, toggleTheme } = useThemeToggle();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black dark:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : "text-black dark:text-white"}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500" : "text-black dark:text-white"}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/support" className={({ isActive }) => isActive ? "text-blue-500" : "text-black dark:text-white"}>
          Support
        </NavLink>
      </li>
       <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-blue-500" : "text-black dark:text-white"
          }
          to="/browse-listing"
        >
          Browse Listing
        </NavLink>
      </li>
      {
        user &&  <li>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-500" : "text-black dark:text-white"}>
         Dashboard
        </NavLink>
      </li>
      }

      {/* <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-blue-500" : "text-black dark:text-white"
          }
          to="/find-rommate"
        >
          Add to Find Roommate
        </NavLink>
      </li>
     
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-blue-500" : "text-black dark:text-white"
          }
          to="/my-listing"
        >
          My Listings
        </NavLink>
      </li> */}
    </>
  );

  const hanldeLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be logget out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire({
          title: "LogOut!",
          text: "Succesfully",
          icon: "success",
        });
      }
    });
  };
  return (
    <Container>
      <div className="navbar pt-4 h-10 border-none fixed mx-auto px-2 dark:shadow-white top-0 left-0 z-50 bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <di
              tabIndex={0}
              role="button"
              className=" btn border-none shadow-none bg-gray-100 text-black dark:bg-base-200 dark:text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </di>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100 text-black dark:bg-base-200 dark:text-white rounded-box z-1 mt-3 w-52 p-2"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" cla>
            <img
              className="md:h-72 h-40"
              src="https://i.ibb.co/LzPg2CnX/log.png"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex gap-4">
          <button
            onClick={toggleTheme}
            data-tooltip-id="theme-tooltip"
            data-tooltip-content={
              theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
            }
            aria-label="Toggle theme"
            className={`
    p-2 rounded-full
    transition-colors duration-300
    focus:outline-none
    ${theme === "light"
                ? "hover:bg-gray-300 hover:bg-opacity-50"
                : "hover:bg-gray-700 hover:bg-opacity-50"
              }
  `}
          >
            {theme === "light" ? <FiSun size={20} /> : <CiDark size={20} />}
          </button>
          <Tooltip
            style={{
              backgroundColor: theme === "light" ? "#eee" : "#333 ",
              color: theme === "light" ? "#111" : "#ffff ",
              fontSize: "13px",
              padding: "6px 10px",
              borderRadius: "6px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease-in-out",
            }}
            id="theme-tooltip"
            place="top"
          />
          {user ? (
            <>
              <div className="relative group inline-block">
                <img
                  className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:h-14 xl:w-14 rounded-full cursor-pointer"
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/dw3R6bnZ/d37b020e87945ad7f245e48df752ed03-removebg-preview.png"
                  }
                  alt="profile"
                />
                <div className="absolute mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-white bg-opacity-80 text-black dark:bg-gray-700 dark:text-white text-sm px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap">
                  {user.displayName}
                </div>
              </div>

              <button
                className="btn hover:shadow-lg max-w-16 hover:scale-[1.02] transition-transform duration-200 border-none bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400"
                onClick={hanldeLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {" "}
              <div className="flex justify-center items-center gap-4">
                <button className="btn hover:shadow-lg max-w-14 hover:scale-[1.02] transition-transform duration-200 border-none bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400 text-sm">
                  <Link to="/login">
                    Login
                  </Link>
                </button>
                <button className="btn hover:shadow-lg max-w-14 hover:scale-[1.02] transition-transform duration-200 border-none bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400">
                  <Link to="/signup">
                    Singup
                  </Link>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>

  );
};

export default Navbar;
