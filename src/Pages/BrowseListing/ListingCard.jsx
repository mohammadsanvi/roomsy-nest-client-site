import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListingCard = ({ list }) => {
  const availabilityColor =
    list.availability === "Available" ? "text-green-500" : "text-red-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-xl dark:bg-zinc-800 bg-white p-6 space-y-3 transition-all border border-gray-200 dark:border-zinc-700 hover:shadow-2xl"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {list.title}
        </h2>
        <span className={`text-sm font-semibold ${availabilityColor}`}>
          {list.availability}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
        <FaMapMarkerAlt className="text-blue-500" />
        <span className="font-medium">{list.location}</span>
      </p>

      <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
        <FaUser className="text-purple-500" />
        Posted by: {list.userName}
      </p>

      <div className="pt-3">
        <Link
          to={`/browse-listing-details/${list._id}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-500 hover:bg-indigo-200 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/40 transition-all duration-200"
        >
          See More <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default ListingCard;
