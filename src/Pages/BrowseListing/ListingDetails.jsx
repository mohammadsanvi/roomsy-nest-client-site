import React, { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext/AuthContext";
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";
import {
  FaThumbsUp,
  FaUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaDoorOpen,
  FaFacebook,
  FaHome,
  FaMoneyBillWave,
  FaListUl,
  FaArrowLeft,
} from "react-icons/fa";

const ListingDetails = () => {
  const info = useLoaderData();
  const { user } = useContext(AuthContext);

  const [likes, setLikes] = useState(info.likes || 0);
  const [liked, setLiked] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const isOwnPost = user?.email === info.userEmail;

  useEffect(() => {
    const alreadyLiked = localStorage.getItem(`liked_${info._id}`);
    if (alreadyLiked) {
      setLiked(true);
      setShowContact(true);
    }
  }, [info._id]);

  const handleLike = () => {
    if (liked || isOwnPost) return;

    fetch(`${import.meta.env.VITE_API_URL}/listings/${info._id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.likes);
        setLiked(true);
        setShowContact(true);
        localStorage.setItem(`liked_${info._id}`, "true");
      })
      .catch((err) => {
        console.error("Like failed", err);
      });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 my-20 px-4 pt-10 pb-20">
      {/* Back to Listings Button */}
      <div className="mb-6 max-w-3xl mx-auto">
        <Link
          to="/browse-listing"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-md hover:scale-105 transition-all duration-300 w-fit"
        >
          <FaArrowLeft className="pointer-events-none" />
          Back to Listings
        </Link>
      </div>

      {/* Details Card */}
      <Fade triggerOnce cascade damping={0.08}>
        <div className="w-full max-w-3xl mx-auto bg-white dark:bg-zinc-900 shadow-2xl rounded-3xl p-8 border border-gray-200 dark:border-zinc-700 transition-all">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-zinc-700 dark:text-white font-mono transition-all duration-300">
              {likes} people interested in
            </h2>
            <h1 className="text-4xl font-extrabold mt-2 text-zinc-900 dark:text-white">
              {info.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base">
            <InfoItem icon={<FaUser className="text-purple-500" />} label="Posted By" value={info.userName} />
            <InfoItem icon={<FaEnvelope className="text-blue-500" />} label="Email" value={info.userEmail} />
            <InfoItem icon={<FaMapMarkerAlt className="text-rose-500" />} label="Location" value={info.location} />
            <InfoItem icon={<FaMoneyBillWave className="text-green-500" />} label="Rent" value={`৳${info.rent}`} />
            <InfoItem icon={<FaDoorOpen className="text-yellow-500" />} label="Room Type" value={info.roomType} />
            <InfoItem icon={<FaListUl className="text-pink-500" />} label="Lifestyle" value={info.lifestyle} />
            <InfoItem
              icon={
                <FaCheckCircle
                  className={
                    info.availability === "Available" ? "text-green-500" : "text-red-500"
                  }
                />
              }
              label="Availability"
              value={info.availability}
            />
            <InfoItem icon={<FaHome className="text-indigo-500" />} label="Description" value={info.description} />
            <InfoItem
              icon={<FaFacebook className="text-blue-600" />}
              label="Facebook Page"
              value={
                <a
                  href={`https://${info.contact}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600"
                >
                  {info.contact}
                </a>
              }
            />
          </div>

          {/* Like & Contact Section */}
          <div className="mt-10 flex flex-col items-center space-y-4">
            <button
              onClick={handleLike}
              disabled={liked || isOwnPost}
              data-tooltip-id={isOwnPost ? "likeTooltip" : ""}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl text-base font-medium transition-all duration-200 ${
                liked
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/40"
              } ${isOwnPost ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
            >
              <FaThumbsUp />
              <span className="inline-block w-12 text-center">{liked ? "Liked" : "Like"}</span>
            </button>

            {isOwnPost && (
              <Tooltip id="likeTooltip" content="You can't like your own post" place="top" />
            )}

            {(liked || showContact) && info.number && (
              <div className="text-green-600 dark:text-green-400 flex items-center gap-2 text-lg">
                <FaPhoneAlt /> Contact: {info.number}
              </div>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    {icon}
    <div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="font-medium break-words">{value}</p>
    </div>
  </div>
);

export default ListingDetails;
