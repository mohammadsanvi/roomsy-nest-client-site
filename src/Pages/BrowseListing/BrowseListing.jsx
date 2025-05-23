import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BrowseListing = () => {
  const loadedData = useLoaderData();
  const [allListing, setAllListing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loadedData) {
      setAllListing(loadedData);
      setLoading(false);
    }
  }, [loadedData]);

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

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[800px] table-auto divide-y divide-gray-200 dark:divide-zinc-700 dark:bg-zinc-800 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700">
              <thead className="bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Title</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Location</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Rent</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Room Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Availability</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Posted By</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-zinc-700 text-gray-800 dark:text-gray-100">
                {allListing.map((list) => (
                  <tr
                    key={list._id}
                    className="hover:bg-gray-50 dark:hover:bg-zinc-700/40 transition-all"
                  >
                    <td className="px-4 py-3">{list.title}</td>
                    <td className="px-4 py-3">{list.location}</td>
                    <td className="px-4 py-3">${list.rent}</td>
                    <td className="px-4 py-3">{list.roomType}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          list.availability === 'Available'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}
                      >
                        {list.availability}
                      </span>
                    </td>
                    <td className="px-4 py-3">{list.userName}</td>
                    <td className="px-4 py-3 text-center">
                      <Link
                        to={`/browse-listing-details/${list._id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/40 transition-all duration-200"
                      >
                        See More <FaArrowRight />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default BrowseListing;
