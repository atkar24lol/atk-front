'use client';

import React from 'react';
import './styles.css';
import { useParams, useRouter } from 'next/navigation';

const MainFormBlock = ({ dict }) => {
  const router = useRouter();
  const { lang } = useParams();

  return (
    <div className="flex w-full flex-col items-center justify-between pt-[50px] pb-[110px] pl-[81px] pr-[61px] gap-[15px]">
      <h4 className="font-[900] text-[24px] text-[#000]">
        {dict?.mainPage?.mainBlockFeedback?.title}
      </h4>

      <div className="flex w-full flex-wrap items-center gap-[26px] justify-around border-[5px] rounded-lg py-[17px] px-[75px] md:px-[36px] sm:px-2 border-gradient">
        <img
          src="/main-feedback-face.svg"
          alt="face"
          className="w-[88px] h-[88px]"
        />

        <div className="flex flex-col justify-evenly">
          <p
            style={{ verticalTrim: 'Cap height' }}
            className="font-[500] md:text-center sm:text-center text-[20px] text-[#0079C1]"
          >
            {dict?.mainPage?.mainBlockFeedback?.descriptionOne}
          </p>
          <p className="md:text-center sm:text-center">
            {dict?.mainPage?.mainBlockFeedback?.descriptionTwo}
          </p>
        </div>

        <button
          onClick={() => router.push(`/${lang}/contacts#form`)}
          className="bg-[#0079C1] text-[#FFFFFF] text-[16px] sm:text-[12px] font-[700] text-center px-[72px] md:px-[36px] sm:px-2 py-4 md:py-3 sm:py-2 rounded-lg"
        >
          {dict?.mainPage?.mainBlockFeedback?.buttonSubmit}
        </button>
      </div>
    </div>
  );
};

export default MainFormBlock;
