import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Smart Ceiling Light"
          price="70.00"
          color="Black and White"
          badge={true}
          des="This simple and clean Smart LED ceiling light is also ideal for store lighting, gallery lighting, display lighting, work lighting, product validation and home lighting."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="iPhone 13"
          price="650.00"
          color="Blue"
          badge={true}
          des="iPhone 13 Pro Max. Upgrade your camera. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip, superfast 5G, durable design and long battery life."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="280.00"
          color="Black"
          badge={true}
          des="Sony - WH1000XM5 Wireless Noise-Canceling Over-the-Ear Headphones."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Smart Refrigerator"
          price="620.00"
          color="Gray"
          badge={true}
          des="Samsung - French Door Counter Depth Smart Refrigerator with AutoFill Water Pitcher."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
