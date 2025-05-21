import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const Signup = () => {
  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

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

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          const userProfile = {
            name,
            photo,
            email,
            creationTime: user.metadata?.creationTime,
            lastSignInTime: user.metadata?.lastSignInTime,
          };

          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userProfile),
          })
            .then((res) => res.json())
            .then(() => {
              Swal.fire({
                title: "Signup Successfully Done!",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
              form.reset();
              setPassword("");
              navigate(from, { replace: true });
            });
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: error.message,
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
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({ icon: "error", title: "Oops...", text: error.message });
      });
  };

  return (
    <div className="py-24 flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <Helmet>
        <title>Roomsy Nest | Signup</title>
      </Helmet>

      <Fade direction="up" cascade duration={500}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl flex w-full max-w-5xl overflow-hidden">
          <div className="hidden md:flex w-1/2 bg-gradient-to-br bg-white to-blue-600 items-center justify-center">
            <img
              src="https://i.ibb.co/YVRhWqr/06a4fa10ea2f784f221b770ff45dd096-removebg-preview.png"
              alt="Signup Illustration"
              className="w-full"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
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
            <p className="text-center text-sm text-gray-500 dark:text-gray-300 mb-6">
              Sign up now and unlock exclusive access!
            </p>

            {error && (
              <div className="text-sm text-red-500 mb-4 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                value={password}
                onChange={validatePassword}
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium"
              >
                Create Account
              </button>
            </form>

            <div className="mt-4">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center dark:text-white text-black justify-center gap-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FcGoogle size={22} /> Continue with Google
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Signup;
