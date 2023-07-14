import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "New & Featured", url: "/" },
  { id: 2, name: "Men", url: "/Pagemen" },
  { id: 3, name: "Women", url: "/Women" },
  { id: 4, name: "Kids", url: "/contact" },
  { id: 5, name: "Sale", url: "/contact" },
  { id: 6, name: "SNKPS", url: "/contact" },
];
const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories,
}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li className="cursor-pointer flex items-center  relative">
                {item.name}
                {/* <BsChevronDown size={14} /> */}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
