import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../Components/AuthContext/AuthContext';
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';

const UpdateList = () => {
  const list = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedListing = {
      title: form.title.value,
      location: form.location.value,
      rent: form.rent.value,
      roomType: form.roomType.value,
      lifestyle: form.lifestyle.value,
      number: form.number.value,
      description: form.description.value,
      contact: form.contact.value,
      availability: form.availability.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    try {
      const res = await fetch(`http://localhost:3000/roommate-listings/${list._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedListing)
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: data.message || 'Listing updated successfully!',
          confirmButtonColor: '#4f46e5'
        });
        navigate('/my-listing'); // or reload: window.location.reload();
      } else {
        throw new Error(data?.error || 'Something went wrong');
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: err.message || 'Failed to update listing.',
        confirmButtonColor: '#d33'
      });
    }
  };

  return (
    <div className="bg-cover bg-no-repeat bg-center my-16 min-h-screen flex items-center justify-center px-4 dark:text-white bg-white dark:bg-gray-900 text-gray-800 transition-all duration-300">
      <Helmet>
        <title>Roomsy Nest | Update Listing</title>
      </Helmet>

      <div className="bg-[#f3f4f6] dark:bg-zinc-900/80 my-20 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-4xl p-8">
        <Fade cascade damping={0.2} triggerOnce>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 p-5 to-red-500 mb-10">
            <Typewriter
              words={[
                "Update Roommate Listing",
                "Modify Your Listing",
                "Find a Better Match",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          {/* Form Starts */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Title */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={list.title}
                required
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            {/* Location */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Location</span>
              </label>
              <input
                type="text"
                name="location"
                defaultValue={list.location}
                required
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            {/* Rent */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Rent Amount</span>
              </label>
              <input
                type="number"
                name="rent"
                defaultValue={list.rent}
                required
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            {/* Room Type */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Room Type</span>
              </label>
              <select
                name="roomType"
                defaultValue={list.roomType}
                required
                className="select select-bordered w-full bg-white dark:bg-zinc-800"
              >
                <option>Single</option>
                <option>Shared</option>
              </select>
            </div>

            {/* Lifestyle */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Lifestyle Preferences</span>
              </label>
              <input
                type="text"
                name="lifestyle"
                defaultValue={list.lifestyle}
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            {/* Contact Number */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Contact No</span>
              </label>
              <input
                type="number"
                name="number"
                defaultValue={list.number}
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            {/* Description */}
            <div className="form-control md:col-span-2 space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={list.description}
                className="textarea textarea-bordered w-full bg-white dark:bg-zinc-800"
              ></textarea>
            </div>

            {/* Contact Info */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Contact Info</span>
              </label>
              <input
                type="text"
                name="contact"
                defaultValue={list.contact}
                required
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            {/* Availability */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Availability</span>
              </label>
              <select
                name="availability"
                defaultValue={list.availability}
                className="select select-bordered w-full bg-white dark:bg-zinc-800"
              >
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

            {/* Email */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Your Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={user?.email}
                readOnly
                className="input input-bordered w-full bg-gray-100 dark:bg-zinc-700"
              />
            </div>

            {/* Name */}
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full bg-gray-100 dark:bg-zinc-700"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn md:col-span-2 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white text-lg font-semibold border-none w-full hover:scale-[1.02] transition-transform duration-200"
            >
              Update Listing
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
};

export default UpdateList;
