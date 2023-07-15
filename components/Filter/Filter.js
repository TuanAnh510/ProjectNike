import React, { useState } from "react";
import { Checkbox } from "antd";
const Filter = () => {
  const [expanded, setExpanded] = useState(true);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const toggleExpanded2 = () => {
    setExpanded2(!expanded2);
  };
  const toggleExpanded3 = () => {
    setExpanded3(!expanded3);
  };
  const toggleExpanded4 = () => {
    setExpanded4(!expanded4);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      {/* Price */}
      <div className="border border-t-[#ccccc] mb-3"></div>
      <button onClick={toggleExpanded} className="flex justify-between w-60">
        <p className="font-bold text-[16px]">Shop By Price</p>
        <div className={`user_icon ${expanded ? "expanded" : ""}`}>
          {expanded ? "-" : "+"}
        </div>
      </button>
      {expanded && (
        <div className="mt-5 flex flex-col font-medium  ">
          <Checkbox onChange={onChange} className="text-[16px]">
            500.000 VND
          </Checkbox>
          <Checkbox onChange={onChange} className="text-[16px]">
            Trên 1.000.000 VND
          </Checkbox>
          <Checkbox onChange={onChange} className="text-[16px]">
            Trên 2.000.000 VND
          </Checkbox>
          <Checkbox onChange={onChange} className="text-[16px]">
            Trên 3.000.000 VND
          </Checkbox>
        </div>
      )}

      {/* Sale */}
      <div className="border border-t-[#ccccc] mb-3 mt-5"></div>
      <button onClick={toggleExpanded2} className="flex justify-between w-60">
        <p className="font-bold text-[16px]">Sale & Offers</p>
        <div className={`user_icon ${expanded ? "expanded" : ""}`}>
          {expanded2 ? "-" : "+"}
        </div>
      </button>
      {expanded2 && (
        <div className="mt-5 flex flex-col font-medium ">
          <Checkbox onChange={onChange} className="text-[16px]">
            Sale
          </Checkbox>
        </div>
      )}

      {/* Size */}
      <div className="border border-t-[#ccccc] mb-3 mt-5"></div>
      <button onClick={toggleExpanded3} className="flex justify-between w-60">
        <p className="font-bold text-[16px]">Sale & Offers</p>
        <div className={`user_icon ${expanded ? "expanded" : ""}`}>
          {expanded3 ? "-" : "+"}
        </div>
      </button>
      {expanded3 && (
        <div className="mt-5 grid grid-cols-3 font-medium gap-3 ">
          <div className="border border-gray-500 text-center rounded-md py-1 hover:border-black hover:border-2">
            5
          </div>
          <div className="border border-gray-500 text-center rounded-md py-1 hover:border-black hover:border-2">
            6
          </div>
          <div className="border border-gray-500 text-center rounded-md py-1 hover:border-black hover:border-2">
            7
          </div>
          <div className="border border-gray-500 text-center rounded-md py-1 hover:border-black hover:border-2">
            8
          </div>
          <div className="border border-gray-500 text-center rounded-md py-1 hover:border-black hover:border-2">
            9
          </div>
          <div className="border border-gray-500 text-center rounded-md py-1 hover:border-black hover:border-2">
            10
          </div>
          <div className="border border-gray-500 text-center rounded-md py-1 hover:border-black hover:border-2">
            11
          </div>
          <div className="border border-gray-500 text-center rounded-md py-1 hover:border-black hover:border-2">
            12
          </div>
          <div className="border border-gray-500 text-center rounded-md py-1 hover:border-black hover:border-2">
            13
          </div>
        </div>
      )}

      {/* Thương hiêu */}
      <div className="border border-t-[#ccccc] mb-3 mt-5"></div>
      <button onClick={toggleExpanded4} className="flex justify-between w-60">
        <p className="font-bold text-[16px]">Branch</p>
        <div className={`user_icon ${expanded ? "expanded" : ""}`}>
          {expanded4 ? "-" : "+"}
        </div>
      </button>
      {expanded4 && (
        <div className="mt-5 flex flex-col font-medium  ">
          <Checkbox onChange={onChange} className="text-[16px]">
            Nike Sportswear
          </Checkbox>
          <Checkbox onChange={onChange} className="text-[16px]">
            Jordan
          </Checkbox>
          <Checkbox onChange={onChange} className="text-[16px]">
            NikeLab
          </Checkbox>
          <Checkbox onChange={onChange} className="text-[16px]">
            ACG
          </Checkbox>
        </div>
      )}
    </div>
  );
};

export default Filter;
