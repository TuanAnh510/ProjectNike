import ProductDetails from "@/components/Slider/ProductDetails";
import Wrapper from "@/components/Wrapper";
import { Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import CartSlider from "@/components/Slider/CartSlider";
const Category = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full flex-[1.5] md:w-auto max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetails />
          </div>

          <div className="flex-[1] py-3">
            <div className="text-[25px] font-semibold">
              Nike Killshot 2 Leather
            </div>
            <div className="text-[15px] pt-2">Men't Shoe</div>
            <div className="mt-5">2.222.000</div>

            <div className="mt-5">
              <div className="flex justify-between">
                <div className="font-semibold text-[18px]">Select Size</div>
                <div className="text-black/[0.5]">Select Guide</div>
              </div>
              {/* Button */}
              <div className=" pt-3 grid grid-cols-3 gap-2">
                <div className="border border-gray-400 rounded-md text-center py-3 font-medium hover:border-black hover:border-2 cursor-pointer">
                  US 7
                </div>
                <div className="border border-gray-400 rounded-md text-center py-3 font-medium hover:border-black hover:border-2  cursor-pointer">
                  US 7.5
                </div>
                <div className="border border-gray-400 rounded-md text-center py-3 font-medium hover:border-black hover:border-2  cursor-pointer">
                  US 8
                </div>
                <div className="border border-gray-400 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer hover:border-2 ">
                  US 8.5
                </div>
                <div className="border border-gray-400 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer hover:border-2 ">
                  US 9
                </div>
                <div className="border border-gray-400 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer hover:border-2 ">
                  US 9.5
                </div>
                <div className="border border-gray-400 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer hover:border-2 ">
                  US 10
                </div>
                <div className="border border-gray-400 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer hover:border-2 ">
                  US 10.5
                </div>
                <div className="border border-gray-400 rounded-md text-center py-3 font-medium hover:border-black cursor-pointer hover:border-2 ">
                  US 11
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button className="bg-black text-white w-full hover:bg-[#707072] h-[60px] rounded-3xl text-[17px] font-semibold">
                Add to bag
              </button>
              <button className="bg-white text-black border border-[#b2bec3] hover:border-black mt-4 w-full  h-[60px] rounded-3xl text-[17px] font-semibold">
                Favourite ❤
              </button>
            </div>

            <p className="mt-10 leading-7 ">
              Inspired by the original low-profile tennis shoe, the Nike
              Killshot 2 updates the upper with a variety of textured leathers
              to create a fresh look. From soft suedes to smooth leathers with
              the perfect sheen, it's court-side attitude with a modern touch.
              To prove you're on top, the rubber gum sole adds the cherry on
              bottom.
            </p>

            <div className="pt-10">
              <div className="w-full bg-[#e5e5e5] h-[2px] mb-5">
                <button
                  onClick={toggleExpanded}
                  className="pt-5 flex justify-between gap-32"
                >
                  <p className="text-[20px] font-medium ">
                    Free Delivery and Returns
                  </p>
                  <div className={`user_icon ${expanded ? "expanded" : ""}`}>
                    {expanded ? "-" : "+"}
                  </div>
                </button>
                {expanded && (
                  <div className="mt-5 text-[16px]">
                    <p>
                      {" "}
                      Đơn hàng của bạn từ 2.000.000 trở lên sẽ được giao hàng
                      tiêu chuẩn miễn phí.
                    </p>
                    ao
                    <ul className="list-disc ml-5 mt-5">
                      <li>Tiêu chuẩn giao 1-3 ngày làm việc</li>
                      <li>Chuyển phát nhanh giao 0-2 ngày làm việc</li>
                    </ul>
                    <p className="mt-5">
                      Đơn đặt hàng được xử lý và giao hàng từ Thứ Hai đến Chủ
                      Nhật (trừ ngày lễ).
                    </p>
                    <p>
                      Các Thành viên của Nike được hưởng lợi nhuận miễn phí . Áp
                      dụng loại trừ .
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40">
          <CartSlider />
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
