import React from "react";
import { Link, NavLink } from "react-router";
import useThemeToggle from "../ThemeToggole/ThemeToggole";
import { CiDark, CiLight, CiLineHeight } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
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
        <NavLink className={({ isActive }) =>
            isActive ? " text-blue-500" : "text-black dark:text-white"
          } to="/login">Add to Find Roommate</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
            isActive ? " text-blue-500" : "text-black dark:text-white"
          } to="/login">Browse Listing</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) =>
            isActive ? " text-blue-500" : "text-black dark:text-white"
          } to="/login">My Listings</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-sm h-10 fixed top-0 left-0 w-full z-50 bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" btn border-none shadow-none bg-gray-100 text-black dark:bg-base-200 dark:text-white lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-100 text-black dark:bg-base-200 dark:text-white rounded-box z-1 mt-3 w-52 p-2"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" cla>
          <img
            className="h-72"
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
    ${
      theme === "light"
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
        <button className="btn bg-white hover:border-blue-500 text-black shadow-none border border-black dark:border dark:border-white dark:bg-base-200 dark:text-white">
          <Link className="hover:text-blue-500" to="/login">Login</Link>
        </button>
        <button className="btn  bg-white text-black hover:border-blue-500 shadow-none border border-black dark:border dark:border-white dark:bg-base-200 dark:text-white">
          <Link className="hover:text-blue-500" to="/signup">Singup</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
