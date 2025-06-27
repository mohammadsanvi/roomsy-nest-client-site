import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX, FiUser, FiList, FiPlusCircle, FiSearch, FiSettings } from 'react-icons/fi';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">

      {/* 🟢 Mobile Menu Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-indigo-600 dark:text-white focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* 🟡 Sidebar */}
      <aside
        className={`fixed h-screen top-0 left-0 w-64 bg-white dark:bg-gray-800 p-6 shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <Link className='btn-primary text-sm mt-5 btn' to='/'>Back To Home</Link>
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-white mt-2">Dashboard</h2>
        <ul className="space-y-4 text-sm">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive ? 'text-indigo-600 font-bold' : ''
                }`
              }
            >
              <FiUser /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-listing"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive ? 'text-indigo-600 font-bold' : ''
                }`
              }
            >
              <FiList /> My Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/find-rommate"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive ? 'text-indigo-600 font-bold' : ''
                }`
              }
            >
              <FiPlusCircle /> Add Rommate Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/browse-listing"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive ? 'text-indigo-600 font-bold' : ''
                }`
              }
            >
              <FiSearch /> Browse Listing
            </NavLink>
          </li>
        </ul>
        <div className="absolute bottom-6 left-6">
         <li>
            <NavLink
              to="/dashboard/profile-settings"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive ? 'text-indigo-600 font-bold' : ''
                }`
              }
            >
              <FiSettings /> Profile Settings
            </NavLink>
          </li>
          </div>
      </aside>

      {/* 🔵 Main Content Area */}
      <main className="flex-1 md:ml-64 p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
