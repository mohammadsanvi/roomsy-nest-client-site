import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { Helmet } from 'react-helmet-async';
import { FaUsers, FaListAlt, FaUserCircle} from 'react-icons/fa';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { FaUsersRectangle } from 'react-icons/fa6';

const Overview = () => {
  const { user,loading } = useContext(AuthContext);
  const [allItemsCount, setAllItemsCount] = useState(0);
  const [myItemsCount, setMyItemsCount] = useState(0);
  const [totalUser, setTotalUser] = useState(0);

  useEffect(() => {
    // Fetch total items
    fetch('https://roomsy-nest-server-site.vercel.app/roommate-listings')
      .then(res => res.json())
      .then(data => setAllItemsCount(data.length));

    // Fetch my items
    fetch(`https://roomsy-nest-server-site.vercel.app/my-listings?email=${user.email}`)
      .then(res => res.json())
      .then(data => setMyItemsCount(data.length));


    // Fetch Total User
    fetch('https://roomsy-nest-server-site.vercel.app/users')
      .then(res => res.json())
      .then(data => setTotalUser(data.length));


  }, [user.email]);


  if(loading){
    <>
    <LoadingSpinner></LoadingSpinner>
    </>
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Overview</title>
      </Helmet>

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-white">
          Welcome, {user.displayName || 'Romsy Nest Dashboard'}!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <FaListAlt className="text-3xl text-indigo-500 dark:text-indigo-300" />
              <div>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">Total Listings</p>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">{allItemsCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <FaUserCircle className="text-3xl text-purple-500 dark:text-purple-300" />
              <div>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">My Listings</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-300">{myItemsCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <FaUsersRectangle className="text-3xl text-primary dark:text-purple-300"/>
              <div>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">Total Users</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-300">{totalUser}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <FaUsers className="text-3xl text-green-500 dark:text-green-300" />
              <div>
                <p className="text-lg font-semibold text-gray-700 dark:text-white">Your Email</p>
                <p className="text-base font-medium text-green-600 dark:text-green-300">{user.email}</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Overview;
