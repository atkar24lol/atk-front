"use client"

import {getDictionary} from '@/app/[lang]/dictionaries';
import {useParams, useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';

const Footer = () => {
    const [dict, setDict] = useState('ru');
    const [footerLink, setFooterLink] = useState();

    const {lang} = useParams()
    const router = useRouter()

    const handleGetLanguage = async () => {
        const dict = await getDictionary(lang);
        setDict(dict);
    };

    const footerListOne = [
        {
            name: dict?.header?.list?.news,
            link: `/${lang}/news`
        }, {
            name: dict?.footer?.list?.additionalEducation,
            link: `/${lang}/additional-education`
        }, {
            name: dict?.footer?.list?.educationalActivity,
            link: `/${lang}/education-activity`
        }, {
            name: dict?.footer?.list?.multimedia,
            link: `/${lang}/gallary`
        }]

    const footerListTwo = [
        {
            name: dict?.footer?.list?.informationForTeachers,
            link: `/${lang}/teachers`
        }, {
            name: dict?.footer?.list?.aboutTeachers,
            link: `/${lang}/about-teachers`
        }, {
            name: dict?.footer?.list?.toApplicants,
            link: `/${lang}/entrants`
        }, {
            name: dict?.footer?.list?.electronicLibrary,
            link: `/${lang}/electron-library`
        },]

    const footerListThree = [
        {
            name: dict?.footer?.list?.internationalCooperation,
            link: `/${lang}/international-cooperation`
        }, {
            name: dict?.footer?.list?.siteMap,
            link: `/${lang}/site-map`
        }, {
            name: dict?.footer?.list?.contactInformation,
            link: `/${lang}/contacts`
        }, {
            name: dict?.footer?.list?.rewards,
            link: `/${lang}/awards`
        },]

    useEffect(() => {
        handleGetLanguage();
    }, [lang]);

    return (
        <div className='w-full bg-[#0084DA] flex flex-col gap-12'>
            {/*1*/}
            <div
                className='w-full px-[80px] xl:px-[40px] lg:px-[20px] md:px-[20px] sm:px-[20px] pt-[40px] sm:pb-0 sm:pt-[10px] flex justify-center self-center sm:justify-between'>
                <div className="w-full max-w-[1280px] flex justify-between items-center">
                    <div className='flex gap-[10px] xl:gap-[10px] items-center lg:py-[20px] sm:py-[10px]'>
                        <img onClick={() => router.push(`/${lang}/`)} src='/atk-logo-footer.png'
                             className='w-[80px] h-[80px] xl:w-[70px] xl:h-[70px] lg:w-[65px] lg:h-[65px] md:w-[80px] md:h-[80px] sm:w-[50px] sm:h-[50px] hover:cursor-pointer'/>
                        <span
                            className='text-[20px] xl:text-[13px] lg:text-[13px] md:text-[16px] sm:text-[14px] text-[#fff] font-[600] text leading-[30px] sm:leading-5 md:leading-7'
                            dangerouslySetInnerHTML={{__html: dict?.footer?.slogan}}>
                    </span>
                    </div>
                </div>
            </div>

            {/*2*/}
            <div
                className='w-full px-[80px] xl:px-[40px] lg:px-[20px] md:px-[20px] sm:px-[20px] flex justify-center self-center sm:justify-between'>
                <div className="w-full max-w-[1280px] flex justify-between items-center">
                    <div className='flex gap-[80px] justify-between md:justify-center sm:justify-center flex-wrap'>
                        <div
                            className='flex gap-[80px] md:gap-[50px] sm:gap-[50px] flex-wrap sm:justify-start'>
                            <div
                                className='flex md:px-4 flex-col gap-[10px] cursor-pointer'>{footerListOne?.map(({
                                                                                                                             name,
                                                                                                                             link
                                                                                                                         }, index) => (
                                <p key={index} onClick={() => router.push(link)}
                                   className='font-[400] text-[16px] md:text-[16px] sm:text-[14px] text-[#fff] hover:underline'>{name}</p>))}
                            </div>

                            <div
                                className='flex md:px-4 flex-col gap-[10px] cursor-pointer'>{footerListTwo?.map(({
                                                                                                                             name,
                                                                                                                             link
                                                                                                                         }) => (
                                <p onClick={() => router.push(link)} key={link}
                                   className='font-[400] text-[16px] md:text-[16px] sm:text-[14px] text-[#fff] hover:underline'>{name}</p>))}
                            </div>

                            <div
                                className='flex md:px-4 flex-col gap-[10px] cursor-pointer'>{footerListThree?.map(({
                                                                                                                               name,
                                                                                                                               link
                                                                                                                           }) => (
                                <p onClick={() => router.push(link)} key={link}
                                   className='font-[400] text-[16px] md:text-[16px] sm:text-[14px] text-[#fff] hover:underline'>{name}</p>))}
                            </div>

                            <div className='flex flex-col justify-between items-center sm:items-start gap-[11px]'>
                                <img onClick={() => router.push(`http://cdo.atk.kg/`)} src='/logo-dark.png'
                                     className='w-[150px] cursor-pointer sm:w-[100px]'/>
                                <p onClick={() => router.push(`http://cdo.atk.kg/`)}
                                   className='cursor-pointer font-[400] text-[14px] md:text-[16px] sm:text-[12px] text-[#fff]'>{dict?.footer?.list?.educationalPortal}</p>
                                <p className='font-[400] text-[16px] md:text-[16px] sm:text-[12px] text-[#fff]'>{dict?.footer?.list?.address}</p>
                                <p className='font-[400] text-[16px] md:text-[16px] sm:text-[12px] text-[#fff]'>{dict?.footer?.list?.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*3*/}
            <div
                className='w-full px-[80px] xl:px-[40px] lg:px-[20px] md:px-[20px] sm:px-[20px] pb-[40px] flex justify-center self-center sm:justify-between'>
                <div className="w-full max-w-[1280px] flex justify-end items-center">
                    <div className='flex justify-around items-center w-auto gap-5 min-w-[100px] sm:justify-between'>
                        <a href='https://www.instagram.com/atkbishkek/'>
                            <img src='/insta-footer-icon.svg'
                                 className='w-[32px] h-[32px] sm:w-[25px] sm:h-[25px] transition-[1s] hover:transition-[1s] cursor-pointer hover:text-[#922c81] fill-[#922c81]'/>
                        </a>

                        <a href='https://www.facebook.com/profile.php?id=100080395770610&mibextid=LQQJ4d'>
                            <img src='/facebook-footer-icon.svg'
                                 className='w-[32px] h-[32px] sm:w-[25px] sm:h-[25px] transition-[1s] hover:transition-[1s] cursor-pointer hover:text-[#922c81] fill-[#922c81]'/>
                        </a>

                        <a href='https://www.tiktok.com/@atkbishkek?_t=8oaQnN8uggK&_r=1'>
                            <img src='/tiktok-footer-icon.svg'
                                 className='w-[32px] h-[32px] sm:w-[25px] sm:h-[25px] transition-[1s] hover:transition-[1s] cursor-pointer hover:text-[#922c81] fill-[#922c81]'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
