import React from 'react';
import { useLoaderData } from 'react-router';

const ListingDetails = () => {
    const info = useLoaderData()
    console.log(info)
    return (
        <div>
            <h2>{ info.title}</h2>
        </div>
    );
};

export default ListingDetails;