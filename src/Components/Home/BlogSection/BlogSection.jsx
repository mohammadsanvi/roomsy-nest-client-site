import React from 'react';
import { FaBlog } from 'react-icons/fa';

const BlogSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <FaBlog className="text-6xl mb-4 text-purple-600 dark:text-purple-400 mx-auto" />
        <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Stay updated with tips, stories, and guides to make your shared living experience better.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg shadow bg-white dark:bg-gray-800">
            <h3 className="font-semibold mb-2">How to choose the right roommate</h3>
            <p className="text-sm">Learn practical tips to find the perfect living partner for your journey.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-white dark:bg-gray-800">
            <h3 className="font-semibold mb-2">Budgeting for shared housing</h3>
            <p className="text-sm">Manage your expenses smartly with our budgeting guide.</p>
          </div>
          <div className="p-6 rounded-lg shadow bg-white dark:bg-gray-800">
            <h3 className="font-semibold mb-2">Top 5 roommate red flags</h3>
            <p className="text-sm">Know what to watch out for when searching for a roommate.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
