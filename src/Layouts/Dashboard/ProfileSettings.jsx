import { useContext, useState } from 'react';
import { AuthContext } from '../../Components/AuthContext/AuthContext';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const ProfileSettings = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName || '');
    const [email, setEmail] = useState(user.email || '');
    const [photo, setPhoto] = useState(user.photoURL || '');
    const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await updateUserProfile(name, photo);

    Swal.fire({
      icon: 'success',
      title: 'Profile Updated!',
      text: 'Your profile information has been updated successfully.',
      confirmButtonColor: '#6366F1' // indigo
    });

  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: 'error',
      title: 'Update Failed',
      text: 'Something went wrong while updating your profile.',
      confirmButtonColor: '#EF4444' // red
    });
  }
};

    return (
        <>
            <Helmet>
                <title>Dashboard | Profile Settings</title>
            </Helmet>

            <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center dark:text-white">Profile Settings</h2>

                <div className="flex flex-col items-center mb-8">
                    <img
                        src={photo || user.photoURL}
                        alt="Profile"
                        className="w-28 h-28 rounded-full object-cover border-2 border-indigo-500 shadow-md"
                    />
                    <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">{user.displayName}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                        <input
                            type="text"
                            className="mt-1 w-full px-4 py-2 border dark:border-zinc-600 rounded bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            className="mt-1 w-full px-4 py-2 border dark:border-zinc-600 rounded bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled
                        />
                        <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">Email can't be changed</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Photo URL</label>
                        <input
                            type="text"
                            className="mt-1 w-full px-4 py-2 border dark:border-zinc-600 rounded bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:outline-none"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow-md"
                        >
                            Save Changes
                        </button>
                    </div>

                    {message && <p className="text-green-500 dark:text-green-400">{message}</p>}
                </form>
            </div>
        </>
    );
};

export default ProfileSettings;
