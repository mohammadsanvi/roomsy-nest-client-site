import React from 'react';
import { useLoaderData } from 'react-router';
import ListingCard from './ListingCard';
import { Typewriter } from 'react-simple-typewriter';

const BrowseListing = () => {
    const allListing = useLoaderData()
    console.log(allListing)
    return (
        <div className='px-10 py-20'>
            <h2 className="text-3xl font-bold my-10 text-center text-black dark:text-white">
                        <Typewriter
                          words={["Browse All Listing!", "Find Your Pertner And See More", "Like Your Choice List"]}
                          loop={0}
                          cursor
                          cursorStyle="|"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1500}
                        />
                      </h2>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                allListing.map(list => <ListingCard list={list}></ListingCard>)
            }
            </div>
        </div>
    );
};

export default BrowseListing;