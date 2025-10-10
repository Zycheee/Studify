import React, { useEffect, useState } from "react";
import Design from "/signup.gif";
import Logo from "/logo.png";
import home from "../HomePage/homepage";
import login from "../LoginPage/Login";
import register from "../SingupPage/Signup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const hasNumber = (str) => /\d/.test(str); // returns true if there is a number

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [valid, setValid] = useState({ valid: false });
  const [clicked, setClicked] = useState(false);

  const loginClick = () => {
    let hasError = false;

    // First Name validation: letters and spaces only
    if (!firstName || !/^[A-Za-z\s]+$/.test(firstName.trim())) {
      setError((prev) => ({ ...prev, firstName: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, firstName: false }));
    }

    // Last Name validation: letters and spaces only
    if (!lastName || !/^[A-Za-z\s]+$/.test(lastName.trim())) {
      setError((prev) => ({ ...prev, lastName: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, lastName: false }));
    }

    // Email validation
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError((prev) => ({ ...prev, email: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, email: false }));
    }

    // Password validation
    if (password !== confirmPassword) {
      setError((prev) => ({ ...prev, confirmPassword: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, confirmPassword: false }));
    }

    if (!password || password.length < 6) {
      setError((prev) => ({ ...prev, password: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, password: false }));
    }

    if (hasError) return;

    navigate("/home"); // Navigate to HomePage
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen font-sans bg-[#f7ffff] animate-fadeIn">
        {/* Studify header at the top */}
        <div className="flex mt-4 md:mt-0 md:absolute md:top-6 md:left-8 gap-2">
          <img src={Logo} alt="logo" className="w-10 h-10"></img>
          <span className="text-4xl font-bold text-[#267ae9]">Studify</span>
        </div>
        {/* Card Container */}
        <div className="flex flex-col md:flex-row-reverse items-center p-8 gap-30">
          <img
            src={Design}
            alt="design"
            className="
    rounded-[20px]
    transition-all duration-500 ease-in-out
   w-100 hidden md:block xl:w-200 mb-25
  "
          />
          <div className="flex-col flex  md:w-50 lg:w-100">
            <span className="text-[40px] mb-2 font-bold text-gray-700">
              Create a account
            </span>
            <span className="text-[19px] flex-wrap mb-6 text-gray-700">
              Start your journey by becoming part of our community!
            </span>

            {/* Form */}
            <div className="w-full flex flex-col gap-10">
              <div className="flex-col flex gap-2">
                <div className="flex flex-row gap-4 lg:flex-row">
                  <div className="w-1/2">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`w-full border-b-2 rounded-[2px] p-2 pl-3 mt-2 focus:bg-gray-200 outline-0 transition-all ease-in-out delay-75 ${
                        error.firstName
                          ? "border-b-red-500"
                          : "border-b-[#d3d3d3]"
                      }`}
                    />
                    {error.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        First name must be valid.
                      </p>
                    )}
                  </div>

                  <div className="w-1/2">
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={`w-full border-b-2 rounded-[2px] p-2 pl-3 mt-2 focus:bg-gray-200 outline-0 transition-all ease-in-out delay-75 ${
                        error.lastName
                          ? "border-b-red-500"
                          : "border-b-[#d3d3d3]"
                      }`}
                    />
                    {error.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        Last name must be valid.
                      </p>
                    )}
                  </div>
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border-b-2 rounded-[2px] p-2 pl-3 mt-2 focus:bg-gray-200 outline-0 transition-all ease-in-out delay-75 ${
                    error.email ? "border-b-red-500" : "border-b-[#d3d3d3]"
                  }`}
                />
                {error.password && (
                  <p className="text-red-500 text-sm ">
                    Please enter a valid email address.
                  </p>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`border-b-2 rounded-[2px] p-2 pl-3 mt-5 focus:bg-gray-200 outline-0 transition-all ease-in-out delay-75 ${
                    error.password ? "border-b-red-500" : "border-b-[#d3d3d3]"
                  }`}
                />
                {error.password && (
                  <p className="text-red-500 text-sm ">
                    Password must be more than 6 characters.
                  </p>
                )}
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`border-b-2 rounded-[2px] p-2 pl-3 mt-5 focus:bg-gray-200 outline-0 transition-all ease-in-out delay-75 ${
                    error.confirmPassword
                      ? "border-b-red-500"
                      : "border-b-[#d3d3d3]"
                  }`}
                />
                {error.confirmPassword && (
                  <p className="text-red-500 text-sm ">
                    Confirm Password must be the same as your password.
                  </p>
                )}
                {valid.valid && (
                  <p className="text-red-500 text-sm ">
                    Invalid email or password! Please try again.
                  </p>
                )}
              </div>
              <button
                onClick={loginClick}
                className=" p-3 bg-[#267ae9] hover:bg-[#1a61be] text-white rounded-[10px] transition-all cursor-pointer"
              >
                Create
              </button>

              <div className="flex justify-center font-regular">
                <label>
                  Already have a account?{" "}
                  <span
                    onClick={() => navigate("/login")}
                    className="text-blue-600 font-semibold transition-all
                    ease-in-out delay-75 cursor-pointer hover:underline"
                  >
                    Login here
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
