import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./signup.css";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const { email, password, ...restFroomData } = Object.fromEntries(
      fromData.entries()
    );

    // create user to firebase

    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFroomData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        //  Save Profile Into Db

        fetch("https://roomsy-nest-server-site.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json)
          .then(() => {
            Swal.fire({
              title: "Signup Succusfully Done!",
              icon: "success",
              draggable: true,
            });
            from.reset();
            navigate("/");
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Signup Succusfully Done!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="min-h-screen bg-cyan-50 dark:bg-gray-900 flex items-center justify-center relative px-4">
      <Helmet>
        <title>Roomsy Nest | Signup</title>
      </Helmet>
      {/* Left Image with subtle float animation */}
      <img
        src="https://i.ibb.co/GfMYTH8n/vecteezy-real-estate-agent-holding-key-against-transparent-background-55757481.png"
        alt="Agent"
        className="hidden lg:block absolute left-4 max-w-sm h-auto z-10 bg-left"
        style={{ userSelect: "none", pointerEvents: "none" }}
      />

      {/* Right Image with subtle float animation */}
      <img
        src="https://i.ibb.co/35LddL04/vecteezy-room-3d-rendering-icon-illustration-28574495.png"
        alt="Room"
        className="hidden lg:block absolute right-4 max-w-xl h-auto z-10 bg-right"
        style={{ userSelect: "none", pointerEvents: "none" }}
      />

      {/* Signup Form */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur p-8 rounded-lg shadow-lg max-w-md w-full z-20">
        {/* Text loop animation class */}
        <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
          <Typewriter
            words={["Welcome!", "Create Your Account", "Join Us Today"]}
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

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <input
            type="text"
            name="photo"
            required
            placeholder="Photo URL"
            className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-md bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
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
          <span className="text-black dark:text-white">
            Continue with Google
          </span>
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
