import React, { useEffect, useState } from "react";
import Design from "/logindesign.gif";
import Logo from "/logo.png";
import home from "../HomePage/homepage";
import signup from "../SingupPage/Signup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const users = [
    { email: "admin123@", password: "123456" },
    { email: "user123@", password: "123456" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });
  const [valid, setValid] = useState({ valid: false });
  const [clicked, setClicked] = useState(false);

  const loginClick = () => {
    let hasError = false;

    // Email validation
    if (!email || !email.includes("@")) {
      setError((prev) => ({ ...prev, email: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, email: false }));
    }

    // Password validation
    if (!password || password.length < 6) {
      setError((prev) => ({ ...prev, password: true }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, password: false }));
    }

    if (hasError) return;

    // Check if user exists
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      navigate("/home"); // Navigate to HomePage
    } else {
      setValid((prev) => ({ ...prev, valid: true }));
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen font-sans bg-[#f7ffff] animate-fadeIn">
        {/* Studify header at the top */}
        <div className="flex mt-7 md:mt-0 md:absolute md:top-6 md:left-8 gap-2">
          <img src={Logo} alt="logo" className="w-10 h-10"></img>
          <span className="text-4xl font-bold text-[#267ae9]">Studify</span>
        </div>
        {/* Card Container */}
        <div className="flex flex-col md:flex-row items-center p-8 gap-30">
          <img
            src={Design}
            alt="design"
            className="
    rounded-[20px]
    transition-all duration-500 ease-in-out
   w-100 hidden md:block xl:w-200 
  "
          />
          <div className="flex-col flex  md:w-50 lg:w-100">
            <span className=" text-[30px] font-semibold text-gray-700">
              Hello!
            </span>
            <span className="text-[50px] mb-2 font-bold text-gray-700">
              Welcome back!
            </span>
            <span className="text-[19px] flex-wrap mb-6 text-gray-700">
              You are just one step away to continue your journey
            </span>

            {/* Form */}
            <div className="w-full flex flex-col gap-10">
              <div className="flex-col flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border-b-2 rounded-[2px] p-2 pl-3 mt-2 focus:bg-gray-200 outline-0 transition-all ease-in-out delay-75 ${
                    error.email ? "border-b-red-500" : "border-b-[#d3d3d3]"
                  }`}
                />
                {error.email && (
                  <p className="text-red-500 text-sm mt-1">
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
                {valid.valid && (
                  <p className="text-red-500 text-sm ">
                    Invalid email or password! Please try again.
                  </p>
                )}
              </div>
              <div className="flex flex-center justify-between gap-5">
                <label
                  htmlFor="rememberPassword"
                  className="flex flex-center gap-2 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    id="rememberPassword"
                    name="Remember"
                    className="w-4 h-4 accent-[#267ae9]"
                  />
                  <span className="text-gray-700 text-[15px] ">
                    Remember my password
                  </span>
                </label>
                <span className="text-blue-600 font-semibold transition-all ease-in-out delay-75 cursor-pointer hover:underline">
                  Forgot your password?
                </span>
              </div>
              <button
                onClick={loginClick}
                className="mt-5 p-3 bg-[#267ae9] hover:bg-[#1a61be] text-white rounded-[10px] transition-all cursor-pointer"
              >
                Login
              </button>

              <div className="flex justify-center font-regular">
                <label>
                  Not a member yet?{" "}
                  <span
                    onClick={() => navigate("/signup")}
                    className="text-blue-600 font-semibold transition-all
                    ease-in-out delay-75 cursor-pointer hover:underline"
                  >
                    Register here
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

export default Login;
