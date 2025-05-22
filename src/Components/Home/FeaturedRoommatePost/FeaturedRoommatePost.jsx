import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const FeaturedRoommatePost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/featured-roommates")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error loading featured posts:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400">
        Featured Roommates Post
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="rounded-2xl shadow-xl dark:bg-zinc-800 bg-white p-6 space-y-3 border border-gray-200 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {post.title}
              </h3>
              <span
                className={`text-sm font-semibold px-2 py-0.5 rounded ${
                  post.availability === "Available"
                    ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {post.availability}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              {post.location}
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
              <FaUser className="text-purple-500" />
              Posted by: {post.userName}
            </p>

            <div className="pt-3">
              <Link
                to={`/browse-listing-details/${post._id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-500 hover:bg-indigo-200 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/40 transition-all duration-200"
              >
                See More <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRoommatePost;
