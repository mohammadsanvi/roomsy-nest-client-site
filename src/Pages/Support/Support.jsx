import { FaPhoneAlt, FaEnvelope, FaQuestionCircle, FaFacebookMessenger } from 'react-icons/fa';
import Container from '../../Components/Container/Container';

export default function SupportSection() {
  return (
    <Container>
        \<section
      className="py-20 mb-5 bg-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white"
      id="support"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-4"
          data-aos="fade-up"
        >
          Need Help Finding a Roommate?
        </h2>
        <p
          className="text-lg mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Roomsy Nest support team is always here to help you with anything regarding roommate matching, listing your room, or using the platform smoothly.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:scale-105 transition-transform duration-300">
            <FaPhoneAlt className="text-3xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p>+880-123-456789</p>
          </div>

          {/* Email */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-3xl text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p>support@roomsynest.com</p>
          </div>

          {/* FAQ */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:scale-105 transition-transform duration-300">
            <FaQuestionCircle className="text-3xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Visit FAQ</h3>
            <p>Find answers to common questions.</p>
          </div>

          {/* Messenger */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:scale-105 transition-transform duration-300">
            <FaFacebookMessenger className="text-3xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Chat on Messenger</h3>
            <p>Talk to us instantly through FB Messenger.</p>
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
}
