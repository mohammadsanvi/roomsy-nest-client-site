import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    alert(`Logged in with: ${email}`);
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-cyan-50 dark:bg-gray-900 flex items-center justify-center relative px-4"
    >
      {/* Left Image - OUTSIDE the form */}
      <img
        src="https://i.ibb.co/GfMYTH8n/vecteezy-real-estate-agent-holding-key-against-transparent-background-55757481.png"
        alt="Agent"
        className="hidden lg:block absolute left-4 max-w-sm h-auto z-10"
      />

      {/* Right Image - OUTSIDE the form */}
      <img
        src="https://i.ibb.co/35LddL04/vecteezy-room-3d-rendering-icon-illustration-28574495.png"
        alt="Room"
        className="hidden lg:block absolute right-4 max-w-xl h-auto z-10"
      />

      {/* Login Form */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur p-8 rounded-lg shadow-lg max-w-md w-full z-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
          Login
        </h2>

        {error && (
          <div className="mb-4 p-3 text-sm rounded border border-red-500 text-red-600 dark:border-red-400 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full mb-4 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Login
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 mb-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <FcGoogle size={20} /> <span>Continue with Google</span>
        </button>

        <p className="text-center text-sm text-black dark:text-white">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="underline font-medium text-blue-600 dark:text-blue-400"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
