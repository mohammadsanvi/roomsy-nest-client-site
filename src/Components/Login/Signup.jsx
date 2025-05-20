import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 6) {
      setError("Password must be at least 6 characters.");
    } else if (!/[A-Z]/.test(value)) {
      setError("Password must include at least one uppercase letter.");
    } else if (!/[a-z]/.test(value)) {
      setError("Password must include at least one lowercase letter.");
    } else {
      setError("");
    }
  };

  const handleRegister = e => {
    e.preventDefault()
  }

  const handleGoogleLogin = () => {
    alert("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-cyan-50 dark:bg-gray-900 flex items-center justify-center relative px-4">
      {/* Left Image */}
      <img
        src="https://i.ibb.co/GfMYTH8n/vecteezy-real-estate-agent-holding-key-against-transparent-background-55757481.png"
        alt="Agent"
        className="hidden lg:block absolute left-4 max-w-sm h-auto z-10"
      />

      {/* Right Image */}
      <img
        src="https://i.ibb.co/35LddL04/vecteezy-room-3d-rendering-icon-illustration-28574495.png"
        alt="Room"
        className="hidden lg:block absolute right-4 max-w-xl h-auto z-10"
      />

      {/* Signup Form */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur p-8 rounded-lg shadow-lg max-w-md w-full z-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
          Register
        </h2>

        {error && (
          <div className="mb-4 p-3 text-sm rounded border border-red-500 text-red-600 dark:border-red-400 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <input
            type="text"
            required
            placeholder="Photo URL"
            className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={validatePassword}
            className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="w-full mb-4 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Register
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 mb-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <FcGoogle size={20} />{" "}
          <span className="text-black dark:text-white">Continue with Google</span>
        </button>

        <p className="text-center text-sm text-black dark:text-white">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline font-medium text-blue-600 dark:text-blue-400"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
