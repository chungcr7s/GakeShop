import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import Diamond from "./handle_cert.jpg";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20 flex-row">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-left text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2023 | Gake shopping | All Rights Reserved |
          <a href="..." target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by GakeShop.com
            </span>
          </a>
        </p>
        <section className="one-fourth" id="html">
          <img src={Diamond} alt="Chung nhan Tin Nhiem Mang" />
        </section>
      </div>
    </div>
  );
};

export default FooterBottom;
