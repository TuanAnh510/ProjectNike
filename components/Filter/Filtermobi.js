import Image from "next/image";
import React, { useState } from "react";
import imgfilter from "/public/filter.png";
import { Button, Drawer, Radio, Space } from "antd";

const Filtermobi = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
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
        height={550}
        onClose={onClose}
        open={open}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //   </Space>
        // }
      ></Drawer>
    </div>
  );
};

export default Filtermobi;
