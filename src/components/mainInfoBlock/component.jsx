'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

// Компонент для блока специальности
const SpecialityBlock = ({ href, image, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={href}
            className="group relative h-[500px] xl:h-[390px] lg:h-[350px] md:h-[350px] sm:h-[250px] w-[50%] md:w-full sm:w-full flex flex-col px-8 py-16 lg:py-12 md:py-9 sm:py-6 items-start cursor-pointer overflow-hidden transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Фоновое изображение */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 z-10"
                style={{
                    backgroundImage: `url(${image})`,
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                }}
            ></div>

            {/* Затемняющий градиент */}
            <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 z-20"
                style={{
                    background: isHovered
                        ? 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), transparent)'
                        : 'none',
                    opacity: isHovered ? 1 : 0,
                }}
            ></div>

            {/* Заголовок */}
            <h1 className="relative z-30 text-[26px] xl:text-[20px] lg:text-[16px] md:text-[26px] sm:text-[16px] text-white font-extrabold drop-shadow-lg">
                {title}
            </h1>

            {/* Всплывающий текст */}
            <p
                className="absolute bottom-[-100%] left-8 right-8 text-white text-md opacity-0 transition-all duration-500 group-hover:bottom-16 group-hover:opacity-100 z-30"
                style={{
                    bottom: isHovered ? '3rem' : '-100%',
                    opacity: isHovered ? 1 : 0,
                }}
            >
                {description}
            </p>
        </a>
    );
};

// Основной компонент
const MainInfoBlock = ({ dict }) => {
    const router = useRouter();
    const { lang } = useParams();

    return (
        <div className="flex flex-col">
            {/* Первый блок с заголовком и кнопкой */}
            <div className="flex justify-between">
                {/* Блоки специальностей */}
                <div className="flex flex-wrap justify-between">
                    <SpecialityBlock
                        href={`/${lang}/specialities/agronomy`}
                        image="/agronomy.jpg"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.two}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.two}
                    />
                    <SpecialityBlock
                        href={`/${lang}/specialities/veterinary`}
                        image="/veterinary.jpg"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.three}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.three}
                    />
                    <SpecialityBlock
                        href={`/${lang}/specialities/hydraulic_engineering`}
                        image="/hydrotech.webp"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.four}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.four}
                    />
                    <SpecialityBlock
                        href={`/${lang}/specialities/land_management`}
                        image="/zemleust.jpg"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.five}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.five}
                    />
                    <SpecialityBlock
                        href={`/${lang}/specialities/ichthyology`}
                        image="/ihtiologia.jpg"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.six}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.six}
                    />
                    <SpecialityBlock
                        href={`/${lang}/specialities/melioration`}
                        image="/meliorization.jpg"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.seven}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.seven}
                    />
                    <SpecialityBlock
                        href={`/${lang}/specialities/geodesy`}
                        image="/geodezia.jpg"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.eight}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.eight}
                    />
                    <SpecialityBlock
                        href={`/${lang}/specialities/informatics`}
                        image="/informatika.jpg"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.nine}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.nine}
                    />
                    <SpecialityBlock
                        href={`/${lang}/specialities/agricultural_entrepreneurship`}
                        image="/selhoz.jpg"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.ten}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.ten}
                    />
                    <SpecialityBlock
                        href={`/${lang}/specialities/ecology`}
                        image="/ecology.jpg"
                        title={dict?.mainPage?.mainInfoBlock?.titles?.eleven}
                        description={dict?.mainPage?.mainInfoBlock?.descriptions.eleven}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainInfoBlock;