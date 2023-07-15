import React from "react";
import HoverExpand from "./HoverTitle";
import CartSport from "./Slider/CartSport";
import CartSlider from "./Slider/CartSlider";
import CartSliderFinner from "./Slider/CartSliderFinner";
import Link from "next/link";
import Image from "next/image";
import baner from "/public/women/logo.png";
import imgwm from "/public/women/Screenshot 2023-07-15 192334.png";
import imgwm2 from "/public/women/Screenshot 2023-07-15 200505.png";
import imgwm3 from "/public/women/imgwm3.png";
import imgwm4 from "/public/women/2563267b-3ebe-470f-8a56-1842286857c3.png";
import imgwm5 from "/public/women/e39a8402-cb14-4e17-9081-223b869cd98a.png";
import imgwm6 from "/public/women/5008a977-532f-4d26-a170-80029206b6dc.png";
import imgwm7 from "/public/women/women-s-shoes-clothing-accessories.png";

const Homewomen = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="w-[90%] max-w-[90%] mx-auto pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3  lg:z-0  bg-white pb-5 pt-5  ">
            <p className="text-[25px]">Men</p>
            <div className="flex gap-7 lg:gap-7 justify-center mt-5 lg:mt-0 ">
              <Link href="/Women">
                <button className="py-3">Shoes</button>
              </Link>
              <button>Clothing</button>
              <button>Pants & Leggings</button>
              <button>Sports Bras</button>
            </div>
          </div>
          <div className="mt-5">
            <Image src={baner} alt="baner" />
            <div className="pt-5 ">
              <Image
                src={imgwm}
                alt="img"
                className="w-[100%] mx-auto lg:w-[60%]"
              />
              <div className="text-center">It’s a new dawn for football.</div>
            </div>
            <Link href="/Women">
              <div className="text-center pt-4">
                <button className="bg-black text-white w-[100px] rounded-[20px] h-10 hover:bg-[#757575]">
                  Shop
                </button>
              </div>
            </Link>
          </div>
          <video
            autoPlay={true}
            muted={true}
            playsInline={true}
            loop={true}
            className="max-w-screen-2xl w-full rounded mt-5"
          >
            <source src="nike_pro_hero_-_nike_pro_bra_collection (1080p).mp4" />
          </video>
          <div>
            <div className="pt-5 ">
              <Image
                src={imgwm2}
                alt="img2"
                className="w-[100%] mx-auto lg:w-[50%]"
              />
              <div className="text-center">
                A compressive feel that makes you want to push your limits.
              </div>
            </div>
            <Link href="/Women">
              <div className="text-center pt-4">
                <button className="bg-black text-white w-[100px] rounded-[20px] h-10 hover:bg-[#757575]">
                  Shop
                </button>
              </div>
            </Link>
          </div>

          <div className="mt-20">
            <CartSliderFinner />
          </div>
          <div className="relative">
            <video
              autoPlay={true}
              muted={true}
              playsInline={true}
              loop={true}
              className="max-w-screen-2xl w-full rounded mt-5"
            >
              <source src="nike_shoe (1080p).mp4" />
            </video>
            <div>
              <div
                style={{ position: "absolute", left: "5%" }}
                className="top-[30%] lg:top-[70%]"
              >
                <p className="text-white mb-0 lg:mb-5 ">Nike Motiva</p>
                <p className="text-white text-[20px] lg:text-[70px] font-bold mb-0 lg:mb-10 ">
                  FOR ALL WALKS
                </p>
                <p className="text-white">Nike Motiva</p>
              </div>
              <div
                style={{ position: "absolute", left: "5%" }}
                className="top-[80%] lg:top-[90%]"
              >
                <button className="bg-white text-black w-[200%] h-9 rounded-[20px]">
                  Shop
                </button>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <CartSlider />
          </div>
          <div>
            <CartSport />
          </div>
          {/* <div>
            <Image
              src={imgwm3}
              alt="img3"
              className="w-[100%] mx-auto lg:w-full"
            />
            <Link href="/Women">
              <div className="text-center pt-4 flex justify-center gap-5">
                <button className="bg-black text-white w-[150px] rounded-[20px] h-10 hover:bg-[#757575]">
                  Explore NTC
                </button>
                <button className="bg-black text-white w-[150px] rounded-[20px] h-10 hover:bg-[#757575]">
                  Explore NRC
                </button>
              </div>
            </Link>
          </div> */}

          <div className="mt-14 mx-auto text-center">
            <HoverExpand />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homewomen;
