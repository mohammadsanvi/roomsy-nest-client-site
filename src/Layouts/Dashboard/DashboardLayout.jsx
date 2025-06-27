import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">

      {/* 🟢 Mobile Menu Toggle Button */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-indigo-600 dark:text-white focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* 🟡 Sidebar */}
      <aside
        className={`fixed md:static min-h-screen top-0 left-0 w-64 bg-white dark:bg-gray-800 p-6 shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-white mt-8">Dashboard</h2>
        <ul className="space-y-3 text-sm">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `block hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive ? 'text-indigo-600 font-bold' : ''
                }`
              }
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-listing"
              className={({ isActive }) =>
                `block hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive ? 'text-indigo-600 font-bold' : ''
                }`
              }
            >
              My Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/find-rommate"
              className={({ isActive }) =>
                `block hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive ? 'text-indigo-600 font-bold' : ''
                }`
              }
            >
              Add Rommate Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-items"
              className={({ isActive }) =>
                `block hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive ? 'text-indigo-600 font-bold' : ''
                }`
              }
            >
              My Listing
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* 🔵 Main Content Area */}
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white ml-0 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
