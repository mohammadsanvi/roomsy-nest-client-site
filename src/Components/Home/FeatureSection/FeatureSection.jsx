import { Fade, Slide } from "react-awesome-reveal";
import { FaSearch, FaHome, FaMapMarkerAlt } from "react-icons/fa";

const features = [
  {
    title: "Lifestyle Search",
    desc: "Our lifestyle search scores every community to match your lifestyle. Customize your search and find your ideal rental easily.",
    icon: <FaSearch className="text-4xl text-orange-500 mb-4" />,
    button: "Get Started",
  },
  {
    title: "Home Living Advantage",
    desc: "Explore 3D tours, watch videos, compare ratings, and filter by lifestyle, price, and more. Renting made smarter.",
    icon: <FaHome className="text-4xl text-blue-600 mb-4" />,
    button: "Explore Features",
  },
  {
    title: "Find Your Perfect Place",
    desc: "Find the perfect apartment in over 100k cities, zip codes, neighborhoods, and submarkets. The perfect place is just a click away.",
    icon: <FaMapMarkerAlt className="text-4xl text-green-600 mb-4" />,
    button: "Find Now",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <Fade cascade>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find The Best Rental <span className="text-blue-500">For You</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Discover smarter ways to search, compare, and rent with confidence.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Slide key={index} direction="up" triggerOnce>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {feature.desc}
                  </p>
                  <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    {feature.button}
                  </button>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
