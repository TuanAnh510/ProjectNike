import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const CartSportWN = ({ women }) => {
  const settings = {
    dots: false,
    infinite: true,
    // arrows: true,
    fade: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
        <div className="text-[25px]  ">Shop By Sport</div>
        <div className="pb-5 flex gap-5">
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
          className="card-finnesWM mt-5 lg:mt-0 h-[350px] md:h-[400px] lg:h-[300px]"
        >
          <div>
            <img src="/women/sl.png" alt="1" />
          </div>
          <div>
            <img src="/women/sl1.png" alt="2" />
          </div>
          <div>
            <img src="/women/sl2.png" alt="3" />
          </div>
          <div>
            <img src="/women/sl4.png" alt="4" />
          </div>
          <div>
            <img src="/women/sl5.png" alt="5" />
          </div>
          <div>
            <img src="/women/sl6.png" alt="6" />
          </div>
          <div>
            <img src="/women/sl7.png" alt="7" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CartSportWN;
