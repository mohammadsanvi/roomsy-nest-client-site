import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./signup.css";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Fade } from "react-awesome-reveal";


const Signup = () => {
  const { createUser, setUser, signInWithGoogle} = useContext(AuthContext);
  const [password, setPassword] = useState("");
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
  const form = e.target;
  const name = form.name.value;
  const photo = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;
    
    // create user in firebase

  createUser(email, password)
    .then((result) => {
      const user = result.user;
     return updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        
        .then(() => {
          // send user data to db
          const userProfile = {
            name,
            photo,
            email,
            creationTime: user.metadata?.creationTime,
            lastSignInTime: user.metadata?.lastSignInTime,
          };

          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userProfile),
          })
            .then((res) => res.json())
            .then(() => {
              Swal.fire({
                title: "Signup Successfully Done!",
                icon: "success",
                draggable: true,
              });
              form.reset();
              setPassword("");
              navigate("/");
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Database Error",
                text: err.message,
              });
            });
        })
        .catch((error) => {
          console.error("Profile update error:", error);
        });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.message,
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
          title: "Signup Successfully Done!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="min-h-screen bg-cyan-50 dark:bg-gray-900 flex items-center justify-center relative px-4">
      <Helmet>
        <title>Roomsy Nest | Signup</title>
      </Helmet>

      <img
        src="https://i.ibb.co/GfMYTH8n/vecteezy-real-estate-agent-holding-key-against-transparent-background-55757481.png"
        alt="Agent"
        className="hidden lg:block absolute left-4 max-w-sm h-auto z-10 bg-left"
        style={{ userSelect: "none", pointerEvents: "none" }}
      />
      <img
        src="https://i.ibb.co/35LddL04/vecteezy-room-3d-rendering-icon-illustration-28574495.png"
        alt="Room"
        className="hidden lg:block absolute right-4 max-w-sm h-auto z-10 bg-right"
        style={{ userSelect: "none", pointerEvents: "none" }}
      />

      <Fade cascade duration={600}>
        <div className="bg-white/90 mt-20 mt-10 dark:bg-gray-800/90 backdrop-blur p-8 rounded-lg shadow-lg max-w-md w-full z-20">
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
          <FcGoogle size={20} />
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
      </Fade>

      
    </div>
  );
};

export default Signup;
