import React from 'react';

const AboutRoomsy = () => {
    return (
        <div>
             <section className="py-16 px-4 md:px-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-red-500">Roomsy Nest</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
            Roomsy Nest helps individuals find ideal roommates through smart filters like budget, lifestyle,
            and interests. We believe in safe, data-driven matching so you can connect with compatible
            people and live stress-free. Our platform offers verified profiles, real-time chat, and intuitive
            search tools.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-5 rounded-full transition">
            Read more
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.ibb.co/DH5j8bKy/79fa67042da9a834df8eb0c2e5c386e2-removebg-preview.png"
            alt="Roommate Matching Illustration"
            className="max-w-sm md:max-w-md w-full h-auto"
          />
        </div>
      </div>
    </section>
        </div>
    );
};

export default AboutRoomsy;