import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Link} from "react-router";
import { Helmet } from "react-helmet-async";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`http://localhost:3000/my-listings?email=${user?.email}`);
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error("Failed to load listings", err);
      }
    };

    if (user?.email) fetchListings();
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/roommate-listings/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data?.message) {
              Swal.fire("Deleted!", "Your listing has been deleted.", "success");
              setListings(prev => prev.filter(item => item._id !== id));
            } else {
              Swal.fire("Error!", "Something went wrong!", "error");
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete listing.", "error");
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
         <Helmet>
            <title>Roomsy Nest | My Listings</title>
          </Helmet>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-zinc-800 dark:text-zinc-100">
        My Roommate Listings
      </h1>

      <div className="overflow-x-auto rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700">
        <table className="min-w-full table-auto text-sm text-zinc-700 dark:text-zinc-200">
          <thead className="bg-zinc-100 dark:bg-zinc-800">
            <tr>
              <th className="p-4 text-left whitespace-nowrap">Title</th>
              <th className="p-4 text-left whitespace-nowrap">Location</th>
              <th className="p-4 text-left whitespace-nowrap">Rent</th>
              <th className="p-4 text-left whitespace-nowrap">Room Type</th>
              <th className="p-4 text-left whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
            {listings.length > 0 ? (
              listings.map(item => (
                <tr key={item._id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
                  <td className="p-4">{item.title}</td>
                  <td className="p-4">{item.location}</td>
                  <td className="p-4">${item.rent}</td>
                  <td className="p-4">{item.roomType}</td>
                  <td className="p-4 space-x-2">
                    <Link to={`/my-listing/${item._id}`}>
                    <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
                      Update
                    </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-6 text-center text-zinc-500 dark:text-zinc-400">
                  No listings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;
