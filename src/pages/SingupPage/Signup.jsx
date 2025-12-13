import React, { useEffect, useState } from "react";
import Design from "/signup.gif";
import Logo from "/logo.png";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import userApi from "../../api/userApi"; // Talisic: user api

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [backendError, setBackendError] = useState("");
  const [loading, setLoading] = useState(false);

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async () => {
    let hasError = false;
    const newError = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confirmPassword: false,
    };

    // VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newError.email = true;
      newError.emailMessage = "Please enter a valid email address.";
      hasError = true;
    }


    if (!firstName || !/^[A-Za-z\s]+$/.test(firstName.trim())) {
      newError.firstName = true;
      hasError = true;
    }

    if (!lastName || !/^[A-Za-z\s]+$/.test(lastName.trim())) {
      newError.lastName = true;
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

    // CALL BACKEND API
    setLoading(true);
    setBackendError("");

    const userCreateDTO = {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
    };

    try {
      await userApi.signUp(userCreateDTO);
      navigate("/login");
    } catch (err) {
      const msg = err.response?.data?.Message || err.response?.data?.message;
      if (err.response?.status === 409 && msg === "Email is already used") {
        setBackendError("This email is already registered.");
      } else {
        setBackendError(msg || "Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen font-sans bg-[#ffffff] animate-fadeIn">
        {/* Logo */}
        <div className="flex mt-4 md:mt-0 md:absolute md:top-6 md:left-8 gap-2">
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <span className="text-4xl font-bold text-[#267ae9]">Studify</span>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center p-8 gap-30">
          <img
            src={Design}
            alt="design"
            className="rounded-[20px] transition-all duration-500 ease-in-out w-100 hidden md:block xl:w-200 mb-25"
          />

          <div className="flex-col flex">
            <span className="text-[40px] mb-2 font-bold text-gray-700">Create an account</span>
            <span className="text-[19px] mb-6 text-gray-700 flex-wrap">
              Start your journey by becoming part of our community!
            </span>

            {/* FORM */}
            <div className="w-full flex flex-col gap-10">
              <div className="flex-col flex gap-2">
                {/* Name Fields */}
                <div className="flex flex-row gap-4 lg:flex-row">
                  <div className="w-1/2">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={`w-full border-b-2 rounded-[2px] p-2 pl-3 mt-2 
                        ${error.firstName ? "border-b-red-500" : "border-b-[#d3d3d3]"} 
                        focus:bg-gray-100 focus:border-b-[#313131]`}
                    />
                    {error.firstName && (
                      <p className="text-red-500 text-sm mt-1">First name must be valid.</p>
                    )}
                  </div>

                  <div className="w-1/2">
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={`w-full border-b-2 rounded-[2px] p-2 pl-3 mt-2 
                        ${error.lastName ? "border-b-red-500" : "border-b-[#d3d3d3]"} 
                        focus:bg-gray-100 focus:border-b-[#313131]`}
                    />
                    {error.lastName && (
                      <p className="text-red-500 text-sm mt-1">Last name must be valid.</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`border-b-2 rounded-[2px] p-2 pl-3 mt-2 w-full 
                      focus:bg-gray-100 focus:border-b-[#313131] outline-0 transition-all`}
                  />

                  {/* Email validation error (frontend) */}
                  {error.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.emailMessage || "Please enter a valid email address."}
                    </p>
                  )}

                  {/* Backend error */}
                  {!error.email && backendError && (
                    <p className="text-red-500 text-sm mt-1">{backendError}</p>
                  )}
                </div>

                {/* Password */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border-b-2 rounded-[2px] p-2 pl-3 mt-2 w-full 
                      ${error.password ? "border-b-red-500" : "border-b-[#d3d3d3]"} 
                      focus:bg-gray-100 focus:border-b-[#313131]`}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-3 cursor-pointer text-gray-600 hover:text-black"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                  {error.password && (
                    <p className="text-red-500 text-sm">Password must be more than 6 characters.</p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`border-b-2 rounded-[2px] p-2 pl-3 mt-2 w-full 
                      ${error.confirmPassword ? "border-b-red-500" : "border-b-[#d3d3d3]"} 
                      focus:bg-gray-100 focus:border-b-[#313131]`}
                  />
                  <div
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-3 cursor-pointer text-gray-600 hover:text-black"
                  >
                    {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>

                  {error.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      Confirm Password must be the same as your password.
                    </p>
                  )}
                </div>
              </div>

              {/* Create Button */}
              <button
                onClick={handleSignUp}
                disabled={loading}
                className={`p-3 text-white rounded-[10px] transition-all cursor-pointer 
                  ${loading ? "bg-gray-400" : "bg-[#267ae9] hover:bg-[#1a61be]"}`}
              >
                {loading ? "Creating..." : "Create"}
              </button>

              <div className="flex justify-center font-regular">
                <label>
                  Already have an account?{" "}
                  <span
                    onClick={() => navigate("/login")}
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
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
