import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "/public/logo.svg";
import { DatePicker, Space } from "antd";
import logotich from "/public/check-mark.png";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const Register = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="pb-10">
      <div className="pt-10">
        <Image
          src={logo}
          alt="logo"
          className="w-[70px] mx-auto text-center justify-center"
        />
        <div className="text-center font-bold  pt-5 text-[26px] lg:w-[30%] sm:w-full  mx-auto">
          BECOME A NIKE MEMBER
        </div>
        <div className="text-center w-full lg:w-[30%] mx-auto pt-5 text-[13px] text-[#8d8d8d] ">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </div>
        <div>
          <section>
            <div class="flex flex-col items-center justify-center mx-auto">
              <div class="w-full md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full rounded-lg p-2 border-2 border-[#e5e5e5] placeholder:text-[13px]"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full rounded-lg p-2 border-2 border-[#e5e5e5] placeholder:text-[13px]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="first"
                        id="first"
                        placeholder="First name"
                        className="w-full rounded-lg p-2 border-2 border-[#e5e5e5] placeholder:text-[13px]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="last"
                        id="last"
                        placeholder="Last name"
                        className="w-full rounded-lg p-2 border-2 border-[#e5e5e5] placeholder:text-[13px]"
                      />
                    </div>
                    {/* <div>
                      <Space direction="vertical">
                        <DatePicker
                          onChange={onChange}
                          className=" lg:w-[255%] py-2 border-2 border-[#e5e5e5 hover:border-black box-shadow-example shadow-none"
                        />
                      </Space>
                      <p className="text-[11px] text-center mt-2 text-[#8d8d8d]">
                        Get a Nike Member Reward every year on your Birthday.
                      </p>
                    </div> */}
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <div
                          className={`border-2 border-[#e5e5e5] py-2 text-center relative  ${
                            selectedOption === "male"
                              ? "text-black border-black"
                              : "text-[#8d8d8d]"
                          }`}
                          onClick={() => handleOptionSelect("male")}
                        >
                          Male
                          {selectedOption === "male" && (
                            <span className="">
                              <Image
                                src={logotich}
                                className="w-[8%] ml-12 absolute  bottom-[13px]  "
                              />
                            </span>
                          )}
                        </div>
                      </div>

                      <div
                        className={`border-2 border-[#e5e5e5] py-2 text-center relative ${
                          selectedOption === "female"
                            ? "text-black border-black"
                            : "text-[#8d8d8d]"
                        }`}
                        onClick={() => handleOptionSelect("female")}
                      >
                        Female
                        {selectedOption === "female" && (
                          <span className="">
                            <Image
                              src={logotich}
                              className="w-[8%] ml-10 absolute  bottom-[13px]  "
                            />
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4"
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label
                            for="remember"
                            className="text-[#8d8d8d] text-[13px]"
                          >
                            Sign up for emails to get updates from Nike on
                            products, offers and your Member benefits
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-black text-white rounded-[5px] text-[15px] px-5 py-2.5 text-center font-bold"
                    >
                      JOIN US{" "}
                    </button>
                    <p class="text-sm font-light text-[#8d8d8d] text-center mx-auto">
                      Not a Member?{" "}
                      <Link
                        href="/Login"
                        className="font-medium text-black underline"
                      >
                        Sign up
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
