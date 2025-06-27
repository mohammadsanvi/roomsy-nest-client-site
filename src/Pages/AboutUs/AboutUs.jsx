import React from 'react';
import { FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa';
import Container from '../../Components/Container/Container';

const AboutUs = () => {
  return (
   <Container>
     <section className="bg-gray-100 my-5 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">About Roomsy Nest</h1>

        {/* Section 1 */}
        <div className="mb-12 text-center">
          <FaUsers className="text-6xl mx-auto mb-4 text-purple-600 dark:text-purple-400" />
          <h2 className="text-3xl font-semibold mb-2">Who We Are</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Roomsy Nest is a trusted platform that helps you find your ideal roommate and shared living space.
            We connect people based on lifestyle, budget, and preferences.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-12 text-center">
          <FaHandshake className="text-6xl mx-auto mb-4 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our mission is to make shared housing safe, reliable, and stress-free through technology 
            and community-driven support.
          </p>
        </div>

        {/* Section 3 */}
        <div className="text-center">
          <FaLightbulb className="text-6xl mx-auto mb-4 text-yellow-500 dark:text-yellow-300" />
          <h2 className="text-3xl font-semibold mb-2">What Makes Us Unique</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We focus on matching roommates by personality and habits, not just price or location — 
            creating a more harmonious living environment.
          </p>
        </div>
      </div>
    </section>
   </Container>
  );
};

export default AboutUs;
