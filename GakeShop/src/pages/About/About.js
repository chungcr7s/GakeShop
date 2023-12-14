import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-lg text-lightText mb-4 font-semibold">
          GAKE: Revolutionizing Your Digital Lifestyle
        </h1>
        <p className="max-w-[600px] text-base text-lightText mb-4">
          Welcome to GAKE, where innovation meets your digital needs. 
          At GAKE, we are passionate about transforming the way you experience technology.
        </p>
        <p className="max-w-[600px] text-base text-lightText mb-4">
          Our mission is to provide you with the latest and most advanced tech products that enhance your daily life. 
          Whether you're a tech enthusiast, a professional, or someone looking to upgrade their digital lifestyle, GAKE is your go-to destination.
        </p>
        <p className="max-w-[600px] text-base text-lightText mb-4">
          GAKE curates a diverse range of cutting-edge gadgets, high-performance devices, and innovative solutions. 
          We believe in quality, reliability, and staying ahead of the technological curve.
        </p>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
