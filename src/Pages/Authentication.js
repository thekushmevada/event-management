import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-4">
        <button
          className={`rounded-md px-4 py-2 mr-4 focus:outline-none ${
            isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`rounded-md px-4 py-2 focus:outline-none ${
            !isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      {isLogin ? (
        <form className="w-full max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <h2 className="text-center">Login</h2>
          <div className="mb-4">
            <label
              htmlFor="loginEmail"
              className="block text-sm font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="loginEmail"
              name="loginEmail"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="loginPassword"
              className="block text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              name="loginPassword"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>
      ) : (
        <form className="w-full max-w-md mx-auto" onSubmit={handleSignupSubmit}>
          {/* Signup Form */}
          <h2 className="text-center">Sign Up</h2>
          <div className="mb-4">
            <label
              htmlFor="signupName"
              className="block text-sm font-semibold mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="signupName"
              name="signupName"
              placeholder="Full Name"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="signupEmail"
              className="block text-sm font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="signupEmail"
              name="signupEmail"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="signupPassword"
              className="block text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="signupPassword"
              name="signupPassword"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-semibold mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Sign Up
          </button>
        </form>
      )}

      <p className="text-center mt-4">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <Link
          to={isLogin ? "/signup" : "/login"}
          className="text-blue-500 hover:underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
