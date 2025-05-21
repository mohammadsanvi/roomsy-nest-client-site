import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/AuthContext/AuthContext";
import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const AddToFind = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const listing = {
      title: form.title.value,
      location: form.location.value,
      rent: form.rent.value,
      roomType: form.roomType.value,
      lifestyle: form.lifestyle.value,
      description: form.description.value,
      contact: form.contact.value,
      availability: form.availability.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

  

  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center px-4 dark:text-white bg-white dark:bg-gray-900 text-gray-800 transition-all duration-300">
      <Helmet>
        <title>Roomsy Nest | Add Roommate</title>
      </Helmet>

      <div className="bg-[#f3f4f6] dark:bg-zinc-900/80 my-40 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-4xl p-8">
        <Fade cascade damping={0.1} triggerOnce>
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 p-5 to-red-500 mb-10">
            <Typewriter
              words={["Add Roommate Listing","Explore More Listings","Discover Your Ideal Match"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                required
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                required
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Rent Amount</span>
              </label>
              <input
                type="number"
                name="rent"
                placeholder="Rent Amount"
                required
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Room Type</span>
              </label>
              <select
                name="roomType"
                required
                className="select select-bordered w-full bg-white dark:bg-zinc-800"
              >
                <option disabled selected>
                  Choose Room Type
                </option>
                <option>Single</option>
                <option>Shared</option>
              </select>
            </div>

            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">
                  Lifestyle Preferences
                </span>
              </label>
              <input
                type="text"
                name="lifestyle"
                placeholder="e.g., Pets, Smoking"
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            <div className="form-control md:col-span-2 space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered w-full bg-white dark:bg-zinc-800"
              ></textarea>
            </div>

            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Contact Info</span>
              </label>
              <input
                type="text"
                name="contact"
                placeholder="Contact Info"
                required
                className="input input-bordered w-full bg-white dark:bg-zinc-800"
              />
            </div>

            <div className="form-control space-y-1">
              <label className="label">
                <span className="label-text dark:text-white">Availability</span>
              </label>
              <select
                name="availability"
                className="select select-bordered w-full bg-white dark:bg-zinc-800"
              >
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
            </div>

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

            <button
              type="submit"
              className="btn md:col-span-2 bg-gradient-to-r from-purple-600 via-blue-500 p-5 to-purple-600 text-white text-lg font-semibold border-none w-full hover:scale-[1.02] transition-transform duration-200"
            >
              Add Listing
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
};

export default AddToFind;
