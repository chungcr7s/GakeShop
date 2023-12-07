import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Technology of Tomorrow</span>{" "}
          Articles exploring advanced technologies like artificial intelligence,
          virtual reality, or the Internet of Things (IoT), and how they'll
          transform daily life.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Smart Shopping Guide</span>{" "}
          Guides on choosing the right products, 
          comparisons between different electronic devices,
          and reviews of the latest products on the market.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">User Experience Shares</span>{" "}
          Real user stories on how they utilize and enjoy electronic products,
          sharing their experiences and insights.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Daily Tech News</span>{" "}
          Updates on the latest news and events in the tech industry,
          developments from major brands, and innovations.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Repair and Maintenance How-Tos</span>{" "}
          Articles guiding users on small repairs and maintenance 
          to prolong the lifespan of their electronic devices.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Success Stories</span>{" "}
          Interviews with creators, entrepreneurs, 
          and innovators in the tech field sharing their journeys and experiences.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Trends and Future Predictions</span>{" "}
          Analysis of current trends and predictions about 
          what will be popular in the near future.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
