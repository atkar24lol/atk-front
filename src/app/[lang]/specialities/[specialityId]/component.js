"use client"

import React from 'react';
import {useParams} from 'next/navigation';
import Breadcrumbs from "@/components/breadcrumbs/component";

const SpecialityDetails = ({dict}) => {
    const {lang, specialityId} = useParams();

    // Получаем данные о специальности из словаря
    const specialityTitles = dict?.specialities?.titles;
    const specialityDescriptions = dict?.specialities?.descriptions;

    // Маппинг ID специальностей на ключи в словаре
    const specialityMapping = {
        agronomy: 'two',
        veterinary: 'three',
        hydraulic_engineering: 'four',
        land_management: 'five',
        ichthyology: 'six',
        melioration: 'seven',
        geodesy: 'eight',
        informatics: 'nine',
        agricultural_entrepreneurship: 'ten',
        ecology: 'eleven',
    };

    // Получаем ключ для текущей специальности
    const specialityKey = specialityMapping[specialityId];

    // Если специальность не найдена, показываем сообщение
    if (!specialityKey || !specialityTitles || !specialityDescriptions) {
        return (
            <div className="w-full flex pt-[20px] pb-[64px] flex-col justify-around">
                <p className="text-[40px] md:text-[30px] sm:text-[22px] font-[700] tracking-[2px] text-[#000]">
                    Специальность не найдена
                </p>
            </div>
        );
    }

    // Разделяем текст на параграфы
    const descriptionParagraphs = specialityDescriptions[specialityKey].split('\n');

    // Формируем items для хлебных крошек
    const breadcrumbsItems = {
        ru: [
            {label: "Специальности", href: `/${lang}/specialities`},
            {label: specialityTitles[specialityKey], href: `/${lang}/specialities/${specialityId}`},
        ],
        en: [
            {label: "Specialities", href: `/${lang}/specialities`},
            {label: specialityTitles[specialityKey], href: `/${lang}/specialities/${specialityId}`},
        ],
        ky: [
            {label: "Адистиктер", href: `/${lang}/specialities`},
            {label: specialityTitles[specialityKey], href: `/${lang}/specialities/${specialityId}`},
        ],
    };

    return (
        <div className="w-full flex pt-[20px] pb-[32px] flex-col items-center justify-around bg-[#F6F6F6]">
            <div
                className={'flex gap-5 lg:gap-2 sm:gap-2 w-[1320px] xl:w-[1120px] lg:w-[984px] md:w-[92%] sm:w-full justify-between py-5 lg:py-1 items-start sm:px-[16px] sm:pb-[60px] flex-wrap flex-col sm:pt-[5px] h-auto'}>
                <Breadcrumbs items={breadcrumbsItems}/>
                <div className="bg-[#fff] w-full px-12 py-10 xl:px-10 xl:py-10 lg:px-10 lg:py-7 md:px-8 md:py-7 sm:px-4 sm:py-5 flex flex-col gap-5">
                    <span className="text-md xl:text-sm lg:text-[13px] md:text-[18px] sm:text-[14px] text-[#000]">
                        {descriptionParagraphs.map((paragraph, index) => (
                            <p key={index} className="mb-5">{paragraph}</p>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SpecialityDetails;