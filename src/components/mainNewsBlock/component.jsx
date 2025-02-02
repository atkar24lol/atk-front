"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

import { Navigation } from "swiper/modules";
import { useParams, useRouter } from "next/navigation";

const MainNewsBlock = ({ dict, news }) => {
  const { lang } = useParams();
  const router = useRouter();

  return (
    <div>
      {/* Mobile */}
      <div className="sm:p-[18px] relative sm:flex hidden sm:flex-col   sm:w-full">
        <p className="text-[#000] w-full text-[32px] pt-[18px] pb-[13px] font-[800]">
          {dict?.mainPage?.mainNews?.title}
        </p>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mainMobileNews"
        >
          {news &&
            news.length > 0 &&
            news?.map((event) => (
              <SwiperSlide>
                <div className="w-[252px] flex flex-col justify-start items-start h-[388px] bg-[#fff] p-[24px] pt-[22px] gap-[14px] overflow-hidden">
                  <img
                    src={event?.image}
                    alt={event?.[`title_${lang}`]}
                    className="w-[203px] h-[190px]"
                  />

                  <span className="font-[600] truncate w-full text-[11px] text-[#000]">
                    {String(event?.date)?.slice(0, 10)}
                  </span>
                  <p className="font-[700] block text-[20px] text-[#000]">
                    {event?.[`title_${lang}`]}
                  </p>
                  <span className="block overflow-hidden text-[10px] font-[400] text-[#000] w-full max-h-12 leading-3 truncate">
                    {event?.[`description_${lang}`]}
                  </span>
                  <p
                    onClick={() => router.push(`${lang}/news`)}
                    className="flex gap-3 justify-between items-center font-[700] text-[10.06px] tracking-[0.5px] text-[#0072BC]"
                  >
                    {dict?.totalTranslate?.about}
                    <img
                      className="w-[3.5px]"
                      src="next-btn-main-news.png"
                      alt={event?.[`title_${lang}`]}
                    />
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Other */}
      <div className="flex sm:hidden flex-col w-full">
        <div className="flex">
          <span className="text-[#000] text-[34px] pt-[60px] px-[80px] font-[800]">
            {dict?.mainPage?.mainNews?.title}
          </span>

          <span
            onClick={() => router.push(`${lang}/news`)}
            className="flex gap-3 pt-[60px] cursor-pointer justify-between items-center font-[700]
          text-[12px] tracking-[1.5px] text-[#0072BC]"
          >
            {dict?.mainPage?.mainNews?.link}

            <img
              className="w-[3.5px]"
              src="next-btn-main-news.png"
              alt="arrow"
            />
          </span>
        </div>

        <div className="flex w-full pt-[71px] max-h-[900px] pb-[100px] px-[80px] gap-5">
          {news
            ?.filter((event, index) => index === 0)
            .map((event, index) => (
              <div
                onClick={() => router.push(`${lang}/news/${event?.id}`)}
                className="flex flex-col w-1/2 hover:shadow-xl hover:cursor-pointer hover:transition-[1s]"
              >
                <img
                  src={event?.image}
                  alt={event?.[`title_${lang}`]}
                  className="w-full h-[60%]"
                />
                <div className="bg-[#0072BC] flex flex-col p-8 justify-evenly items-start text-[#fff] w-full h-[40%]">
                  <p className="font-[900] text-[#FFFFFF] md:text-[9px] text-[11px]">
                    {String(event?.date)?.slice(0, 10)}
                  </p>
                  <p
                    onClick={() => router.push(`${lang}/news/${event?.id}`)}
                    className="font-[600] hover:underline hover:cursor-pointer text-[#FFFFFF] md:text-[16px] lg:text-[22px] sm:text-[20px] xl:text-[26px] xxl:text-[32px]"
                  >
                    {event?.[`title_${lang}`]}
                  </p>
                  <span className="block py-1 overflow-hidden md:text-[14px] text-[18px] text-[#FFFFFF] font-[400] w-full max-h-12 leading-3 truncate">
                    {event?.[`description_${lang}`]}
                  </span>
                  <button
                    onClick={() => router.push(`${lang}/news/${event?.id}`)}
                    className="cursor-pointer hover:underline pt-4"
                  >
                    {dict?.blogAndNews?.titles?.aboutButton}
                  </button>
                </div>
              </div>
            ))}

          <div className="flex flex-col md:gap-2 gap-7 w-1/2">
            {news
              ?.filter((event, index) => index > 0 && index <= 2)
              .map((event, index) => (
                <div
                  onClick={() => router.push(`${lang}/news/${event?.id}`)}
                  className="flex shadow-sm cursor-pointer hover:shadow-lg border-[#ECECEC] border-[1.5px] flex-col h-1/2"
                >
                  <div className="flex flex-col items-start">
                    <img
                      src={event?.image}
                      alt={event?.[`title_${lang}`]}
                      className="w-full h-[200px]"
                    />
                    <div className="flex p-4 w-full gap-3 flex-col justify-start">
                      <p className="font-[900] text-[#838383] md:text-[9px] text-[11px]">
                        {String(event?.date)?.slice(0, 10)}
                      </p>
                      <span
                        onClick={() => router.push(`${lang}/news/${event?.id}`)}
                        className="block hover:underline hover:cursor-pointer font-[900] text-[#000000] py-1 overflow-hidden text-[18px] md:text-[12px] w-full leading-3 truncate"
                      >
                        {event?.[`description_${lang}`]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNewsBlock;
