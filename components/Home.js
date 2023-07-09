import Image from 'next/image'
import React from 'react'
import baner from '/public/baner.png'
import img2 from '/public/3ecdce7e-e748-41ec-a2b1-ed8a478f9009.png'
import img3 from '/public/Screenshot 2023-07-07 211904.png'
import img4 from '/public/95ddfc1f-7bdc-4333-8b2e-6d0ab64c2ff7.png'
import img5 from '/public/Screenshot 2023-07-08 192617.png'
import img6 from '/public/Screenshot 2023-07-08 193929.png'
import img7 from '/public/nike-just-do-it.jpg'
import img8 from '/public/Screenshot 2023-07-08 201723.png'
import img9 from '/public/Screenshot 2023-07-08 205913.png'
import img10 from '/public/Shop01.jpg'
import img11 from '/public/Shop02.jpg'
import img12 from '/public/Shop03.jpg'
import Cart from './Slider/Cart'


const Banner = () => {
  return (
    <div className='w-[90%] max-w-[90%] mx-auto'>
        <Image src={baner} alt='baner' />
        <div className='pt-5 '>
          <Image src={img6} alt='img' className='w-[100%] mx-auto lg:w-[40%]' />
          <div className='text-center'>
            It’s a new dawn for football.
          </div>
        </div> 
        <div className='text-center pt-4'>
            <button className='bg-black text-white w-[100px] rounded-[20px] h-10 hover:bg-[#757575]'>Shop</button>
        </div>
          
        <div className='mt-10'>
          <div className='text-[25px]'>The Latest</div>
          <Image src={img2} alt='img' className='w-[100%] mx-auto lg:w-[100%] mt-9' />
          <div>
          <Image src={img3} alt='img' className='w-[100%] mx-auto lg:w-[50%] mt-9' />
          <div className='text-center'>Don’t miss your chance to score coveted restocks and new editions of your favourite kicks, <br/>  with colour-themed drops happening daily—only on the Nike App.</div>
          </div>
        </div>
        <div className='text-center pt-4'>
            <button className='bg-black text-white w-[100px] rounded-[20px] h-10 hover:bg-[#757575]'>Shop</button>
        </div>

        <div className='mt-10'>
        <div className='text-[25px]'>Trending</div>
        <div>
          <Image src={img4} alt='img' className='w-[100%] mx-auto lg:w-[100%] mt-9' />
          <div>
             <Image src={img5} alt='img' className='w-[100%] mx-auto lg:w-[45%] mt-9' />  
             <div className='w-[70%] text-center mx-auto mt-5'>
              If maneuvering quickly through the lane is your thing, the G.T. Cut 2 has you covered. Built to help you make the multi-directional cuts necessary to leave your footprint on the court and be greater than the competition.
             </div>
          </div>
          <div className='text-center pt-4'>
            <button className='bg-black text-white w-[100px] rounded-[20px] h-10 hover:bg-[#757575]'>Shop</button>
          </div>
        </div>
        </div>

        <div className='mt-10'>
          <div className='text-[25px]'>Featured</div>
          <video autoPlay={true} muted={true} playsInline={true} loop={true} className='max-w-screen-2xl w-full rounded mt-5'>
            <source src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-4dfwd-educate-fw22-digital-catlp-masthead-large-d_w5e8xp.mp4" />
          </video>
          <div>
             <Image src={img9} alt='img' className='w-[100%] mx-auto lg:w-[40%] mt-9' />  
             <div className='w-[70%] text-center mx-auto mt-5'>
              Agile and stable - flex for your next move.
             </div>
          </div>
          <div className='text-center pt-4'>
            <button className='bg-black text-white w-[100px] rounded-[20px] h-10 hover:bg-[#757575]'>Shop</button>
          </div>
          
        </div>
      
        <div className='mt-10'>
          <div className='text-[25px]'>Don't Miss</div>
          <Image src={img7} alt='img' className='w-[100%] mx-auto lg:w-[100%] mt-9' />
          <div>
             <Image src={img8} alt='img' className='w-[100%] mx-auto lg:w-[40%] mt-9' />  
             <div className='w-[70%] text-center mx-auto mt-5'>
              Go green for the return of a classic.
             </div>
          </div>
          <div className='text-center pt-4'>
            <button className='bg-black text-white w-[100px] rounded-[20px] h-10 hover:bg-[#757575]'>Shop</button>
          </div>
          
        </div>

        <div className='mt-10'>
          <div className='text-[25px]'>Always Iconic</div>
          <div className='mt-5 '><Cart/></div>
          
        </div>

        <div className='mt-10 pb-10 '>
          <div className='text-[25px]'>
            The Essentials
          </div>
          <div className=''>
            <div className="gap-10 text-center grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1">
              <div className='relative'>
                <Image src={img10} alt="img" width={420} />
                <div style={{ position: 'absolute', top: '80%', left: '10%' }}>
                  <button className="bg-white text-black w-[150%] h-9 rounded-[20px]">
                    Men's
                  </button>
                </div>
              </div>
              <div className='relative'>
                <Image src={img11} alt="img" width={420} />
                <div  style={{ position: 'absolute', top: '80%', left: '10%' }}>
                  <button className="bg-white text-black w-[150%] h-9 rounded-[20px]">
                    Women's
                  </button>
                </div>
              </div>
              <div className='relative'>
                <Image src={img12} alt="img" width={420} />
                <div  style={{ position: 'absolute', top: '80%', left: '10%' }}>
                  <button className="bg-white text-black w-[150%] h-9 rounded-[20px]">
                    Kid's
                  </button>
                </div>
              </div>
            </div>

          
          </div>
          
          
        </div>
    </div>
    


  )
}

export default Banner