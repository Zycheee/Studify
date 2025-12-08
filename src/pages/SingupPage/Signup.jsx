import React, { useEffect, useState } from "react";
import Design from "/signup.gif";
import Logo from "/logo.png";
import home from "../HomePage/homepage";
import login from "../LoginPage/Login";
import register from "../SingupPage/Signup";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import userApi from "../../api/userApi";// Talisic: user api 


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
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  // Talisic: store message if email already exists
  const [backendError, setBackendError] = useState(""); 
  // Talisic:  disable signup button when waiting for response from backend
  const [loading, setLoading] = useState(false);        


  // Talisic: Show password toggle
  const handleClick = () => {
    setShow(!show);
  };

  //Talisic: This should be handleSignUp instead of loginClick
  const loginClick = async () => {
    let hasError = false;
    const newError = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confirmPassword: false
    };


    if (!firstName || !/^[A-Za-z\s]+$/.test(firstName.trim())) {
      newError.firstName = true;
      hasError = true;
    }

    if (!lastName || !/^[A-Za-z\s]+$/.test(lastName.trim())) {
      newError.lastName = true;
      hasError = true;
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
      newError.email = true;
      hasError = true;
    }

    if (!password || password.length < 6) {
      newError.password = true;
      hasError = true;
    }

    if (password !== confirmPassword) {
      newError.confirmPassword = true;
      hasError = true;
    }

    setError(newError);

    if (hasError) return;
    
    // Talisic: --- Call backend API --- 
  setLoading(true);
  setBackendError(""); // reset backend error

  const userCreateDTO = { firstname: firstName, lastname: lastName, email, password };

  try {
    await userApi.signUp(userCreateDTO); // call signup API
    navigate("/login");                  // go to home page after success
  } catch (err) {
    // show backend error
    setBackendError(err.response?.data?.message || "Signup failed. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen font-sans bg-[#ffffff] animate-fadeIn">
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
          <div className="flex-col flex ">
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
                      className={`w-full border-b-2 rounded-[2px] p-2 pl-3 mt-2 border-b-[#d3d3d3] focus:bg-gray-100 focus:border-b-[#313131] outline-0 transition-all ease-in-out delay-75 ${
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
                      className={`border-b-2 w-full rounded-[2px] p-2 pl-3 mt-2 border-b-[#d3d3d3] focus:bg-gray-100 focus:border-b-[#313131] outline-0 transition-all ease-in-out delay-75 ${
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
                  className={`border-b-2 rounded-[2px] p-2 pl-3 mt-2 border-b-[#d3d3d3] focus:bg-gray-100 focus:border-b-[#313131] outline-0 transition-all ease-in-out delay-75 ${
                    error.email ? "border-b-red-500" : "border-b-[#d3d3d3]"
                  }`}
                />
                {error.password && (
                  <p className="text-red-500 text-sm ">
                    Please enter a valid email address.
                  </p>
                )}
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border-b-2 rounded-[2px] p-2 pl-3 mt-2 w-full border-b-[#d3d3d3] focus:bg-gray-100 focus:border-b-[#313131] outline-0 transition-all ease-in-out delay-75 ${
                      error.password ? "border-b-red-500" : "border-b-[#d3d3d3]"
                    }`}
                  />
                  <div
                    onClick={handleClick}
                    className={`absolute right-3 top-1/2 -translate-y-3  cursor-pointer text-gray-600 hover:text-black ${
                      error.password ? "-translate-y-5" : ""
                    }`}
                  >
                    {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                  {error.password && (
                    <p className="text-red-500 text-sm ">
                      Password must be more than 6 characters.
                    </p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type={show1 ? "text" : "password"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`border-b-2 rounded-[2px] p-2 pl-3 mt-2 w-full border-b-[#d3d3d3] focus:bg-gray-100 focus:border-b-[#313131] outline-0 transition-all ease-in-out delay-75 ${
                      error.confirmPassword
                        ? "border-b-red-500"
                        : "border-b-[#d3d3d3]"
                    }`}
                  />
                  <div
                    onClick={() => setShow1(!show1)}
                    className={`absolute right-3 top-1/2 -translate-y-3  cursor-pointer text-gray-600 hover:text-black ${
                      error.confirmPassword ? "-translate-y-5" : ""
                    }`}
                  >
                    {show1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
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
              </div>
              <button
               onClick={loginClick}
                  disabled={loading}
                  className={`p-3 text-white rounded-[10px] transition-all cursor-pointer 
                    ${loading ? "bg-gray-400" : "bg-[#267ae9] hover:bg-[#1a61be]"}`}
                >
                  {loading ? "Creating..." : "Create"}
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
