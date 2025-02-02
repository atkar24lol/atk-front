"use client"

import { API } from "@/requester";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const NewsDetails = ({ dict }) => {
  const [newsDetails, setNewsDetails] = useState({});

  const { lang, newsId } = useParams()

  const handleGetNewsDetails = useCallback(async () => {
    const response = await API.get(`news/news/${newsId}/`);
    const data = await response.data;
    setNewsDetails(data);
  }, [lang]);

  useEffect(() => {
    handleGetNewsDetails();
  }, [handleGetNewsDetails]);

  return (
    <div className="w-full flex pt-[20px] pb-[64px] flex-col justify-around">
      {newsDetails && newsDetails?.image && (
        <div
          className={
            'flex gap-8 w-full justify-between p-5 items-start sm:px-[16px] sm:pb-[60px] flex-wrap flex-col sm:pt-[20px] h-auto'
          }
        >
          <p className="text-[40px] md:text-[30px] sm:text-[22px] font-[700] tracking-[2px] text-[#000]">
            {newsDetails?.[`title_${lang}`]}
          </p>

          <p className="font-[900] text-[#838383] md:text-[9px] text-[11px]">
            {String(newsDetails?.date)?.slice(0, 10)}
          </p>

          <span className="text-[28px] md:text-[20px] text-justify sm:text-[16px] text-[#000]">
            {newsDetails?.[`description_${lang}`]}
          </span>
        </div>
      )}
    </div>
  );
}

export default NewsDetails