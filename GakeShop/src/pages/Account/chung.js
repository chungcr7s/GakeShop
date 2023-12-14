import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Please enter your email");
    }

    if (!password) {
      setErrPassword("Please create a password");
    }

    if (email && password) {
      setSuccessMsg(
        `Hello! Thank you for signing in. We are processing to validate your access. Stay connected, and additional assistance will be sent to ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="hidden w-1/2 p-8 text-white bg-primeColor lgl:inline-flex">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <h1 className="mt-4 text-2xl font-semibold">
            Stay signed in for more!
          </h1>
          <p className="mt-2 text-gray-300">You're with us when you sign in.</p>
          {/* Check Circle Points */}
          <div className="mt-4 space-y-2 text-gray-300">
            <CheckPoint text="Get started fast" />
            <CheckPoint text="Access all services" />
            <CheckPoint text="Trusted by online shoppers" />
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        {/* Right Section */}
        {successMsg ? (
          <SuccessMessage msg={successMsg} />
        ) : (
          <SignInForm
            email={email}
            password={password}
            errEmail={errEmail}
            errPassword={errPassword}
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleSignUp={handleSignUp}
          />
        )}
      </div>
    </div>
  );
};

const CheckPoint = ({ text }) => (
  <div className="flex items-center mt-2 text-green-500">
    <BsCheckCircleFill />
    <p className="ml-2 text-sm">{text}</p>
  </div>
);

const SuccessMessage = ({ msg }) => (
  <div className="flex flex-col items-center justify-center w-full h-screen">
    <p className="w-2/3 px-4 py-8 text-green-500 font-medium bg-white rounded-md shadow-lg">
      {msg}
    </p>
    <Link to="/signup">
      <button className="w-2/3 px-4 py-2 mt-4 text-white bg-primeColor rounded-md hover:bg-black">
        Sign Up
      </button>
    </Link>
  </div>
);

const SignInForm = ({
  email,
  password,
  errEmail,
  errPassword,
  handleEmail,
  handlePassword,
  handleSignUp,
}) => (
  <form className="w-full max-w-md p-8 mx-auto mt-10 bg-white rounded-md shadow-lg">
    <h1 className="mb-6 text-3xl font-semibold">Sign in</h1>
    <div className="mb-4">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
        Work Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleEmail}
        className="w-full h-10 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primeColor"
        placeholder="gakeshop@gmail.com"
      />
      {errEmail && <p className="text-sm text-red-500 mt-1">{errEmail}</p>}
    </div>

    <div className="mb-6">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={handlePassword}
        className="w-full h-10 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primeColor"
        placeholder="Create password"
      />
      {errPassword && <p className="text-sm text-red-500 mt-1">{errPassword}</p>}
    </div>

    <button
      onClick={handleSignUp}
      className="w-full h-10 text-white bg-primeColor rounded-md hover:bg-black"
    >
      Sign In
    </button>

    <p className="mt-4 text-sm text-center">
      Don't have an Account?{" "}
      <Link to="/signup" className="text-blue-600">
        Sign up
      </Link>
    </p>
  </form>
);

export default SignIn;
