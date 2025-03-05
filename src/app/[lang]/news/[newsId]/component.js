"use client"

import { API } from "@/requester";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Breadcrumbs from "@/components/breadcrumbs/component";

const NewsDetails = ({ dict }) => {
    const [newsDetails, setNewsDetails] = useState({});

    const { lang, newsId } = useParams();

    const handleGetNewsDetails = useCallback(async () => {
        const response = await API.get(`news/news/${newsId}/`);
        const data = await response.data;
        setNewsDetails(data);
    }, [newsId]);

    useEffect(() => {
        handleGetNewsDetails();
    }, [handleGetNewsDetails]);

    // Разделяем текст на параграфы
    const descriptionParagraphs = newsDetails?.[`description_${lang}`]?.split('\n') || [];

    const breadcrumbsItems = {
        ru: [
            { label: "Новости", href: `/${lang}/news` },
            { label: newsDetails?.[`title_${lang}`] || "Загрузка...", href: `/${lang}/news/${newsId}` },
        ],
        en: [
            { label: "News", href: `/${lang}/news` },
            { label: newsDetails?.[`title_${lang}`] || "Loading...", href: `/${lang}/news/${newsId}` },
        ],
        ky: [
            { label: "Жаңылыктар", href: `/${lang}/news` },
            { label: newsDetails?.[`title_${lang}`] || "Жүктөө...", href: `/${lang}/news/${newsId}` },
        ],
    };

    return (
        <div className="w-full flex pt-[20px] pb-[64px] sm:pb-[0] flex-col items-center justify-around bg-[#F6F6F6]">
            {newsDetails && newsDetails?.image && (
                <div className={'flex gap-5 lg:gap-5 sm:gap-5 w-[1320px] xl:w-[1120px] lg:w-[984px] md:w-[92%] sm:w-full justify-between py-5 lg:py-1 items-start sm:px-[16px] sm:pb-[60px] flex-wrap flex-col sm:pt-[5px] h-auto'}>
                    {/* Хлебные крошки */}
                    <Breadcrumbs items={breadcrumbsItems} />

                    {/* Заголовок и дата новости */}
                    <div className="bg-[#0184DA] w-full px-12 py-10 xl:px-10 xl:py-10 lg:px-10 lg:py-7 md:px-8 md:py-7 sm:px-4 sm:py-5 flex flex-col gap-3">
                        <p className="font-[600] text-[#99C8F1] text-[14px] md:text-[11px] sm:text-[10px]">
                            {new Date(newsDetails?.date).toLocaleDateString("ru-RU")}
                        </p>
                        <p className="text-[50px] xl:text-[45px] lg:text-[40px] md:text-[35px] sm:text-[25px] font-[700] leading-[115%] text-[#fff]">
                            {newsDetails?.[`title_${lang}`]}
                        </p>
                    </div>

                    {/* Текст новости с параграфами */}
                    <div className="bg-[#fff] w-full px-12 py-10 xl:px-10 xl:py-10 lg:px-10 lg:py-7 md:px-8 md:py-7 sm:px-4 sm:py-5 flex flex-col gap-5">
                        {descriptionParagraphs.map((paragraph, index) => (
                            <p key={index} className="text-md xl:text-sm lg:text-[13px] md:text-[18px] sm:text-[14px] text-[#000]">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsDetails;