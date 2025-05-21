import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md text-center">
      <div className="flex flex-col space-y-4 justify-center items-center p-4">
         <img
        src="https://i.ibb.co/gFckXSty/a8121abee959e18cbad25ad4046f76d8.gif"
        alt="Error"
        className="md:max-w-lg max-w-sm mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">Oops! Something went wrong</h2>
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
    </div>
  );
};

export default Error;
