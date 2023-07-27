import React from "react";
import Menu from "../components/Menu";
import Image from "next/image";

const Confirm = () => {
  return (
    <div className="w-[90%] text-center pt-40 pb-40 mx-auto">
      <div>
        <Image
          src="/verified.gif"
          width="80"
          height="50"
          className="mx-auto text-center justify-center"
        />
      </div>
      <div className="text-[20px] mt-5 font-bold">
        Xác nhận email thành công{" "}
      </div>
    </div>
  );
};

export default Confirm;
