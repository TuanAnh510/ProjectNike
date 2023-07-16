import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { Button, Drawer, Radio, Space } from "antd";
import Image from "next/image";
import logo from "/public/logo.svg";
import { ImCancelCircle } from "react-icons/im";
import icon from "/public/trash.gif";
import productsData from "/data/product.json"; // Đường dẫn tới file JSON của bạn

const Cart = ({ women }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [products, setProducts] = useState(productsData.products); // Giới hạn chỉ lấy 5 sản phẩm đầu tiên
  const [quantity, setQuantity] = useState(0);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const handleDeleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <div>
      {/* Nút mở Drawer */}
      <Space>
        <button
          className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
          onClick={showDrawer}
        >
          <BsCart className="text-[15px] md:text-[20px]" />
        </button>
      </Space>

      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {/* Header */}
        <div className="flex justify-between mb-4">
          <div className="flex gap-4">
            <Image src={logo} className="w-[40px]" />
            <p className="text-[18px] font-bold">Shopping cart</p>
          </div>
          <div>
            <ImCancelCircle size={25} onClick={onClose} />
          </div>
        </div>

        {/* Content */}

        <div className="absolute h-[70%]  overflow-y-auto mt-10">
          {/* Hiển thị sản phẩm */}
          {products.map((product, index) => (
            <div className="flex gap-2 mb-5" key={index}>
              <Image src={product.img} width={80} height={0} />
              <div>
                <p className="font-semibold">{product.title}</p>
                <p className="text-[12px]">Giá sản phẩm: {product.price}</p>

                {/* button tăng giảm sl */}
                <div className="flex gap-10">
                  <div>
                    <p className="font-bold">{product.price}</p>
                  </div>
                  <div className="flex w-20 lg:w-24 flex-wrap items-center justify-evenly border-2 border-gray-300 bg-white rounded-md">
                    <button onClick={handleIncreaseQuantity}>
                      <span className="text-lg font-semibold text-black">
                        +
                      </span>
                    </button>
                    <p>{quantity}</p>
                    <button onClick={handleDecreaseQuantity}>
                      <span className="text-2xl font-semibold text-black">
                        -
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => handleDeleteProduct(index)}>
                <Image src={icon} width={30} className="ml-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-5 left-10 w-[80%]">
          <button className="bg-black text-white w-full py-3 rounded-2xl text-[18px]">
            Checkout
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default Cart;
