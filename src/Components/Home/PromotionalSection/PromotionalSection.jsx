import React from 'react';
import { FaBullhorn } from 'react-icons/fa';

const PromotionalSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <FaBullhorn className="text-6xl mb-4 text-blue-600 dark:text-blue-400 mx-auto" />
        <h2 className="text-4xl font-bold mb-4">Special Promotion</h2>
        <p className="text-lg mb-6">
          Join Roomsy Nest today and get 30% off your first roommate match premium plan!
        </p>
        <button className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
          Claim Offer Now
        </button>
      </div>
    </section>
  );
};

export default PromotionalSection;
