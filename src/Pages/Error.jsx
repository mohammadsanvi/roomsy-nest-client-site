import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-white dark:bg-red-100/10 border dark:border-red-700 rounded-xl shadow-md text-center">
      <img
        src="https://i.ibb.co/4RyLhXhp/original-7a69eb5b87401ce59325c3291535aebc.gif"
        alt="Error"
        className="h-52 mb-4"
      />
      <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">
        We couldn't process your request at the moment. Please try again later
        or go back to the homepage.
      </p>
      <div className="flex gap-3">
        <Link to="/">
          {" "}
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition">
            Retry
          </button>
        </Link>
        <Link to="/">
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm rounded-md transition">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
