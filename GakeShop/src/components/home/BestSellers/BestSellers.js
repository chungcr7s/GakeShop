import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Wireless Speaker"
          price="180.00"
          color="Black"
          badge={true}
          des="Marshall - Kilburn II Portable Bluetooth Speaker - Black and Brass."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Camera Security"
          price="250.00"
          color="Black and White"
          badge={true}
          des="Spotlight Camera Security Bundle - 3 Wire-Free Cameras Indoor/Outdoor 2K with Color Night Vision."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Smart Washer"
          price="620.00"
          color="Black and White"
          badge={true}
          des="Washer with Smarter Wash Technology, Easier Reach & Microban Technology."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Apple - Ipad"
          price="240.00"
          color="Black, White and Gray "
          badge={true}
          des="Apple - 10.2-Inch iPad (9th Generation) with Wi-Fi - 64GB."
        />
      </div>
    </div>
  );
};

export default BestSellers;
