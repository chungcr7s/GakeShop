import React from "react";
import Brand from "./shopBy/Brand";
import Price from "./shopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
