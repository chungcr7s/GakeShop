import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
  newArrSix,
  newArrSeven,
  newArrEight,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Radio Alarm Clock"
            price="28.00"
            color="Black"
            badge={true}
            des="Stylish AM/FM Clock-radio with automatic time setting, brightness control, and gradual alarm ."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="250.00"
            color="Black"
            badge={true}
            des="Smart Watch 9 Pro Real Fixed Screw 49mm 2.19 Amoled Screen with ECG Game Wireless Charge 450Mah Men Women For Sport."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Bed Lamp"
            price="14.00"
            color="Black"
            badge={true}
            des="Stick Lamp with USB Charging Port and Fabric Shade - Brushed Nickel base/Black shade."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Funny toys for babies"
            price="10.00"
            color="Gray"
            badge={true}
            des="Repeat Talking Toy Electronic Plush Toys Can Sing Record Lighten USB Early Education Funny Gift Interactive Bled."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="Air Conditioner"
            price="350.00"
            color="White"
            badge={true}
            des="This small air conditioner is lightweight enough to carry to any room you like, and it is a snap to install, thanks to the single hose and included window adapter."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100006"
            img={newArrSix}
            productName="Robot Vacuum"
            price="380.00"
            color="Black"
            badge={true}
            des="Shark - AI Ultra Robot Vacuum with Matrix Clean, Home Mapping, HEPA Bagless Self Empty Base, WiFI Connected."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100007"
            img={newArrSeven}
            productName="Gaming Laptop"
            price="820.00"
            color="Moonlight White"
            badge={true}
            des="ROG Zephyrus G14 14” 165Hz Gaming Laptop QHD-AMD Ryzen 7 7735HS with 16GB DDR5 Memory-NVIDIA RTX 4050 6G-512GB SSD."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100008"
            img={newArrEight}
            productName="Foldable Drone"
            price="40.00"
            color="Black"
            badge={true}
            des="This drone jam-packed with features designed to give you the cleanest view possible, including obstacle avoidance, optical flow, and real time viewing."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
