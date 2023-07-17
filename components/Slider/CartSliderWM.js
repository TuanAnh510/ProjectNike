import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import datasl from "/data/cartslider.json";
import Link from "next/link";
const CartSliderWM = ({ women }) => {
  const [productsl, setProductssl] = useState(datasl.Cartslide);

  const settings = {
    dots: false,
    infinite: true,
    // arrows: true,
    fade: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="text-[25px]  ">Shop the Icons</div>
        <div className="pb-5 flex gap-5">
          <Link href="/Women">
            <button className="py-2 hover:text-[#b3b3b3] ">Shop</button>
          </Link>
          <span
            className="bg-[#e5e5e5] text-white rounded-full hover:bg-[#cccccc] w-10 h-10  cursor-pointer hidden lg:block md:hidden"
            onClick={gotoPrev}
          >
            <AiOutlineLeft color="black" className="mx-auto mt-3" />
          </span>
          <span
            className="bg-[#e5e5e5] text-white rounded-full hover:bg-[#cccccc] w-10 h-10  cursor-pointer hidden lg:block md:hidden "
            onClick={gotoNext}
          >
            <AiOutlineRight color="black" className="mx-auto mt-3" />
          </span>
        </div>
      </div>

      <div>
        <Slider
          {...settings}
          ref={sliderRef}
          className="card-finnes h-[550px] md:h-[550px] lg:h-[700px]"
        >
          {productsl?.map((Cartslide, index) => (
            <Link key={index} href="/Women">
              <div>
                <img src={Cartslide.img} alt="1" />
                <div className="mt-4 ">
                  <p className="text-black font-medium text-xl">
                    {" "}
                    {Cartslide.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CartSliderWM;
