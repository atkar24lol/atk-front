"use client";

import { API } from "@/requester";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Pagination, useMediaQuery, useTheme } from "@mui/material";
import Breadcrumbs from "@/components/breadcrumbs/component";
import "./styles.css";

const InternatonalCooperation = ({ dict }) => {
    const [programs, setPrograms] = useState([]);
    const [programsProps, setProgramsProps] = useState({
        page: 1,
        pageSize: 3,
        count: 0,
    });

    const { lang } = useParams();
    const router = useRouter();
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

    // Функция для обработки текста
    const renderTextWithFormatting = (text) => {
        if (!text) return null;

        return text.split("\n\n").map((block, blockIndex) => {
            // Обработка заголовков любого уровня
            const headerMatch = block.match(/^(#{1,6})\s(.+)/);
            if (headerMatch) {
                const level = headerMatch[1].length; // Количество # определяет уровень заголовка
                const content = headerMatch[2].trim(); // Текст заголовка
                const Tag = `h${level}`; // Динамический тег заголовка
                return React.createElement(
                    Tag,
                    {
                        key: blockIndex,
                        className: `my-4 font-bold ${
                            level === 1
                                ? "text-3xl"
                                : level === 2
                                    ? "text-2xl"
                                    : level === 3
                                        ? "text-xl"
                                        : "text-lg"
                        }`,
                    },
                    content
                );
            }

            // Обработка маркированных списков
            if (block.startsWith("* ") || block.startsWith("- ")) {
                const items = block.split("\n").map((line) => line.replace(/^[\*\-]\s*/, "").trim());
                return (
                    <ul key={blockIndex} className="list-disc list-inside my-4">
                        {items.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        ))}
                    </ul>
                );
            }

            // Обработка нумерованных списков
            if (block.match(/^\d+\./)) {
                const items = block.split("\n").map((line) => line.replace(/^\d+\./, "").trim());
                return (
                    <ol key={blockIndex} className="list-decimal list-inside my-4">
                        {items.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                        ))}
                    </ol>
                );
            }

            // Обычный текст или жирный текст
            return (
                <p key={blockIndex} className="my-4" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            );
        });
    };

        const handleGetPrograms = useCallback(async () => {
        const response = await API.get(`education/courses-programms?page=${programsProps.page}`);
        const data = await response.data.results;
        const count = response.data.count;
        setPrograms(data);
        setProgramsProps((prev) => ({ ...prev, count }));
    }, [programsProps.page]);

    // Обработчик изменения страницы
    const handleChangePage = (e, page) => {
        setProgramsProps((prev) => ({ ...prev, page }));
    };

    useEffect(() => {
        handleGetPrograms();
    }, [handleGetPrograms]);

    // Формируем items для хлебных крошек
    const breadcrumbsItems = {
        ru: [
            {label: "Международное сотрудничество", href: `/${lang}/specialities`},
        ],
        en: [
            {label: "International cooperation", href: `/${lang}/specialities`},
        ],
        ky: [
            {label: "Международное сотрудничество", href: `/${lang}/specialities`},
        ],
    };

    return (
        <div className="w-full flex pt-[20px] pb-[32px] flex-col items-center justify-around bg-[#F6F6F6]">
            {/* Основной текст с форматированием */}
            <div className="flex gap-5 lg:gap-2 sm:gap-2 w-[1320px] xl:w-[1120px] lg:w-[984px] md:w-[92%] sm:w-full justify-between py-5 lg:py-1 items-start sm:px-[16px] sm:pb-[60px] flex-wrap flex-col sm:pt-[5px] h-auto">
                <Breadcrumbs items={breadcrumbsItems}/>
                <div className="bg-[#fff] w-full px-12 py-10 xl:px-10 xl:py-10 lg:px-10 lg:py-7 md:px-8 md:py-7 sm:px-4 sm:py-5 flex flex-col">
                    {renderTextWithFormatting(dict?.cooperation?.maintext)}
                </div>
            </div>

            {/* Список программ */}
            <div className="w-full h-[500px] flex-wrap gap-5 my-10 flex justify-evenly items-center">
                {programs.map((program) => (
                    <div
                        key={program.id}
                        onClick={() => router.push(`/${lang}/international-cooperation/${program.id}`)}
                        className="bg-white cursor-pointer gap-3 w-[400px] h-[400px] shadow-xl rounded-xl p-5 flex flex-col justify-evenly items-start"
                    >
                        <img
                            className="w-full h-[200px] object-cover"
                            src={program?.image}
                            alt={program?.[`title_${lang}`]}
                        />
                        <p className="text-[#000000] truncate hover:underline cursor-pointer w-full text-[20px] font-[700]">
                            {program?.[`title_${lang}`]}
                        </p>
                        <button
                            onClick={() => router.push(`/${lang}/international-cooperation/${program.id}`)}
                            className="cursor-pointer hover:underline pt-4"
                        >
                            {dict?.blogAndNews?.titles?.aboutButton}
                        </button>
                    </div>
                ))}

                {/* Пагинация */}
                <div className="w-full flex justify-center items-center py-6">
                    <Pagination
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChangePage}
                        page={programsProps.page}
                        count={Math.ceil(programsProps.count / programsProps.pageSize) || 1}
                        showFirstButton
                        showLastButton
                        siblingCount={2}
                    />
                </div>
            </div>
        </div>
    );
};

export default InternatonalCooperation;