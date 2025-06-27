import React from 'react';
import { MdContactMail, MdLocationOn, MdPhone } from 'react-icons/md';
import Container from '../../Components/Container/Container';

const Contact = () => {
  return (
   <Container>
     <section className="bg-gray-100 my-5 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">Contact Us</h1>

        {/* Email Section */}
        <div className="mb-12 text-center">
          <MdContactMail className="text-6xl mx-auto mb-4 text-blue-600 dark:text-blue-400" />
          <h2 className="text-3xl font-semibold mb-2">Email Us</h2>
          <p className="text-lg">support@roomsynest.com</p>
        </div>

        {/* Phone Section */}
        <div className="mb-12 text-center">
          <MdPhone className="text-6xl mx-auto mb-4 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl font-semibold mb-2">Call Us</h2>
          <p className="text-lg">+880 123 456 7890</p>
        </div>

        {/* Location Section */}
        <div className="text-center">
          <MdLocationOn className="text-6xl mx-auto mb-4 text-red-600 dark:text-red-400" />
          <h2 className="text-3xl font-semibold mb-2">Visit Our Office</h2>
          <p className="text-lg">Dhaka, Bangladesh</p>
        </div>
      </div>
    </section>
   </Container>
  );
};

export default Contact;
