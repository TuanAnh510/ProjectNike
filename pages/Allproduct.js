import React, { useState } from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

import imgfilter from "/public/filter.png";
import Filtermobi from "@/components/Filter/Filtermobi";
import Filter from "@/components/Filter/Filter";

const Allproduct = ({ products }) => {
  const [hasMore, setHasMore] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 10));
  const [isOpen, setIsOpen] = useState(false);
  const [openTrees, setopenTrees] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Đặc sắc", "Mới nhất", "Giá: Cao-Thấp", "Giá: Thấp-Cao"];
  const [showFilter, setShowFilter] = useState(false);
  const showText = showFilter ? "Hide" : "Show";

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const loadMore = () => {
    if (visibleProducts.length >= products.length) {
      setHasMore(false);
      return;
    }

    const nextBatch = products.slice(
      visibleProducts.length,
      visibleProducts.length + 10
    );
    setVisibleProducts((prevProducts) => [...prevProducts, ...nextBatch]);
  };
  //Dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  //Trees
  return (
    <div className="w-[90%] mx-auto pt-10 pb-10">
      <div className="flex justify-between">
        <p className="text-[20px]">All PRODUCT</p>

        <div className="flex gap-7 hidden lg:block lg:flex md:hidden ">
          <button className="flex" onClick={handleFilterClick}>
            {showText} Filter
            <Image src={imgfilter} className="ml-2 mt-1" width={20} />
          </button>
          <div class="relative">
            <button
              className="flex "
              onClick={toggleDropdown}
              value={selectedOption}
              readOnly
            >
              Sort By
              <div
                className={`mt-0 right-3 ${
                  isOpen ? "transform rotate-180" : ""
                } transition-transform duration-200`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={toggleDropdown}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 15z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
            {isOpen && (
              <ul className="absolute z-10  -mx-20 text-right bg-white border border-gray-300 rounded-md shadow-md mt-2">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div>
        <Filtermobi />
      </div>

      <div className="flex gap-5">
        {showFilter && (
          <div className="pt-10">
            <Filter />
          </div>
        )}
        <InfiniteScroll
          dataLength={visibleProducts.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          // endMessage={<p>No more products</p>}
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 mx-auto pb-10 gap-5 pt-10">
            {visibleProducts?.map((product, index) => (
              <Link key={index} href="">
                <div className="transform overflow-hidden bg-white duration-200  cursor-pointer">
                  <Image src={product.img} width={500} height={300} />
                  <div className="pt-5">
                    {/* <h6 className=" font-bold text-[#9e3500]">Just In</h6> */}
                    <h5>{product.title}</h5>
                    <h5 className="text-[#858585]">{product.category}</h5>
                    <h5 className="text-[#858585]">{product.color}</h5>
                    <div className="pt-2">
                      {product.price
                        ? product.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })
                        : ""}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "product.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}

export default Allproduct;
