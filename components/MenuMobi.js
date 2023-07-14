import React, { useState, useEffect } from "react";
import { Button, Drawer, Space, theme } from "antd";
import { BiMenuAltRight } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/1200px-Jumpman_logo.svg.png";
const data = [
  { id: 1, name: "New & Featured", url: "/" },
  { id: 2, name: "Men", url: "/Pagemen" },
  { id: 3, name: "Women", url: "/Women" },
  { id: 4, name: "Kids", url: "/contact" },
  { id: 5, name: "Sale", url: "/contact" },
  { id: 6, name: "SNKPS", url: "/contact" },
];

const MenuMobi = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [selectedItem, setSelectedItem] = useState(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const handleClose = (item) => {
    setSelectedItem(item);
    onClose();
  };

  useEffect(() => {
    if (selectedItem) {
      onClose();
    }
  }, [selectedItem]);

  const handleButtonClick = () => {
    onClose();
  };
  return (
    <>
      <div>
        <Space>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full lg:hidden flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BiMenuAltRight
              className="text-[19px] md:text-[24px]"
              onClick={showDrawer}
            />
          </div>
        </Space>
        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <ImCancelCircle size={25} onClick={onClose} className="mx-72" />

          <div>
            <ul className="flex flex-col  font-bold left-0 text-black">
              {data.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    {!!item?.subMenu ? (
                      <li className="cursor-pointer flex items-center  relative">
                        {item.name}
                      </li>
                    ) : (
                      <li
                        className="py-4 px-5 border-b"
                        onClick={() => handleClose(item)}
                      >
                        <Link
                          href={item?.url}
                          onClick={() => setMobileMenu(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
            <div className="flex">
              <Image src={logo} className="h-[30px] w-[30px] mt-10" />
              <p className="mt-10 text-xl font-semibold ml-5">NIKE</p>
            </div>
            <div className="flex pt-10 justify-center gap-3">
              <Link href="/Login">
                <button
                  className="bg-black text-white  w-28 h-10 rounded-3xl font-medium text-[15px]"
                  onClick={handleButtonClick}
                >
                  Join Us
                </button>
              </Link>
              <Link href="/Register">
                <button
                  className="border border-[#cccccc] w-28 h-10 rounded-3xl font-medium text-[15px]"
                  onClick={handleButtonClick}
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default MenuMobi;
