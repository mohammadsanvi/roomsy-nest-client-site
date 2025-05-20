import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaIceCream,
  FaDumbbell,
  FaFilm,
  FaSpa,
  FaPizzaSlice,
  FaGamepad,
  FaMicrophone,
  FaMusic,
  FaLaptopCode,
  FaBookOpen,
} from 'react-icons/fa';
import 'react-tooltip/dist/react-tooltip.css';

const icons = {
  icecream: <FaIceCream className="text-3xl text-pink-500" />,
  workout: <FaDumbbell className="text-3xl text-red-500" />,
  movie: <FaFilm className="text-3xl text-yellow-500" />,
  yoga: <FaSpa className="text-3xl text-green-500" />,
  food: <FaPizzaSlice className="text-3xl text-orange-500" />,
  game: <FaGamepad className="text-3xl text-purple-500" />,
  talk: <FaMicrophone className="text-3xl text-indigo-500" />,
  music: <FaMusic className="text-3xl text-blue-500" />,
  tech: <FaLaptopCode className="text-3xl text-gray-700" />,
  book: <FaBookOpen className="text-3xl text-green-600" />,
};

const EventCard = ({ title, date, time, location, type }) => {
  return (
    <motion.div
      className="dark:bg-green-50 bg-lime-50 rounded-2xl p-6 shadow-xl w-full h-full hover:scale-105 transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-xl text-blue-900">
          <Typewriter words={[title]} loop={false} cursor />
        </h3>
        <div data-tooltip-id="tooltip-icon" data-tooltip-content={type}>
          {icons[type]}
        </div>
        <Tooltip id="tooltip-icon" />
      </div>
      <div className="text-sm text-gray-800 space-y-1">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;