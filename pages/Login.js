import Image from 'next/image'
import React from 'react'
import logo from '/public/logo.svg'
import Link from 'next/link'
const login = () => {
  return (
    <div className='pb-10'>
      <div className='pt-10'>
        <Image src={logo} alt='logo' className='w-[70px] mx-auto text-center justify-center'/>
        <div className='text-center font-bold leading-[26px] pt-5 text-[26px] lg:w-[20%] sm:w-full  mx-auto' >
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </div>
        <div>
          <section>
            <div class="flex flex-col items-center justify-center mx-auto">
                <div class="w-full md:mt-0 sm:max-w-md xl:p-0 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                                <input type="email" name="email" id="email" className="w-full p-2 border-2 border-[#e5e5e5]" placeholder="Email address"/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full p-2 border-2 border-[#e5e5e5]" />
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                      <label for="remember" className="text-[#8d8d8d] text-[13px]">Keep me signed in</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-[#8d8d8d] hover:underline">Forgotten your password?</a>
                            </div>
                            <button type="submit" className="w-full bg-black text-white rounded-[5px] text-[15px] px-5 py-2.5 text-center font-bold" >SIGN IN</button>
                            <p class="text-sm font-light text-[#8d8d8d] text-center mx-auto">
                                Not a Member? <Link href="/Register" className="font-medium text-black underline">Sign up</Link>
                            </p>
                            
                        </form>
                    </div>
                </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}

export default login