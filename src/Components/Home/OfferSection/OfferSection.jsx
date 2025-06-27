import React from 'react';
import { FaGift } from 'react-icons/fa';

const OfferSection = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <FaGift className="text-6xl mb-4 text-pink-600 dark:text-pink-400 mx-auto" />
        <h2 className="text-4xl font-bold mb-4">Exclusive Offers</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Grab our limited-time discounts on premium listing features. Enhance your visibility and find your ideal roommate faster!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded bg-pink-600 text-white hover:bg-pink-700 transition">Upgrade to Premium</button>
          <button className="px-6 py-3 rounded border border-pink-600 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900 transition">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
