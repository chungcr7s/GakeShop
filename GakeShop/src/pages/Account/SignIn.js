import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";

const SignIn = () => {
  // ============== Trạng thái ban đầu Bắt đầu tại đây ==============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============== Trạng thái ban đầu Kết thúc tại đây ================
  // ============== Thông báo lỗi Bắt đầu tại đây ==================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // ============== Thông báo lỗi Kết thúc tại đây =====================
  const [successMsg, setSuccessMsg] = useState("");
  // ============== Trình xử lý sự kiện Bắt đầu tại đây ==============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============== Trình xử lý sự kiện Kết thúc tại đây ================
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Please enter your email");
    }

    if (!password) {
      setErrPassword("Please create a password");
    }
    // =============== Lấy giá trị ===============
    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Stay sign in for more
            </h1>
            <p className="text-base">When you sign in, you are with us!</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast 
              </span>
              <br />
              Begin your journey instantly with our user-friendly platform. 
              Effortlessly set up your account and start exploring a world of possibilities in mere minutes. 
              Get up and running without any hassle.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all services
              </span>
              <br />
              Unlock a comprehensive array of services at your fingertips. 
              Seamlessly navigate through our platform to access a wide range of features and tools designed to cater to your every need.
              Discover convenience and efficiency in one place.
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Join the multitude of online shoppers who rely on us for a secure and reliable shopping experience. 
              Our track record speaks for itself, with a community of satisfied customers who trust us 
              for quality, safety, and seamless transactions. Shop with confidence !
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link to="/">
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                © GAKE
              </p>
            </Link>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full">
      {successMsg ? (
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
          <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont text-center">
            {successMsg}
          </p>
          <Link to="/signup">
            <button className="w-full h-10 bg-primeColor text-white rounded-md text-base font-titleFont font-semibold hover:bg-black duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      ) : (
        <form className="w-full lg:w-1/2 h-screen flex items-center justify-center">
          <div className="px-6 py-8 w-full h-[80%] max-w-md bg-white rounded-md shadow-md">
            <h1 className="font-titleFont text-3xl md:text-4xl mb-6 text-center">
              Sign In
            </h1>
            <div className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="font-titleFont text-base font-semibold text-gray-600 mb-1">
                  Email
                </label>
                <input
                  onChange={handleEmail}
                  value={email}
                  id="email"
                  className="w-full h-10 px-4 text-base font-medium rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-primeColor"
                  type="email"
                  placeholder="gakeshop@gmail.com"
                />
                {errEmail && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold mt-1">
                    <span className="font-bold italic mr-1">!</span>
                    {errEmail}
                  </p>
                )}
              </div>
    
              {/* Password */}
              <div className="flex flex-col">
                <label htmlFor="password" className="font-titleFont text-base font-semibold text-gray-600 mb-1">
                  Password
                </label>
                <input
                  onChange={handlePassword}
                  value={password}
                  id="password"
                  className="w-full h-10 px-4 text-base font-medium rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-primeColor"
                  type="password"
                  placeholder="Create password"
                />
                {errPassword && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold mt-1">
                    <span className="font-bold italic mr-1">!</span>
                    {errPassword}
                  </p>
                )}
              </div>
    
              <button
                onClick={handleSignUp}
                className="bg-primeColor hover:bg-black text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300 mt-4"
              >
                Sign In
              </button>
              <p className="text-sm text-center font-titleFont font-medium mt-3">
                Don't have an Account?{" "}
                <Link to="/signup" className="text-primeColor hover:text-black duration-300">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      )}
    </div>
    
    

    </div>
  );
};

export default SignIn;
