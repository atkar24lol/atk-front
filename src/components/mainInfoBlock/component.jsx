'use client';

import { ArrowForwardIos } from '@mui/icons-material';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const MainInfoBlock = ({ dict }) => {
  const router = useRouter();
  const { lang } = useParams();

  return (
    <div className="w-full flex flex-wrap">
      {/* 1 */}
      <div className="w-full h-[559px] md:h-[400px] sm:h-[231px] sm:flex-row-reverse md:flex-row-reverse flex md:flex-wrap sm:flex-wrap">
        <div className="w-[40%] md:w-[50%] sm:w-[50%] h-full bg-[#0072BC] p-8 flex justify-evenly">
          <div className="flex flex-col md:flex-nowrap sm:flex-nowrap flex-wrap justify-between items-start">
            <p className="font-[900] md:text-[28px] sm:text-[15px] text-[33px] text-[#ffffff]">
              {dict?.mainPage?.mainInfoBlock?.titles?.one}
            </p>

            <span className="font-[400] text-[#fff] text-[16px] sm:text-[8px] text-justify">
              {dict?.mainPage?.mainInfoBlock?.descriptions?.one}
            </span>

            <span
              onClick={() => router.push(`${lang}/education-activity`)}
              className="flex gap-3 pt-[60px] cursor-pointer justify-between items-center font-[700]
          text-[12px] sm:text-[6px] tracking-[1.5px] text-[#ffffff]"
            >
              {dict?.totalTranslate?.about}

              <ArrowForwardIos
                sx={{
                  fontSize: '12px',
                }}
              />
            </span>
          </div>
        </div>
        <div
          className="w-[30%] md:w-[50%] sm:w-[50%] h-full py-8 px-20 flex justify-start items-end md:justify-center sm:justify-center md:items-center sm:items-center"
          style={{
            backgroundImage: "url('/main-info-image-one.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="font-[900] text-[19px] md:text-[15px] sm:text-[11px] text-[#fff]">
            {dict?.mainPage?.mainInfoBlock?.titles?.two}
          </p>
        </div>
        <div
          className="w-[30%] md:w-[50%] sm:w-[50%] h-full py-8 px-20 flex justify-start items-end"
          style={{
            backgroundImage: "url('/main-info-image-two.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="font-[900] text-[19px] text-[#fff]">
            {dict?.mainPage?.mainInfoBlock?.titles?.three}
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="w-full h-[700px] md:h-[350px] sm:h-[260px]  flex justify-start items-end md:flex-wrap sm:flex-wrap">
        <div
          style={{
            backgroundImage: "url('/main-info-image-three.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[33%] md:w-[50%] sm:w-[50%] h-full p-8 flex justify-center items-center flex-wrap"
        >
          <p className="font-[900] sm:text-[12px] md:text-[16px] text-[34px] text-[#fff]">
            {dict?.mainPage?.mainInfoBlock?.titles?.three}
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url('/main-info-image-four.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[33%] md:w-[50%] sm:w-[50%] h-full p-8 flex justify-center items-center"
        >
          <p className="font-[900] sm:text-[12px] md:text-[16px] text-[34px] text-[#fff]">
            {dict?.mainPage?.mainInfoBlock?.titles?.four}
          </p>
        </div>
        <div
          style={{
            backgroundImage: "url('/main-info-image-five.png')",
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[34%] md:w-[50%] sm:w-[50%] h-full p-8 flex justify-center items-center md:hidden sm:hidden"
        >
          <p className="font-[900] sm:text-[12px] md:text-[16px] text-[34px] text-[#fff]">
            {dict?.mainPage?.mainInfoBlock?.titles?.five}
          </p>
        </div>
      </div>

      {/* <div
        className="w-full h-[626px]"
        style={{
          backgroundImage: "url('/main-info-image-bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      /> */}
    </div>
  );
};

export default MainInfoBlock;
