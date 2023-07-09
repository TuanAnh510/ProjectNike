import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "New & Featured", url: "/" },
    { id: 2, name: "Men", url: "/about" },
    { id: 3, name: "Women", subMenu: true },
    { id: 4, name: "Kids", url: "/contact" },
    { id: 5, name: "Sale", url: "/contact" },
    { id: 6, name: "SNKPS", url: "/contact" },
   

];

const Menu = () => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center  relative"
                              
                            >
                                {item.name}
                                {/* <BsChevronDown size={14} /> */}
                            </li>
                        ) : (
                            <li className="cursor-pointer">
                                <Link href={item?.url}>{item.name}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default Menu;