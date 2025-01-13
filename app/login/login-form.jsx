"use client";

import { useState } from "react";
import { loginUser } from "../libs/server";

//Client component for CSR (Client Site Rendering)
export default function LoginForm({ title }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Data Validation
  const validateForm = () => {
    if (!email) {
      setEmailError("Email is required!");
      return false;
    } else {
      setEmailError("");
    } 
    if (!password) {
      setPasswordError("Password is required!");
      return false;
    } else {
      setPasswordError("");
    }

    return true;
  };

  //Form Submition
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      //login Form Data Submition
      const login = await loginUser ({email: email, password: password});
      console.log("LOGIN RESPONSE", login);
    }
  };
  return (
    <div className="w-[380px] mx-auto">
      <div
        className="bg-white shadow-md border border-gray-200 rounded-lg p-4"
        style={{ backgroundColor: "#99a3a4" }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Section */}
          <h3 className="text-center text-xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>

          {/* Email Section */}
          <div>
            <label
              htmlFor="emil"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm bg-gray-50 border border-gray-300 rounded-sm text-gray-900  focus:ring-blue-500  focus:border-blue-500 block w-full p-1"
              placeholder="Enter your email"
            />

            {emailError && (
              <div className="text-red-600 text-xs mt-2">{emailError}</div>
            )}
          </div>

          {/* Password Section */}
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm bg-gray-50 border border-gray-300 rounded-sm text-gray-900  focus:ring-blue-500  focus:border-blue-500 block w-full p-1"
              placeholder="Enter your password"
            />

            {passwordError && (
              <div className="text-red-600 text-xs mt-2">{passwordError}</div>
            )}
          </div>

          {/* Remember Section */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-400 h-4 w-4 rounded "
              />
            </div>

            <div className="text-sm ml-3">
              <label htmlFor="remember" className="font-medium text-gray-900 ">
                Remember me
              </label>
            </div>
            <a
              href="/forget-password"
              className="text-sm text-blue-700 font-medium hover:underline ml-auto"
            >
              Forget password?
            </a>
          </div>

          {/* Submite Button */}
          <button
            type="submit"
            className="w-full text-white bg-black hover:bg-purple-700 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2"
          >
            Sign in
          </button>

          <div className="flex justify-center text-sm font-medium text-gray-600 space-x-2">
            <span>Don't have an account yet?</span>
            <a
              href="/register"
              className="text-blue-700 hover:underline font-medium"
            >
              Creat an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
