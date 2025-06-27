import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BrowseListing = () => {
  const loadedData = useLoaderData();
  const [allListing, setAllListing] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    let result = [...loadedData];

    if (filterType !== 'All') {
      result = result.filter((item) => item.roomType === filterType);
    }

    result.sort((a, b) => {
      return sortOrder === 'asc' ? a.rent - b.rent : b.rent - a.rent;
    });

    setFiltered(result);
    setAllListing(loadedData);
  }, [loadedData, sortOrder, filterType]);

  return (
    <>
      <Helmet>
        <title>Roomsy Nest | Browse Listing</title>
      </Helmet>

      <div className="px-4 md:px-10 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">
          <Typewriter
            words={[
              'Browse All Listings!',
              'Find Your Partner And See More',
              'Like Your Choice List',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* Filter + Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 border dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white rounded"
          >
            <option value="asc">Sort by Rent (Low to High)</option>
            <option value="desc">Sort by Rent (High to Low)</option>
          </select>

          <select
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white rounded"
          >
            <option value="All">Filter by Room Type</option>
            <option value="Single">Single</option>
            <option value="Shared">Shared</option>
            <option value="Studio">Studio</option>
          </select>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((list) => (
            <div
              key={list._id}
              data-aos="flip-up"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{list.title}</h3>
                <p><span className="font-semibold">Location:</span> {list.location}</p>
                <p><span className="font-semibold">Room Type:</span> {list.roomType}</p>
                <p><span className="font-semibold">Rent:</span> ${list.rent}</p>
                <p><span className="font-semibold">Posted by:</span> {list.userName}</p>
                <p>
                  <span className="font-semibold">Availability:</span>{' '}
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      list.availability === 'Available'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                  >
                    {list.availability}
                  </span>
                </p>

                <Link
                  to={`/browse-listing-details/${list._id}`}
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/40 transition-all duration-200"
                >
                  See More <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrowseListing;
