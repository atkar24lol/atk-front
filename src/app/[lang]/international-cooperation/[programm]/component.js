"use client";

import React from "react";
import {API} from "@/requester";
import {useParams} from "next/navigation";
import {useCallback, useEffect, useState} from "react";
import Breadcrumbs from "@/components/breadcrumbs/component";
import ReactMarkdown from 'react-markdown';

const ProgrammDetails = ({dict}) => {
    const [programmDetails, setProgrammDetails] = useState({});

    const {lang, programm} = useParams();

    const handleProgrammDetails = useCallback(async () => {
        const response = await API.get(`education/courses-programms/${programm}/`);
        const data = await response.data;
        setProgrammDetails(data);
    }, [lang, programm]);

    useEffect(() => {
        handleProgrammDetails();
    }, [handleProgrammDetails]);

    const breadcrumbsItems = {
        ru: [{label: "Международное сотрудничество", href: `/${lang}/international-cooperation`}, {
            label: programmDetails?.[`title_${lang}`] || "Загрузка...",
            href: `/${lang}/international-cooperation/${programm}`
        },], en: [{label: "International Cooperation", href: `/${lang}/international-cooperation`}, {
            label: programmDetails?.[`title_${lang}`] || "Loading...",
            href: `/${lang}/international-cooperation/${programm}`
        },], ky: [{label: "Эл аралык кызматташуу", href: `/${lang}/international-cooperation`}, {
            label: programmDetails?.[`title_${lang}`] || "Жүктөө...",
            href: `/${lang}/international-cooperation/${programm}`
        },],
    };

    return (<div className="w-full flex pt-[20px] pb-[64px] flex-col items-center justify-around bg-[#F6F6F6]">
            {programmDetails && programmDetails?.image && (<div
                    className="flex gap-5 w-[1320px] xl:w-[1120px] lg:w-[984px] md:w-[92%] sm:w-full justify-between py-5 lg:py-1 items-start sm:px-[16px] sm:pb-[60px] flex-wrap flex-col sm:pt-[5px] h-auto">
                    <Breadcrumbs items={breadcrumbsItems}/>


                    <h1 className="text-[40px] md:text-[30px] sm:text-[22px] font-[700] text-[#000] text-center">
                        {programmDetails?.[`title_${lang}`]}
                    </h1>

                    <div
                        className="bg-[#fff] w-full px-12 py-10 xl:px-10 xl:py-10 lg:px-10 lg:py-7 md:px-8 md:py-7 sm:px-4 sm:py-5 flex flex-col gap-5">

                        <ReactMarkdown>
                            {programmDetails?.[`description_${lang}`]}
                        </ReactMarkdown>
                        <div className="flex flex-col gap-3 py-4 justify-center items-center flex-wrap w-full">
                            <img
                                className="w-[600px] md:w-[400px] sm:w-full h-[500px] object-cover"
                                src={programmDetails?.image}
                                alt={programmDetails?.[`title_${lang}`]}
                            />
                            <p className="text-[20px] md:text-[30px] sm:text-[22px] font-[700] text-[#000]">
                                Длительность программы: {programmDetails?.[`duration_${lang}`]}
                            </p>

                            <p className="text-[20px] md:text-[30px] sm:text-[22px] font-[700] text-[#000]">
                                Стоимость программы: {programmDetails?.[`price`]} сом
                            </p>
                        </div>

                    </div>


                </div>)}
        </div>);
};

export default ProgrammDetails;