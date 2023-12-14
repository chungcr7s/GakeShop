import React, { useState } from "react";
import NavTitle from "./NavTitle";
import { paginationItems } from "../../../../constants";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 49.99,
    },
    {
      _id: 951,
      priceOne: 50.0,
      priceTwo: 99.99,
    },
    {
      _id: 952,
      priceOne: 100.0,
      priceTwo: 199.99,
    },
    {
      _id: 953,
      priceOne: 200.0,
      priceTwo: 399.99,
    },
    {
      _id: 954,
      priceOne: 400.0,
      priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: 600.0,
      priceTwo: 1000.0,
    },
  ];

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handlePriceFilter = (price) => {
    // Lọc sản phẩm theo giá được chọn
    const filteredProducts = paginationItems.filter(
      (product) =>
        product.price >= price.priceOne && product.price <= price.priceTwo
    );

    // Cập nhật danh sách sản phẩm đã lọc vào state
    setFilteredProducts(filteredProducts);

    // Cập nhật giá được chọn
    setSelectedPrice(price);
  };

  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              onClick={() => handlePriceFilter(item)}
              style={{
                color: selectedPrice === item ? "red" : "inherit", // Màu đỏ cho giá được chọn
              }}
            >
              ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      {/* Hiển thị danh sách sản phẩm đã lọc */}
      {filteredProducts.length > 0 && (
        <div>
          <h2>Filtered Products:</h2>
          <ul>
            {filteredProducts.map((product) => (
              <li key={product._id}>{product.productName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Price;
