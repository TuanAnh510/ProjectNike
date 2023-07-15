import Image from "next/image";
import React, { useState } from "react";
import imgfilter from "/public/filter.png";
import { Button, Drawer, Radio, Space } from "antd";
import { Checkbox } from "antd";

const Filtermobi = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onChangeCheckbox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      {" "}
      <Space className="mt-5 lg:hidden ">
        <button
          className="flex border border-[#cccccc] py-2 rounded-3xl justify-center h-10 px-3"
          onClick={showDrawer}
        >
          <p className="font-bold">Filter</p>
          <Image src={imgfilter} className="ml-2 mt-1" width={20} />
        </button>
      </Space>
      <Drawer
        title="Filter"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //   </Space>
        // }
      >
        {/* <div className="border border-t-[#ccccc] mb-3"></div> */}
        <button className="">
          <p className="font-bold text-[16px]">Shop By Price</p>
        </button>

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

        {/* Sale */}
        <div className="border border-t-[#ccccc] mb-3 mt-5"></div>
        <button className="">
          <p className="font-bold text-[16px]">Sale</p>
        </button>
        <div className="mt-5 flex flex-col font-medium  ">
          <Checkbox onChange={onChange} className="text-[16px]">
            Sale
          </Checkbox>
        </div>

        {/* Size */}
        <div className="border border-t-[#ccccc] mb-3 mt-5"></div>
        <button>
          <p className="font-bold text-[16px]">Sale & Offers</p>
        </button>

        <div className="mt-5 grid grid-cols-5 font-medium gap-3 ">
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

        {/* Thương hiêu */}
        <div className="border border-t-[#ccccc] mb-3 mt-5"></div>
        <button>
          <p className="font-bold text-[16px]">Branch</p>
        </button>
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
      </Drawer>
    </div>
  );
};

export default Filtermobi;
