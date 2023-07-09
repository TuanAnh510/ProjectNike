import React from 'react'
import Image from 'next/image'
import logonavTop from '/public/1200px-Jumpman_logo.svg.png'
import Link from 'next/link'
const NavTop = () => {
  return (
    <div className='w-full bg-[#f5f5f5] h-[30px] sm:hidden hidden lg:block  ' >
        <div className='flex justify-between max-w-[75%] mx-auto'   >
            <Image src={logonavTop} className='h-[25px] w-[25px]' />
            <div className='text-[13px] pt-[5px] flex'>
                <div className='mr-5'>Giúp đỡ</div>
                <span>|</span>
                <div className=' ml-5 mr-5'>Tham gia với chúng tôi</div>
                <span>|</span>
                <div className='ml-5'>
                  <Link href="/Login">
                    Đăng nhập
                  </Link>
                 </div>
            </div>
        </div>
     
    </div>
  )
}

export default NavTop