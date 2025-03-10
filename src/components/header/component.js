"use client"

import {getDictionary} from '@/app/[lang]/dictionaries';
import {MenuRounded, Search} from '@mui/icons-material';
import {IconButton, TextField, useMediaQuery, useTheme, Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import {useParams, usePathname, useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';
import ModalHeader from '../modalHeader/component';
import './styles.css'

const Header = () => {
    const [language, setLanguage] = useState('ru');
    const [searchValue, setSearchValue] = useState('');
    const [dict, setDict] = useState('ru');
    const [modalHeader, setModalHeader] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };
    const {lang, value, newsId, programm} = useParams()
    const path = usePathname();
    const router = useRouter();
    const theme = useTheme();
    const isMdScreen = useMediaQuery("(max-width: 1024px)");
    const isSmScreen = useMediaQuery("(max-width: 600px)");

    let headerImage;
    let headerTitle;
    let headerDescription;

    if (path === `/${lang}` || path === '/' || path === '/ru') {
        if (isMdScreen) {
            headerImage = '/header-main-mobile.png';
            headerTitle = dict?.header?.previews?.titles?.main;
            headerDescription = dict?.header?.previews?.descriptions?.main;

        } else {
            headerImage = '/header-main.png';
            headerTitle = dict?.header?.previews?.titles?.main;
            headerDescription = dict?.header?.previews?.descriptions?.main;
        }
    }

    if (path === `/${lang}/news`) {
        (headerImage = `/blog-and-news-preview.png`), (headerTitle = dict?.header?.previews?.titles?.blogAndNews), (headerDescription = dict?.header?.previews?.descriptions?.blogAndNews)
    }
    if (path === `/${lang}/news/${newsId}`) {
        (headerImage = `/blog-and-news-preview.png`), (headerTitle = dict?.header?.previews?.titles?.blogAndNewsDetails), (headerDescription = dict?.header?.previews?.descriptions?.blogAndNewsDetails)
    }
    if (path === `/${lang}/blog-and-news`) {
        (headerImage = `/blog-and-news-preview.png`), (headerTitle = dict?.header?.previews?.titles?.blogAndNews), (headerDescription = dict?.header?.previews?.descriptions?.blogAndNews)
    }
    if (path === `/${lang}/education-activity`) {
        (headerImage = `/education-activity-preview.png`), (headerTitle = dict?.header?.previews?.titles?.educationActivity), (headerDescription = dict?.header?.previews?.descriptions?.educationActivity)
    }
    if (path === `/${lang}/electron-library`) {
        (headerImage = `/education-activity-preview.png`), (headerTitle = dict?.header?.previews?.titles?.electronLibrary), (headerDescription = dict?.header?.previews?.descriptions?.electronLibrary)
    }
    if (path === `/${lang}/gallary`) {
        (headerImage = `/education-activity-preview.png`), (headerTitle = dict?.header?.previews?.titles?.gallary), (headerDescription = dict?.header?.previews?.descriptions?.gallary)
    }
    if (path === `/${lang}/teachers`) {
        (headerImage = `/teachers-preview.png`), (headerTitle = dict?.header?.previews?.titles?.teachers), (headerDescription = dict?.header?.previews?.descriptions?.teachers)
    }
    if (path === `/${lang}/contacts`) {
        (headerImage = `/contacts-preview.png`), (headerTitle = dict?.header?.previews?.titles?.contacts), (headerDescription = dict?.header?.previews?.descriptions?.contacts)
    }
    if (path === `/${lang}/entrants`) {
        (headerImage = `/contacts-preview.png`), (headerTitle = dict?.header?.previews?.titles?.entrants), (headerDescription = dict?.header?.previews?.descriptions?.entrants)
    }
    if (path === `/${lang}/about-teachers`) {
        (headerImage = `/contacts-preview.png`), (headerTitle = dict?.header?.previews?.titles?.aboutTeachers), (headerDescription = dict?.header?.previews?.descriptions?.aboutTeachers)
    }
    if (path === `/${lang}/additional-education`) {
        (headerImage = `/additional-education-preview.png`), (headerTitle = dict?.header?.previews?.titles?.additionalEducation), (headerDescription = dict?.header?.previews?.descriptions?.additionalEducation)
    }
    if (path === `/${lang}/search/${value}`) {
        (headerImage = `/additional-education-preview.png`), (headerTitle = dict?.header?.previews?.titles?.searchResult), (headerDescription = dict?.header?.previews?.descriptions?.searchResult)
    }
    if (path === `/${lang}/international-cooperation` || path === `/${lang}/international-cooperation/${programm}`) {
        (headerImage = `/additional-education-preview.png`), (headerTitle = dict?.header?.previews?.titles?.internationalCooperation), (headerDescription = dict?.header?.previews?.descriptions?.internationalCooperation)
    }
    if (path === `/${lang}/feedback`) {
        (headerImage = `/additional-education-preview.png`), (headerTitle = dict?.header?.previews?.titles?.internationalCooperation), (headerDescription = dict?.header?.previews?.descriptions?.internationalCooperation)
    }
    if (path === `/${lang}/specialities`) {
        (headerImage = `/additional-education-preview.png`), (headerTitle = dict?.header?.previews?.titles?.specialities), (headerDescription = dict?.header?.previews?.descriptions?.specialities)
    }
    if (path === `/${lang}/specialities/agronomy`) {
        (headerImage = `/agronomy.jpg`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.two), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.two)
    }
    if (path === `/${lang}/specialities/veterinary`) {
        (headerImage = `/veterinary.jpg`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.three), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.three)
    }
    if (path === `/${lang}/specialities/hydraulic_engineering`) {
        (headerImage = `/hydrotech.webp`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.four), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.four)
    }
    if (path === `/${lang}/specialities/land_management`) {
        (headerImage = `/zemleust.jpg`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.five), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.five)
    }
    if (path === `/${lang}/specialities/ichthyology`) {
        (headerImage = `/ihtiologia.jpg`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.six), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.six)
    }
    if (path === `/${lang}/specialities/melioration`) {
        (headerImage = `/meliorization.jpg`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.seven), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.seven)
    }
    if (path === `/${lang}/specialities/geodesy`) {
        (headerImage = `/geodezia.jpg`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.eight), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.eight)
    }
    if (path === `/${lang}/specialities/informatics`) {
        (headerImage = `/informatika.jpg`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.nine), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.nine)
    }
    if (path === `/${lang}/specialities/agricultural_entrepreneurship`) {
        (headerImage = `/selhoz.jpg`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.ten), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.ten)
    }
    if (path === `/${lang}/specialities/ecology`) {
        (headerImage = `/ecology.jpg`), (headerTitle = dict?.mainPage?.mainInfoBlock?.titles?.eleven), (headerDescription = dict?.mainPage?.mainInfoBlock?.descriptions?.eleven)
    }

    const headerList = [
        {
            title: dict?.header?.list?.news, link: `/${lang}/news`
        },
        {
            title: dict?.header?.list?.educationalActivity, link: `/${lang}/education-activity`
        },
        {
            title: dict?.header?.list?.gallary, link: `/${lang}/gallary`
        },
        {
            title: dict?.header?.list?.entrants, link: `/${lang}/entrants`
        },
        {
            title: dict?.header?.list?.teachers, link: `/${lang}/teachers`
        },]

    const headerList2 = [
        {
            title: dict?.header?.list?.additionalEducation, link: `/${lang}/additional-education`,
        },

        {
            title: dict?.header?.list?.aboutTeachers, link: `/${lang}/about-teachers`,
        },

        {
            title: dict?.header?.list?.rewards, link: `/${lang}/awards`,
        },

        {
            title: dict?.header?.list?.internationalCooperation, link: `/${lang}/international-cooperation`,
        },

        {
            title: dict?.header?.list?.contacts, link: `/${lang}/contacts`
        },]

    const languages = [{selectedLang: 'KG', value: 'ky'}, {selectedLang: 'RU', value: 'ru'}, {
        selectedLang: 'EN', value: 'en'
    },];

    const handleGetLanguage = async () => {
        const dict = await getDictionary(language);
        setDict(dict);
    };

    const toggleModalHeader = (value) => {
        setModalHeader(value);
    };

    const handleChangeValue = (e) => {
        setSearchValue(e.target.value);
    };

    const handleChangeLanguage = (value) => {
        setLanguage(value);
        const trimmedPath = path.substring(3);
        router.push(`/${value}${trimmedPath}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchValue !== '' && searchValue !== 'undefined') {
            router.push(`/${lang}/search/${searchValue}`)
        }
    }

    useEffect(() => {
        handleGetLanguage();
        const trimmedPath = path.substring(3);
        if (language && language !== 'undefined') {
            router.push(`/${language}${trimmedPath}`);
        } else {
            router.push('/ru');
        }
    }, [language]);

    return (<div className='w-full'>
        {/*1*/}
        <div
            className="w-full h-[60px] xl:h-[50px] lg:h-[45px] md:h-[80px] sm:h-[45px] bg-[#0084DA] flex justify-between items-center px-[80px] xl:px-[40px] lg:px-[20px] md:px-[20px] sm:px-[20px]">
            <div className='max-w-[1280px] mx-auto flex justify-between w-full gap-3'>
                <div
                    className='flex gap-[1.9rem] xl:gap-[1.5rem] lg:gap-[1.25rem] md:gap-0 justify-between items-center'>
                    <img onClick={() => router.push(`/${lang}/contacts`)} src='/header-phone.svg'
                         alt='header-phone' className='h-5 xl:h-4 lg:h-3.5 cursor-pointer md:hidden sm:hidden'/>
                    <img onClick={() => router.push(`#map`)} src='/header-point.svg'
                         alt='header-point' className='h-5 xl:h-4 lg:h-3.5 cursor-pointer md:hidden sm:hidden'/>
                    <img onClick={() => router.push(`http://cdo.atk.kg/`)} src='/logo-dark.png'
                         alt='e-bilim' className='h-6 xl:h-5 lg:h-4 md:h-7 sm:h-4 cursor-pointer'/>
                </div>

                <div className='flex gap-3 xl:gap-2 items-center'>
                    <button
                        onClick={() => router.push(`/${lang}/contacts#form`)}
                        className="text-[#fff] text-[0.75rem] xl:text-[0.685rem] lg:text-[0.625rem] md:hidden sm:hidden font-bold pr-12 xl:pr-10">
                        {dict?.callback}
                    </button>
                    <div
                        style={{display: 'flex', alignItems: 'center'}}
                    >
                        {/* Иконка поиска */}
                        <IconButton
                            onClick={toggleSearch} sx={{padding: '0.25rem'}}>
                            <Search sx={{color: '#fff', width: '1.5rem', height: '1.5rem'}}/>
                        </IconButton>

                        {/* Поле поиска */}
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                width: isSearchVisible ? '10rem' : '0',
                                opacity: isSearchVisible ? 1 : 0,
                                transition: 'width 0.3s ease, opacity 0.3s ease',
                                overflow: 'hidden',
                            }}
                        >
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder={String(dict?.header?.searchField)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        fontFamily: 'Montserrat, sans-serif',
                                        backgroundColor: 'transparent',
                                        borderRadius: '1.5rem',
                                        border: '1px solid #ccc',
                                    }, '& .MuiInputBase-input': {
                                        padding: '0.3rem 1rem', fontSize: '0.875rem', color: '#fff',
                                    }, '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                }}
                            />
                        </form>
                    </div>


                    <FormControl
                        sx={{minWidth: 60, display: isSmScreen ? "none" : "block"}}>
                        <Select
                            value={lang}
                            onChange={(e) => handleChangeLanguage(e.target.value)}
                            sx={{
                                color: '#fff', '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none', // Убираем границу
                                }, '& .MuiSvgIcon-root': {
                                    color: '#fff', // Цвет стрелки
                                }, backgroundColor: 'transparent', // Прозрачный фон
                                boxShadow: 'none', // Убираем тень
                                '&:hover': {
                                    backgroundColor: 'transparent', // Прозрачный фон при наведении
                                }, '& .MuiSelect-select': {
                                    paddingRight: '24px', // Уменьшил отступ для стрелки
                                    paddingLeft: '8px', // Уменьшил отступ слева
                                    fontWeight: '700', // Жирный текст
                                    fontSize: '0.875rem', // Уменьшил размер текста
                                    fontFamily: 'Montserrat, sans-serif',
                                },
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        borderRadius: '4px',
                                        marginTop: '8px',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Тень для выпадающего меню
                                        backgroundColor: '#fff', // Белый фон для выпадающего меню

                                    },
                                },
                            }}
                            IconComponent={() => (
                                <div style={{position: 'absolute', right: '4px', pointerEvents: 'none'}}>
                                    <svg
                                        width="20" // Уменьшил размер стрелки
                                        height="20" // Уменьшил размер стрелки
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 10l5 5 5-5"
                                            stroke="#fff" // Цвет стрелки
                                            strokeWidth="3" // Уменьшил толщину стрелки
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>)}
                        >
                            {languages.map(({selectedLang, value}) => (<MenuItem
                                key={value}
                                value={value}
                                sx={{
                                    fontSize: '0.875rem', // Уменьшил размер текста в выпадающем меню
                                    fontWeight: '700', // Жирный текст
                                    color: '#000', // Цвет текста
                                    fontFamily: 'Montserrat, sans-serif',
                                }}
                            >
                                {selectedLang}
                            </MenuItem>))}
                        </Select>
                    </FormControl>
                </div>
            </div>


        </div>

        {/*2*/}
        <div
            className='w-full px-[80px] xl:px-[40px] lg:px-[20px] md:px-[20px] sm:px-[20px] flex justify-center self-center sm:justify-between sm:px-[20px]'>
            <div className="w-full max-w-[1280px] flex justify-between items-center">
                <div className='flex gap-[10px] xl:gap-[10px] items-center py-[22px] lg:py-[20px] sm:py-[10px]'>
                    <img onClick={() => router.push(`/${lang}/`)} src='/atk-logo.png'
                         className='w-[80px] h-[80px] xl:w-[70px] xl:h-[70px] lg:w-[65px] lg:h-[65px] md:w-[80px] md:h-[80px] sm:w-[45.71px] sm:h-[45.71px] hover:cursor-pointer'/>
                    <span
                        className='text-[15px] xl:text-[13px] lg:text-[11px] md:text-[14px] sm:text-[9.14px] text-[#000] font-[600] text leading-[20px] sm:leading-3 md:leading-[20px]'
                        dangerouslySetInnerHTML={{__html: dict?.header?.slogan}}>
                    </span>
                </div>

                <div className="flex flex-col justify-between items-end gap-9">
                    <div
                        className='flex justify-between items-start flex-wrap gap-10 xl:gap-8 lg:gap-7 lg:pt-4 md:hidden sm:hidden'>
                        {headerList2?.map(({title, link}) => (<a href={link} key={link}
                                                                 className='text-[11px] xl:text-[10px] lg:text-[9px] text-[#838383] uppercase tracking-[1px] font-[600]'>{title}</a>))}
                    </div>
                    <div
                        className='flex justify-between items-end flex-wrap gap-10 xl:gap-8 lg:gap-7 lg:pb-3.5 md:hidden sm:hidden'>
                        {headerList?.map(({title, link}) => (<a href={link} key={link}
                                                                className='text-[14px] xl:text-[13px] lg:text-[12px] text-[#000] font-normal'>{title}</a>))}
                    </div>
                </div>
            </div>


            <IconButton onClick={() => toggleModalHeader(true)}
                        sx={{display: isMdScreen ? "inline-block" : "none", padding: '0'}}>
                <MenuRounded fontSize='large' htmlColor='#0084DA'/>
            </IconButton>
        </div>

        {/*3*/}
        <div
            className={`${path === `/${lang}/site-map` || path === `/${lang}/contacts` || path === `/${lang}/news/${newsId}` || path === `/${lang}/international-cooperation/${programm}` ? 'hidden' : 'flex'} header w-full overflow-y-hidden p-[80px] xl:px-[40px] lg:px-[20px] md:px-[20px] sm:px-[20px] pt-[100px] xl:pt-[70px] lg:pt-[50px] md:pt-[40px] sm:pt-[20px] pb-[120px] xl:pb-[100px] lg:pb-[80px] md:pb-[20px] sm:pb-[20px] md:min-h-[460px] sm:min-h-[250px] flex flex-col gap-[2.5px] md:gap-4 sm:gap-1 justify-start items-center md:items-start sm:items-start relative`}>
            <div
                className="bg-cover bg-center bg-no-repeat  shadow-xl"
                style={{
                    backgroundImage: `url(${headerImage})`,
                    position: 'absolute',
                    zIndex: '-1',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}>
            </div>

            <p className='max-w-[1280px] font-montserratTitle opacity-[100] font-[800] text-[#ffffff] text-[40px] xl:text-[36px] lg:text-[32px] md:text-[40px] sm:text-[24px]'>
                {headerTitle}
            </p>

            <span
                className='max-w-[1280px] font-montserratTitle font-[400] text-[#ffffff] text-[14px] xl:text-[13px] lg:text-[12px] md:text-[20px] sm:text-[13px] text-center md:text-start sm:text-start'>
        {headerDescription}
    </span>
        </div>

        <ModalHeader
            dict={dict}
            open={modalHeader}
            onClose={() => toggleModalHeader(false)}
            language={language}
            setLanguage={setLanguage}
        />
    </div>);
};

export default Header;