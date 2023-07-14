import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import logoHeader from "/public/logo.svg";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import Search from "./Search";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobi from "./MenuMobi";
import { Button, Drawer, theme } from "antd";

const Header = () => {
  const [show, setShow] = useState("translate-y-0");
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header
      className={`bg-white w-full h-[50px] md:h-[80px] flex items-center justify-between z-10 lg:sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image src={logoHeader} className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu={showCatMenu} />
        <div className="flex items-center gap-2 text-black">
          <div>
            <Search />
          </div>
          {/* Icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
          </div>

          <Link href="">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
            </div>
          </Link>

          {/* Mobi */}
          <div>
            <MenuMobi />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
