import React from "react";
import HoverExpand from "./HoverTitle";

import Image from "next/image";
import Link from "next/link";
import baner from "/public/Kids/bannel.png";
import CartSlider from "./Slider/CartSlider";
import CartSliderFinner from "./Slider/CartSliderFinner";
import CartSport from "./Slider/CartSport";

import img6 from "/public/Kids/Screenshot 2023-07-17 162404.png";
import CartSliderWM from "./Slider/CartSliderWM";
import CartSliderKids from "./Slider/CartSliderKids";

const Homekids = () => {
  return (
    <div>
      {" "}
      <div className="w-[90%] max-w-[90%] mx-auto pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3  lg:z-0  bg-white pb-5 pt-5  ">
          <p className="text-[25px]">Kids</p>
        </div>
        <div className="mt-10">
          <Image src={baner} alt="baner" />
          <div className="pt-5 ">
            <Image
              src={img6}
              alt="img"
              className="w-[100%] mx-auto lg:w-[60%]"
            />
            <div className="text-center">
              What better way to mark the Pegasus’ 40th anniversary than by
              running together?
            </div>
          </div>
          <Link href="/Kids">
            <div className="text-center pt-4">
              <button className="bg-black text-white w-[100px] rounded-[20px] h-10 hover:bg-[#757575]">
                Shop
              </button>
            </div>
          </Link>
        </div>

      
        <div className="mt-20">
          <CartSliderKids />
        </div>

        <div className="mt-10">
          <div className="text-[25px]">Trending</div>
          <div className="mt-10">
            <div className="gap-3 text-center grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <Image
                  src="/Kids/bannel2.png"
                  alt="men1"
                  width={700}
                  height={0}
                  className="max-h-[657px] "
                />
                <div style={{ position: "absolute", top: "70%", left: "10%" }}>
                  <p className="text-white text-[20px] font-semibold ">
                    {" "}
                    Easy On & Off Shoes
                  </p>
                </div>
                <div style={{ position: "absolute", top: "80%", left: "10%" }}>
                  <button className="bg-white text-black w-[200%] h-9 rounded-[20px]">
                    Shop
                  </button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/Kids/bannel3.png"
                  alt="img"
                  width={700}
                  height={0}
                  className="max-h-[657px] "
                />
                <div
                  style={{ position: "absolute", left: "10%" }}
                  className="top-[60%] lg:top-[70%]"
                >
                  <p className="text-white text-xl font-semibold">
                    Summer Essentials
                  </p>
                </div>
                <div
                  style={{ position: "absolute", left: "10%" }}
                  className="top-[80%]"
                >
                  <button className="bg-white text-black w-[200%] h-9 rounded-[20px]">
                    Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <CartSliderWM />
        </div>

        <div className="mt-20">
          <p className="text-[25px]">Sizes for All</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-3">
            <div className="relative">
              <Image
                src="/Kids/bannel4.png"
                width={700}
                height={0}
                className="h-[100%]"
              />
              <div
                style={{ position: "absolute", left: "10%" }}
                className="top-[80%] lg:top-[85%]"
              >
                <p className="text-left text-black text-2xl">Older Kids</p>
              </div>
              <div
                style={{ position: "absolute", left: "10%" }}
                className="top-[90%]"
              >
                <button className="bg-black text-white w-[200%] h-9 rounded-[20px]">
                  Shop
                </button>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="relative">
                <Image src="/Kids/bannel5.png" width={700} height={0} />
                <div
                  style={{ position: "absolute", left: "10%" }}
                  className="top-[60%] lg:top-[70%]"
                >
                  <p className="text-left text-black text-2xl">
                    Babies & Toddlers
                  </p>
                </div>
                <div
                  style={{ position: "absolute", left: "10%" }}
                  className="top-[80%]"
                >
                  <button className="bg-black text-white w-[200%] h-9 rounded-[20px]">
                    Shop
                  </button>
                </div>
              </div>
              <div className="relative">
                <Image src="/Kids/bannel6.png" width={700} height={0} />
                <div
                  style={{ position: "absolute", left: "10%" }}
                  className="top-[60%] lg:top-[70%]"
                >
                  <p className="text-left text-black text-2xl">Younger Kids</p>
                </div>
                <div
                  style={{ position: "absolute", left: "10%" }}
                  className="top-[80%]"
                >
                  <button className="bg-black text-white w-[200%] h-9 rounded-[20px]">
                    Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-auto text-center mt-20">
          <HoverExpand />
        </div>
      </div>
    </div>
  );
};

export default Homekids;
