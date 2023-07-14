import React from "react";
import HoverExpand from "./HoverTitle";

import Image from "next/image";
import Link from "next/link";
import baner from "/public/96fd84c5-0fd7-4e59-9d4d-28e66330b763.png";
import CartSlider from "./Slider/CartSlider";
import CartSliderFinner from "./Slider/CartSliderFinner";
import CartSport from "./Slider/CartSport";

import img6 from "/public/Screenshot 2023-07-08 193929.png";

const Homemen = () => {
  return (
    <div>
      {" "}
      <div className="w-[90%] max-w-[90%] mx-auto pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 z-20 lg:z-0  bg-white pb-5 pt-5  sticky top-0 transition-transform duration-300">
          <p className="text-[25px]">Men</p>
          <div className="flex gap-5 justify-center mt-5 lg:mt-0">
            <button>Shoes</button>
            <button>Clothing</button>
            <button>Gear</button>
          </div>
        </div>
        <div className="mt-10">
          <Image src={baner} alt="baner" />
          <div className="pt-5 ">
            <Image
              src={img6}
              alt="img"
              className="w-[100%] mx-auto lg:w-[40%]"
            />
            <div className="text-center">It’s a new dawn for football.</div>
          </div>
          <Link href="/Allproduct">
            <div className="text-center pt-4">
              <button className="bg-black text-white w-[100px] rounded-[20px] h-10 hover:bg-[#757575]">
                Shop
              </button>
            </div>
          </Link>
        </div>

        <div className="mt-10">
          <div className="text-[25px]">Featured</div>
          <div className="mt-10">
            <div className="gap-3 text-center grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <Image
                  src="/Men.png"
                  alt="men1"
                  width={700}
                  height={0}
                  className="max-h-[657px] "
                />
                <div style={{ position: "absolute", top: "70%", left: "10%" }}>
                  <p className="text-white text-[20px] "> Workout Essentials</p>
                </div>
                <div style={{ position: "absolute", top: "80%", left: "10%" }}>
                  <button className="bg-white text-black w-[200%] h-9 rounded-[20px]">
                    Shop
                  </button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/men2.png"
                  alt="img"
                  width={700}
                  height={0}
                  className="max-h-[657px] "
                />
                <div
                  style={{ position: "absolute", left: "10%" }}
                  className="top-[60%] lg:top-[70%]"
                >
                  <p className="text-left text-white">Fresh Air</p>
                  <p className="text-white text-xl"> Incoming Air Drop</p>
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
          <p className="text-[25px]">The Essentials</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-3">
            <div className="relative">
              <Image src="/logomen.png" width={700} height={0} />
              <div
                style={{ position: "absolute", left: "10%" }}
                className="top-[80%] lg:top-[85%]"
              >
                <p className="text-left text-black text-2xl">Clothing</p>
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
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Image src="/logomen2.png" width={700} height={0} />
                <div
                  style={{ position: "absolute", left: "10%" }}
                  className="top-[60%] lg:top-[70%]"
                >
                  <p className="text-left text-black text-2xl">Shoes</p>
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
                <Image src="/logomen3.png" width={700} height={0} />
                <div
                  style={{ position: "absolute", left: "10%" }}
                  className="top-[60%] lg:top-[70%]"
                >
                  <p className="text-left text-black text-2xl">Accessories</p>
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

        <div className="mt-20">
          <CartSliderFinner />
        </div>
        <div className="mt-20">
          <CartSlider />
        </div>
        <div>
          <CartSport />
        </div>
        <div className="mt-20 mx-auto text-center">
          <HoverExpand />
        </div>
      </div>
    </div>
  );
};

export default Homemen;
