import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import Swal from 'sweetalert2';


const NewsletterSection = () => {
    const hadleSubscribe = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Subscribe Done",
        showConfirmButton: false,
        timer: 1500
    });
}
return (
    <section className="bg-white dark:bg-gray-900 mb-4 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
            <FaEnvelopeOpenText className="text-6xl mb-4 text-blue-500 dark:text-blue-500 mx-auto" />
            <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Get the latest news, tips, and exclusive offers delivered straight to your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 text-white rounded border border-gray-300 dark:border-gray-700 focus:outline-none w-full sm:w-auto"
                />
                <button onClick={hadleSubscribe} className="px-6 py-2 rounded bg-blue-500 text-white hover:bg-green-700 transition">
                    Subscribe
                </button>
            </div>
        </div>
    </section>
);
};

export default NewsletterSection;
