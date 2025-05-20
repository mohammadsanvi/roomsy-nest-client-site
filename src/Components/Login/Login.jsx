import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Fade, Slide } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

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
    <div className="min-h-screen bg-cyan-50 dark:bg-gray-900 flex items-center justify-center relative px-4 overflow-hidden">

      <Helmet>
                <title>Roomsy Nest | Login</title>
              </Helmet>


      {/* Login Card */}
      <Fade cascade duration={600}>
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur p-8 rounded-xl shadow-2xl max-w-md w-full z-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
            <Typewriter
              words={["Welcome Back!", "Please Login to Continue"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
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
            data-tooltip-id="google-tooltip"
            className="w-full flex items-center justify-center gap-2 mb-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FcGoogle size={22} />
            <span>Continue with Google</span>
          </button>

          <ReactTooltip
            id="google-tooltip"
            place="top"
            content="Login with your Google account"
            className="z-50"
          />

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
      </Fade>
    </div>
  );
};

export default Login;
