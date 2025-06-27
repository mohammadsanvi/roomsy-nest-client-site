import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/image) (1).png";
import img2 from "../../assets/image) (2).png";
import img3 from "../../assets/image) (3).png";
import img4 from "../../assets/image) (4).png";
import img5 from "../../assets/image) (5).png";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";

const images = [img1, img2, img3, img4, img5];

const slides = [
  {
    heading: "Find Your Ideal Roommate",
    description:
      "Roomsy Nest connects you with like-minded roommates based on preferences, habits, and lifestyle compatibility.",
    imageAlt: "Illustration of two people looking at a housing board",
  },
  {
    heading: "Verified & Secure Profiles",
    description:
      "Every profile is verified to keep your roommate search safe and trustworthy in both light and dark modes.",
    imageAlt: "Illustration showing a shield and lock for security",
  },
  {
    heading: "Search by City or Area",
    description:
      "Easily find roommates near your university, workplace, or preferred neighborhood.",
    imageAlt: "Illustration of a city map with location pins",
  },
  {
    heading: "Simple Booking Process",
    description:
      "Book and connect with potential roommates in just a few clicks — smooth, transparent, and efficient.",
    imageAlt: "Illustration of someone booking on a mobile app",
  },
  {
    heading: "Real Reviews & Ratings",
    description:
      "Make informed choices with real feedback from past roommates to avoid surprises.",
    imageAlt: "Illustration of star ratings and user reviews",
  },
];

const Banner = () => {
  return (
    <div className="py-10 lg:py-20 w-full bg-white dark:bg-gray-900 transition-colors duration-500">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 py-12 max-w-7xl mx-auto transition-colors duration-500">
              {/* Text Side */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-3xl md:text-5xl font-extrabold  text-blue-500">
                  <Typewriter
                    words={[slide.heading]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </h1>
                <Slide direction="down">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {slide.description}
                  </p>
                </Slide>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                <img
                  src={images[index]}
                  alt={slide.imageAlt}
                  className="max-h-[400px] w-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
