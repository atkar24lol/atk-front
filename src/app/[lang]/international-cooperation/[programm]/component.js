"use client"

import { API } from "@/requester";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const ProgrammDetails = ({ dict }) => {
  const [programmDetails, setProgrammDetails] = useState({});

  const { lang, programm } = useParams()

  const handleProgrammDetails = useCallback(async () => {
    const response = await API.get(`education/courses-programms/${programm}/`)
    const data = await response.data;
    setProgrammDetails(data);
  }, [lang]);

  useEffect(() => {
    handleProgrammDetails();
  }, [handleProgrammDetails]);

  return (
    <div className="w-full flex pt-[20px] pb-[64px] flex-col justify-around">
      {programmDetails && programmDetails?.image && (
        <div
          className={
            'flex gap-8 w-full justify-between p-5 items-center sm:px-[16px] sm:pb-[60px] flex-wrap flex-col sm:pt-[20px] h-auto'
          }
        >
          <p className="text-[40px] md:text-[30px] text-center sm:text-[22px] font-[700] tracking-[2px] text-[#000]">
            {programmDetails?.[`title_${lang}`]}
          </p>

          {/* <p className="font-[900] text-[#838383] md:text-[9px] text-[11px]">
            {String(programmDetails?.date)?.slice(0, 10)}
          </p> */}

          <span className="text-[24px] px-5 w-[80%] md:text-[20px] text-justify sm:text-[16px] text-[#000]">
            {programmDetails?.[`description_${lang}`]}
          </span>

          <div className="flex gap-5 py-4 flex-col justify-center items-center flex-wrap w-full">
            <img className="w-[600px] md:w-[400px] sm:wf h-[500px]" src={programmDetails?.image} alt={programmDetails?.[`title_${lang}`]} />

            <p className="text-[30Px] md:text-[30px] sm:text-[22px] font-[700] tracking-[2px] text-[#000]">Длительность поездки: {' '}
              {programmDetails?.[`duration_${lang}`]}
            </p>

            <p className="text-[30Px] md:text-[30px] sm:text-[22px] font-[700] tracking-[2px] text-[#000]">Стоимость поездки: {' '}
              {programmDetails?.[`price`]} сом
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgrammDetails