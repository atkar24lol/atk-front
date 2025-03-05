"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import {Navigation} from "swiper/modules";
import {useParams, useRouter} from "next/navigation";

const MainNewsBlock = ({dict, news}) => {
    const {lang} = useParams();
    const router = useRouter();

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col w-full justify-center max-w-[1280px] xl:max-w-[1201px]">
                <div className="flex">
                <span className="text-[#000] text-[34px] xl:text-[28px] sm:text-[22px] lg:text-[26px] pt-[40px] px-[0px] pr-[40px] xl:pr-[40px] sm:pr-5 xl:px-[30px] lg:px-[20px] sm:pl-5 lg:pr-[30px] font-[700] md:pl-5">
                    {dict?.mainPage?.mainNews?.title}
                </span>
                    <span
                        onClick={() => router.push(`${lang}/news`)}
                        className="flex gap-3 pt-[50px] cursor-pointer justify-between items-center font-[700] text-[12px] xl:text-[11px] lg:text-[10px] sm:text-[9px] tracking-[1.5px] text-[#0084DA] uppercase"
                    >
                    {dict?.mainPage?.mainNews?.link}
                        <img className="w-[6px] xl:w-[5px]" src="next-btn-main-news.png" alt="arrow"/>
                </span>
                </div>

                <div className="flex pt-[40px] max-h-[900px] pb-[100px] lg:pb-[60px] lg:pt-[20px] gap-5 lg:gap-4 justify-center md:flex-col sm:flex-col md:max-h-[3000px] sm:max-h-[3000px] md:items-center sm:items-center md:pb-[50px] sm:pb-[30px]">
                    {news?.filter((_, index) => index === 0).map((event) => (
                        <div
                            key={event?.id}
                            onClick={() => router.push(`${lang}/news/${event?.id}`)}
                            className="flex flex-col max-w-[630px] xl:max-w-[560px] xl:max-h-[650px] lg:max-h-[560px] lg:max-w-[482px] md:max-h-[650px] md:max-w-[560px] sm:max-h-[348px] sm:max-w-[300px] hover:shadow-xl hover:cursor-pointer hover:transition-[1s]"
                        >
                            <img src={event?.image} alt={event?.[`title_${lang}`]} className="w-full h-[60%] sm:h-[50%]"/>
                            <div
                                className="bg-[#0084DA] flex flex-col px-8 md:px-5 sm:px-4 justify-evenly items-start text-[#fff] w-full h-[40%] sm:h-[50%]">
                                <p className="font-[700] text-[#FFFFFF] md:text-[11px] sm:text-[12px] text-[12px]">
                                    {new Date(event?.date).toLocaleDateString("ru-RU")}
                                </p>
                                <p
                                    onClick={() => router.push(`${lang}/news/${event?.id}`)}
                                    className="font-[800] lg:font-[700] hover:underline hover:cursor-pointer text-[#FFFFFF] text-[26px] xl:text-[24px] lg:text-[22px] md:text-[22px] sm:text-[18px]"
                                >
                                    {event?.[`title_${lang}`]}
                                </p>
                                <span
                                    className="block py-1 overflow-hidden lg:hidden md:hidden sm:hidden text-[14px] text-[#FFFFFF] font-[400] w-full max-h-12 leading-3 truncate">
                                {event?.[`description_${lang}`]}
                            </span>
                                <button
                                    onClick={() => router.push(`${lang}/news/${event?.id}`)}
                                    className="cursor-pointer hover:underline pt-4 lg:pt-1 sm:pt-1 uppercase font-bold text-[12px] sm:text-[8px] tracking-[1.02px]"
                                >
                                    {dict?.blogAndNews?.titles?.aboutButton}
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-wrap gap-5 lg:gap-4 max-w-[630px] xl:max-h-[650px] xl:max-w-[560px] lg:max-w-[482px] md:flex-col sm:flex-col">
                        {news?.filter((_, index) => index > 0 && index <= 4).map((event) => (
                                <div className="flex flex-col items-start h-[370px] w-[305px] xl:w-[270px] xl:h-[315px] lg:w-[231px] lg:h-[272px] md:w-[560px] shadow-sm cursor-pointer hover:shadow-lg border-[#ECECEC] border-[1.5px]"
                                     key={event?.id}
                                     onClick={() => router.push(`${lang}/news/${event?.id}`)}
                                     >
                                    <img src={event?.image} alt={event?.[`title_${lang}`]}
                                         className="w-full h-[55%] lg:h-[45%] xl:h-[170px] object-cover"/>
                                    <div className="flex p-4 xl:p-3 w-full gap-3 xl:gap-2 flex-col justify-start">
                                        <p className="font-[700] text-[#838383] md:text-[11px] text-[12px] xl:text-[11px]  pt-1">
                                            {new Date(event?.date).toLocaleDateString("ru-RU")}
                                        </p>
                                        <span
                                            onClick={() => router.push(`${lang}/news/${event?.id}`)}
                                            className="block hover:underline hover:cursor-pointer font-[700] text-[#000000] py-1 text-[18px] xl:text-[16px] lg:text-[15px] md:text-[22px] w-full lg:leading-5 md:leading-7 break-words whitespace-normal"
                                        >
                                        {event?.[`title_${lang}`]}
                                    </span>
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
