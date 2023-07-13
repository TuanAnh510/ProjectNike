import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from 'react'
import { Button, Drawer, Radio, Space } from 'antd';
import Image from "next/image";
import logo from '/public/logo.svg'
const Search = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('top');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const handleClose = () => {
            setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };

  return (
  
    <>
    <Space>
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
        <AiOutlineSearch className="text-[19px] md:text-[24px]"  onClick={showDrawer} />                
        </div>
    </Space>
    <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="flex mx-auto justify-around">
            <Image src={logo} className='w-[80px] hidden lg:block' />
            <div className="w-[100%] lg:w-[35%]">
                <form>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm bg-[#e5e5e5] rounded-2xl" placeholder="Search Mockups, Logos..." required/>
                        
                    </div>
                </form>
            </div>
            <button onClick={handleClose} className="text-[18px] hidden lg:block">  
                Cancel
            </button>
            
        </div>
        <div className="pt-10 text-[20px]">
            Popular Search Terms
        </div>
        <div className="mt-3 text-[20px] font-semibold">
            <div>
                Air Force 1
            </div>
            <div className="mt-3">
                Jordan
            </div>
            <div className="mt-3">
                Air Max
            </div>
            <div className="mt-3">
                Blazer
            </div>
        </div>
      
      </Drawer>
    </>
    
  )
}

export default Search