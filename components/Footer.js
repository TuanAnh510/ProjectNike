import React from 'react'
import Wrapper from './Wrapper'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
     <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
               
                <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    
                    <div className="flex flex-col gap-3 shrink-0">
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            TÌM CỬA HÀNG
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            TRỞ THÀNH MỘT THÀNH VIÊN 
                        </div>
                        <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
                            GỬI PHẢN HỒI CHO CHÚNG TÔI
                        </div>
                        
                    </div>
                    

                   
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        
                        <div className="flex flex-col gap-3 text-[12px]">
                            <div className="font-oswald font-medium uppercase text-[15px]">
                                GIÚP ĐỠ
                            </div>
                            <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Tình trạng đơn hàng
                            </div>
                            <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Vận chuyển
                            </div>
                            <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Trả lại
                            </div>
                            <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Các lựa chọn thanh toán 
                            </div>
                            <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Liên hệ
                            </div>
                        </div>
                       
                        <div className="flex flex-col gap-3 text-[13px]">
                            <div className="font-oswald font-medium uppercase text-[15px] ">
                                Giới thiệu về NIKE
                            </div>
                            <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Tin tức
                            </div>
                            <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Nghề nghiệp
                            </div>
                            <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Nhà đầu tư
                            </div>
                            <div className=" text-white/[0.5] hover:text-white cursor-pointer">
                                Sự bền vững
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
              
                <div className="flex gap-4 justify-center md:justify-start">
                    <div
                        onClick={() =>
                            window.open("https://facebook.com", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaFacebookF size={20} />
                    </div>
                    <Link
                        href="https://twitter.com"
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaTwitter size={20} />
                    </Link>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaYoutube size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                        <FaInstagram size={20} />
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
            <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. Bảo lưu mọi quyền
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Hướng dẫn
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Điều khoản bán hàng
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Điều khoản sử dụng
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Chính sách quyền riêng tư của NIKE
                    </div>
                </div>
                {/* RIGHT END */}
            </Wrapper>
        </footer>
  )
}

export default Footer