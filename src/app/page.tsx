"use client";
import Link from "next/link";
import { Great_Vibes, Inter } from "@next/font/google";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FoodCategory from "@/app/components/foodCategory";
import ChooseAndPick from "@/app/components/chooseAndPick";

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  
  return (
    <div className="bg-[#0D0D0DF2] pt-[150px] lg:pt-0">
      <div className="sec1 max-w-[1320px] relative lg:h-[600px] mx-auto px-[20px] sm:px-[60px] flex justify-between items-center md:flex-row flex-col">
        <div className="hidden lg:absolute lg:top-[30px] lg:left-[-50px] lg:flex lg:flex-col lg:items-center lg:gap-[30px]">
          <div className="w-[1px] h-[150px] bg-[#FFF]"></div>
          <div className="flex flex-col text-white gap-[30px]">
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="" className="text-[#FF9F0D]">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="">
              <i className="bi bi-pinterest"></i>
            </a>
          </div>
          <div className="w-[1px] h-[150px] bg-[#FFF]"></div>
        </div>
        <div className="md:w-[40%]">
          <h3
            className={`${greatVibes.className} text-center md:text-start text-[#FF9F0D] text-[32px] font-normal`}
          >
            Its Quick & Amusing!
          </h3>
          <div className="flex flex-col gap-[15px] items-center md:items-start">
            <h1
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              className="md:leading-[68px] font-helvetica text-center md:text-start text-[38px] md:text-[60px] text-white"
            >
              <span className="text-[#FF9F0D]">Th</span>e Art of speed food
              Quality
            </h1>
            <p
              className={`${inter.className} font-normal text-[16px] text-white text-center md:text-start`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <Link
              href="/menu"
              className={`px-[40px] py-3 w-fit rounded-[30px] bg-[#FF9F0D] text-white ${inter.className} font-normal text-[16px] hover:bg-white hover:text-[#FF9F0D] transition duration-300 ease-in-out`}
            >
              See Menu
            </Link>
          </div>
        </div>
        <div className="md:w-[55%]">
          <div className="w-[100%] h-[100%] transform xxl:translate-x-[90px]">
            <img
              src="/heroImg.png"
              className="w-[100%] h-[100%] object-center object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sec2 px-[20px] sm:px-[60px] py-[50px] text-white max-w-[1320px] relative lg:h-[600px] mx-auto flex justify-between items-center flex-col md:flex-row gap-[30px] md:gap-0">
        <div className="md:w-[50%] text-center md:text-start">
          <h3
            className={`${greatVibes.className} text-[#FF9F0D] text-[32px] font-normal`}
          >
            About us
          </h3>
          <div className="flex flex-col gap-[15px] items-center md:items-start">
            <h1
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              className="leading-[68px] font-helvetica text-[38px] md:text-[60px] text-white"
            >
              <span className="text-[#FF9F0D]">We</span> Create the best foody
              product
            </h1>
            <p
              className={`${inter.className} font-normal text-[16px] text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <ul>
              <li className="flex gap-[4px] items-center">
                <i className="bi bi-check2 font-bold"></i>
                <p className="text-[18px] font-normal">
                  Lacus nisi, et ac dapibus sit eu velit in consequat.{" "}
                </p>
              </li>
              <li className="flex gap-[4px] items-center">
                <i className="bi bi-check2 font-bold"></i>
                <p className="text-[18px] font-normal">
                  Quisque diam pellentesque bibendum non dui volutpat fringilla
                </p>
              </li>
              <li className="flex gap-[4px] items-center">
                <i className="bi bi-check2 font-bold"></i>
                <p className="text-[18px] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
                </p>
              </li>
            </ul>
            <Link
              href="/aboutus"
              className={`px-[40px] py-3 w-fit rounded-[30px] bg-[#FF9F0D] text-white ${inter.className} font-normal text-[16px] hover:bg-white hover:text-[#FF9F0D] transition duration-300 ease-in-out`}
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="md:w-[48%] flex justify-center flex-wrap gap-[10px]">
          <div className="w-[100%] h-[100%]">
            <img
              src="/egg.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
          </div>
          <div className="w-[45%] h-[100%]">
            <img
              src="/meal.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
          </div>
          <div className="w-[45%] h-[100%]">
            <img
              src="/sandwich.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <FoodCategory />
      <div className="sec4 px-[20px] py-[60px] sm:px-[60px] py-[50px] text-white max-w-[1320px] lg:h-[800px] mx-auto flex justify-between items-center flex-col lg:flex-row lg:gap-0 gap-[30px]">
        <div className="lg:w-[50%] flex flex-wrap gap-[20px] justify-center">
          <div className="flex gap-[20px] items-end flex-col sm:flex-row">
            <div className="sm:max-w-[360px] h-[360px]">
              <img
                src="/shawerma.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt=""
              />
            </div>
            <div className="sm:max-w-[290px] h-[230px] pb-[10px]">
              <img
                src="/burger2.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-[20px] items-start flex-col sm:flex-row">
            <div className="sm:max-w-[244px] h-[306px] pt-[10px]">
              <img
                src="/nuggets.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt=""
              />
            </div>
            <div className="sm:max-w-[225px] h-[225px] pt-[10px]">
              <img
                src="/burger3.png"
                className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="w-[161px] h-[166px]">
                <img
                  src="/burger4.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="w-[161px] h-[166px]">
                <img
                  src="/dish4.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%]">
          <h3
            className={`${greatVibes.className} text-[#FF9F0D] text-[32px] font-normal lg:text-start text-center`}
          >
            Why Choose us
          </h3>
          <div className="flex flex-col gap-[25px]">
            <h1
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              className="md:leading-[68px] font-helvetica text-[38px] md:text-[60px] text-white lg:text-start text-center"
            >
              <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste And
              Experienced
            </h1>
            <p
              className={`${inter.className} font-normal text-[16px] text-white text-center lg:text-start`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="flex gap-[20px] lg:justify-start justify-center">
              <div className="flex flex-col gap-[10px] items-center cursor-pointer">
                <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                  <img
                    src="/burgericon.png"
                    className="w-[50px] h-[50px] object-contain"
                    alt=""
                  />
                </div>
                <h6 className="font-normal text-[18px] text-center lg:text-start">
                  Fast Food
                </h6>
              </div>
              <div className="flex flex-col gap-[10px] items-center cursor-pointer">
                <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                  <img
                    src="/cookie.png"
                    className="w-[50px] h-[50px] object-contain"
                    alt=""
                  />
                </div>
                <h6 className="font-normal text-[18px] text-center lg:text-start">
                  Lunch
                </h6>
              </div>
              <div className="flex flex-col gap-[10px] items-center cursor-pointer">
                <div className="py-5 px-5 bg-[#FF9F0D] text-white rounded-[6px] flex justify-center items-center">
                  <img
                    src="/wine.png"
                    className="w-[50px] h-[50px] object-contain"
                    alt=""
                  />
                </div>
                <h6 className="font-normal text-[18px] text-center lg:text-start">
                  Dinner
                </h6>
              </div>
            </div>
            <div className="h-[100%] flex justify-center lg:justify-start">
              <div className="bg-[#FF9F0D] rounded-l-[6px] w-[5px] h-auto"></div>

              <div className="flex justify-around bg-white py-[12px] rounded-r-[6px] max-w-[300px]">
                <h2
                  className="text-[#FF9F0D] font-bold text-[48px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  30+
                </h2>
                <div>
                  <p className="m-0 text-[20px] font-normal text-[#1E1E1E]">
                    Years of
                  </p>
                  <p
                    className="m-0 text-[24px] font-bold text-[#1E1E1E]"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Experienced
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/sec5bg.png')] relative bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="sec px-[20px] sm:px-[60px] py-[60px] text-white max-w-[1320px] relative lg:h-[470px] mx-auto flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <div className="w-[120px] h-[120px] ">
                <img
                  src="/sec5icon1.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="m-0 font-bold text-[24px] text-center"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Professional Chefs
                </p>
                <p
                  className="m-0 font-bold text-[40px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  420
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <div className="w-[120px] h-[120px] ">
                <img
                  src="/sec5icon2.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="m-0 font-bold text-[24px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Items Of Food
                </p>
                <p
                  className="m-0 font-bold text-[40px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  320
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <div className="w-[120px] h-[120px] ">
                <img
                  src="/sec5icon3.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="m-0 font-bold text-[24px] text-center"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Years Of Experienced
                </p>
                <p
                  className="m-0 font-bold text-[40px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  30+
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <div className="w-[120px] h-[120px] ">
                <img
                  src="/sec5icon4.png"
                  className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="m-0 font-bold text-[24px] text-center"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  Happy Customers
                </p>
                <p
                  className="m-0 font-bold text-[40px]"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  220
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChooseAndPick />
      <div className="sec7 px-[20px] sm:px-[60px] py-[60px] text-white max-w-[1320px] relative lg:h-[600px] mx-auto flex flex-col gap-[25px] items-center">
        <div className="flex flex-col items-center">
          <h3
            className={`${greatVibes.className} text-[#FF9F0D] text-[32px] font-bold`}
          >
            Chefs
          </h3>
          <h1
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            className="text-[##FF9F0D] text-[48px] text-center"
          >
            <span>Me</span>et Our Chefs
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="max-w-[300px] h-[330px] relative group cursor-pointer">
            <img
              src="/person1.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center flex flex-col gap-[5px]">
                <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                  D.Estwood (Chief Chef)
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[300px] h-[330px] relative group cursor-pointer">
            <img
              src="/person2.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center flex flex-col gap-[5px]">
                <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                  D.Scoriesh (Assistant Chef)
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[300px] h-[330px] relative group cursor-pointer">
            <img
              src="/person3.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center flex flex-col gap-[5px]">
                <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                  M. William(Advertising Chef)
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[300px] h-[330px] relative group cursor-pointer">
            <img
              src="/person4.png"
              className="w-[100%] h-[100%] rounded-[6px] object-center object-cover"
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center flex flex-col gap-[5px]">
                <div className="rounded-[6px] bg-white px-4 py-3 text-[#FF9F0D] w-fit font-bold text-[18px]">
                  W.Readfroad (Chef)
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/chef"
          className={`px-[40px] py-3 w-fit rounded-[30px] bg-[#FF9F0D] text-white ${inter.className} font-normal text-[16px] hover:bg-white hover:text-[#FF9F0D] transition duration-300 ease-in-out`}
        >
          See More
        </Link>
      </div>
      <div className="sec8 px-[20px] sm:px-[60px] lg:py-[60px] max-w-[1320px] lg:h-[800px] mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h5
            className={`${greatVibes.className} text-[32px] text-[#FF9F0D] font-normal `}
          >
            Testimonials
          </h5>
          <h2
            className="text-white text-[48px] font-bold text-center"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            <span className="text-[#FF9F0D]">Wh</span>at our client are saying
          </h2>
        </div>
        <div className="swiper-parent w-[100%] ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            direction="horizontal"
          >
            <SwiperSlide>
              <div className="bg-white p-[50px] max-w-[860px] lg:h-[450px] mx-auto">
                <div className="w-[133px] h-[133px] mx-auto transform mt-[-125px] z-30">
                  <img
                    src="/person5.png"
                    className="w-[100%] h-[100%] object-contain rounded-[50%]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-[20px] items-center">
                  <div>
                    <img src="/quotes.png" alt="" />
                  </div>
                  <p
                    className="m-0 text-center text-[18px] font-normal lg:w-[75%] mx-auto"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                    fringilla bibendum. Urna, elit augue urna, vitae feugiat
                    pretium donec id elementum. Ultrices mattis sed vitae mus
                    risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                  </p>
                  <div className="flex gap-[10px]">
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#E0E0E0] bi bi-star-fill"></i>
                  </div>
                  <h5
                    className="font-bold text-[24px] text-[#333333]"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Alamin Hasan
                  </h5>
                  <p
                    className="m-0 text-[#828282] text-[16px] font-normal"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Food Specialist
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white p-[50px] max-w-[860px] lg:h-[450px] mx-auto">
                <div className="w-[133px] h-[133px] mx-auto transform mt-[-125px] z-30">
                  <img
                    src="/person5.png"
                    className="w-[100%] h-[100%] object-contain rounded-[50%]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-[20px] items-center">
                  <div>
                    <img src="/quotes.png" alt="" />
                  </div>
                  <p
                    className="m-0 text-center text-[18px] font-normal lg:w-[75%] mx-auto"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                    fringilla bibendum. Urna, elit augue urna, vitae feugiat
                    pretium donec id elementum. Ultrices mattis sed vitae mus
                    risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                  </p>
                  <div className="flex gap-[10px]">
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#E0E0E0] bi bi-star-fill"></i>
                  </div>
                  <h5
                    className="font-bold text-[24px] text-[#333333]"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Zahir Khan
                  </h5>
                  <p
                    className="m-0 text-[#828282] text-[16px] font-normal"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Food Specialist
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white p-[50px] max-w-[860px] lg:h-[450px] mx-auto">
                <div className="w-[133px] h-[133px] mx-auto transform mt-[-125px] z-30">
                  <img
                    src="/person5.png"
                    className="w-[100%] h-[100%] object-contain rounded-[50%]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-[20px] items-center">
                  <div>
                    <img src="/quotes.png" alt="" />
                  </div>
                  <p
                    className="m-0 text-center text-[18px] font-normal lg:w-[75%] mx-auto"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                    fringilla bibendum. Urna, elit augue urna, vitae feugiat
                    pretium donec id elementum. Ultrices mattis sed vitae mus
                    risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                  </p>
                  <div className="flex gap-[10px]">
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#FF9F0D] bi bi-star-fill"></i>
                    <i className="text-[#E0E0E0] bi bi-star-fill"></i>
                  </div>
                  <h5
                    className="font-bold text-[24px] text-[#333333]"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Asim Khan
                  </h5>
                  <p
                    className="m-0 text-[#828282] text-[16px] font-normal"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  >
                    Food Specialist
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
