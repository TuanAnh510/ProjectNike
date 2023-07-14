import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const CartSlider = ({ women }) => {
  const settings = {
    dots: false,
    infinite: true,
    // arrows: true,
    fade: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        <div className="text-[25px]">Always Iconic</div>
        <div className="pb-5 flex gap-5">
          <span
            className="bg-[#e5e5e5] text-white rounded-full hover:bg-[#cccccc] w-10 h-10  cursor-pointer hidden lg:block md:hidden "
            onClick={gotoPrev}
          >
            <AiOutlineLeft color="black" className="mx-auto mt-3" />
          </span>
          <span
            className="bg-[#e5e5e5] text-white rounded-full hover:bg-[#cccccc] w-10 h-10  cursor-pointer hidden lg:block md:hidden  "
            onClick={gotoNext}
          >
            <AiOutlineRight color="black" className="mx-auto mt-3" />
          </span>
        </div>
      </div>

      <div className="mt-10 lg:mt-0">
        <Slider {...settings} ref={sliderRef} className="card">
          <div>
            <img src="/women/1.png" alt="1" />
          </div>
          <div>
            <img src="/women/3.png" alt="1" />
          </div>
          <div>
            <img src="/women/4.png" alt="1" />
          </div>
          <div>
            <img src="/women/5.png" alt="1" />
          </div>
          <div>
            <img src="/women/6.png" alt="1" />
          </div>
          <div>
            <img src="/women/1.png" alt="1" />
          </div>
          <div>
            <img src="/women/3.png" alt="1" />
          </div>
          <div>
            <img src="/women/4.png" alt="1" />
          </div>
          <div>
            <img src="/women/5.png" alt="1" />
          </div>
          <div>
            <img src="/women/6.png" alt="1" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CartSlider;
