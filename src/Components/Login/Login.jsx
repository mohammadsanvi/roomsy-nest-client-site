import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Fade } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContext";

const Login = () => {
  const { setUser, signInWithGoogle, signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      await signIn(email, password);
      Swal.fire({
        title: `Logged in with: ${email}`,
        icon: "success",
        draggable: true,
      });
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
        footer: '<a href="/">Why do I have this issue?</a>',
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      setUser(result.user);
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        draggable: true,
      });
    navigate(from, { replace: true });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="min-h-screen my-10 bg-cyan-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <Helmet>
        <title>Roomsy Nest | Login</title>
      </Helmet>
      
      <img
        src="https://i.ibb.co/GfMYTH8n/vecteezy-real-estate-agent-holding-key-against-transparent-background-55757481.png"
        alt="Agent"
        className="hidden lg:block absolute left-4 max-w-lg h-auto z-10 bg-left"
        style={{ userSelect: "none", pointerEvents: "none" }}
      />

      <Fade direction="left" cascade duration={300}>
        <div className="bg-white/90 py-10 dark:bg-gray-800/90 backdrop-blur p-8 rounded-xl shadow-2xl max-w-lg w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
            <Typewriter
              words={["Welcome Back!", "Please Login", "to Continue"]}
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
              name="email"
              placeholder="Enter your email"
              className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full mb-4 py-3 rounded-md hover:scale-[1.02] transition-transform duration-200 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Login
            </button>
          </form>

          <button
            type="button"
            onClick={handleGoogleLogin}
            data-tooltip-id="google-tooltip"
            className="w-full flex items-center justify-center gap-2 mb-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 hover:scale-[1.02] transition-transform duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FcGoogle size={22} />
            <span className="text-black dark:text-white">
              Continue with Google
            </span>
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
               state={{ from: location.state?.from || '/' }}
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
