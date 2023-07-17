import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
const   CartSliderFinner = ({ women }) => {
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
        <div className="text-[25px]  ">Your New Workout Wardrobe</div>
        <div className="pb-5 flex gap-5">
          <button className="py-2 hover:text-[#b3b3b3] ">Shop</button>
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
          className="card-finnes h-[450px] md:h-[400px] lg:h-[500px]"
        >
          <div>
            <img src="/Finnes/1.png" alt="1" />
            <div className="flex justify-between pt-5">
              <p className="font-medium text-black">Nike Dri-FIT ADV A.P.S.</p>
              <div className="mr-5">2000000</div>
            </div>
          </div>
          <div>
            <img src="/Finnes/2.png" alt="1" />
            <div className="flex justify-between pt-5">
              <div>Nike Dri-FIT ADV A.P.S.</div>
              <div className="mr-5">2000000</div>
            </div>
          </div>
          <div>
            <img src="/Finnes/3.png" alt="1" />
            <div className="flex justify-between pt-5">
              <div>Nike Dri-FIT ADV A.P.S.</div>
              <div className="mr-5">2000000</div>
            </div>
          </div>
          <div>
            <img src="/Finnes/4.png" alt="1" />
            <div className="flex justify-between pt-5">
              <div>Nike Dri-FIT ADV A.P.S.</div>
              <div className="mr-5">2000000</div>
            </div>
          </div>
          <div>
            <img src="/Finnes/5.png" alt="1" />
            <div className="flex justify-between pt-5">
              <div>Nike Dri-FIT ADV A.P.S.</div>
              <div className="mr-5">2000000</div>
            </div>
          </div>
          <div>
            <img src="/Finnes/6.png" alt="1" />
            <div className="flex justify-between pt-5">
              <div>Nike Dri-FIT ADV A.P.S.</div>
              <div className="mr-5">2000000</div>
            </div>
          </div>
          <div>
            <img src="/Finnes/7.png" alt="1" />
            <div className="flex justify-between pt-5">
              <div>Nike Dri-FIT ADV A.P.S.</div>
              <div className="mr-5">2000000</div>
            </div>
          </div>
          <div>
            <img src="/Finnes/8.png" alt="1" />
            <div className="flex justify-between pt-5">
              <div>Nike Dri-FIT ADV A.P.S.</div>
              <div className="mr-5">2000000</div>
            </div>
          </div>
          <div>
            <img src="/Finnes/9.png" alt="1" />
            <div className="flex justify-between pt-5">
              <div>Nike Dri-FIT ADV A.P.S.</div>
              <div className="mr-5">2000000</div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CartSliderFinner;
