"use client"

import CoursesAndPrograms from '@/components/coursesAndProgramms/component'
import {Pagination} from '@mui/material'
import React, {useCallback, useEffect, useState} from 'react'

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import AdditionalEducationAdvantages from '@/components/additionalEducationAdvantages/component';
import {API} from '@/requester';
import {useParams} from 'next/navigation';
import Breadcrumbs from "@/components/breadcrumbs/component";

const AdditionalEducation = ({dict}) => {
    const [courses, setCourses] = useState([])
    const [sertificates, setSertificates] = useState([]);

    const {lang} = useParams()

    const handleGetCourses = useCallback(async () => {
        const response = await API.get('education/courses-programms')
        const data = await response.data.results
        setCourses(data)
    }, [])

    const handleGetSertificates = useCallback(async () => {
        const response = await API.get(`abouts/sertificates/`);
        const data = await response.data.results;
        setSertificates(data);
    }, []);


    const allCourses = [
        {
            image: "/additional-education-preview.png",
            title: 'Название курса',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
            longer: '23 года',
            price: 2024
        },

        {
            image: "/additional-education-preview.png",
            title: 'Название курса',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
            longer: '23 года',
            price: 2024
        },

        {
            image: "/additional-education-preview.png",
            title: 'Название курса',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
            longer: '23 года',
            price: 2024
        }
    ]

    const advantages = [
        {
            image: "/additional-education-preview.png",
            icon: "/additional-advantages-one.svg",
            title: 'Название курса',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
        },

        {
            image: "/additional-education-preview.png",
            icon: "/additional-advantages-two.svg",
            title: 'Название курса',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
        },

        {
            image: "/additional-education-preview.png",
            icon: "/additional-advantages-three.svg",
            title: 'Название курса',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum risus nec massa ultrices maximus. Duis molestie ullamcorper sapien, sit amet ultrices urna dictum a. Fusce nec mattis urna, nec egestas ipsum',
        }
    ]

    useEffect(() => {
        handleGetCourses()
        handleGetSertificates()
    }, [handleGetCourses])

    // Формируем items для хлебных крошек
    const breadcrumbsItems = {
        ru: [
            {label: "Дополнительное обраование", href: `/${lang}/additional-education`},
        ],
        en: [
            {label: "Additional Education", href: `/${lang}/additional-education`},
        ],
        ky: [
            {label: "Кошумча билим берүү", href: `/${lang}/additional-education`},
        ],
    };

    return (
        <div className='w-full flex pt-[20px] pb-[32px] flex-col items-center justify-around bg-[#F6F6F6]'>
            {/*<div className='w-full flex flex-col justify-between items-center'>*/}
            {/*  <p className='text-[#000000] text-[34px] md:text-[28px] sm:text-[22px] font-[800] text-center'>{dict?.additionalEducation?.coursesAndPrograms?.title}</p>*/}

            {/*  <div className='w-full gap-4 md:gap-7 sm:gap-10 flex flex-wrap py-[50px] justify-evenly items-center'>*/}
            {/*    {courses?.map((course, index) => (*/}
            {/*      <CoursesAndPrograms course={course} dict={dict} key={index} />*/}
            {/*    ))}*/}
            {/*  </div>*/}

            {/*  <Pagination*/}
            {/*    variant="outlined"*/}
            {/*    shape="rounded"*/}
            {/*    // onChange={handleChangePage}*/}
            {/*    // page={tendersProps.page}*/}
            {/*    page={1}*/}
            {/*    // count={Math.ceil(tendersProps.count / tendersProps.pageSize) || 1}*/}
            {/*    count={5}*/}
            {/*    showFirstButton*/}
            {/*    showLastButton*/}
            {/*    siblingCount={2}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*
      <div className='w-full pt-[63px] flex flex-col justify-between items-center'>
        <p className='text-[#292C3D] text-[40px] font-[700] text-center'>{dict?.additionalEducation?.classSchedule?.title}</p>

        <div className='w-full flex py-[50px] gap-4 justify-evenly items-center'>
          <Swiper>
            {classSchedule?.map(({ title, file }, index) => (
              <SwiperSlide key={index}>
                <div className='w-[320px] rounded-md bg-[#D9D9D9] flex flex-col justify-between items-center p-2.5'>
                  <p className='text-[22px] font-[700] text-[#292C3D]'>{title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}

            {/*<div className='w-full flex flex-col pt-[63px] justify-between items-center'>*/}
            {/*  <p className='text-[#000000] text-[34px] md:text-[28px] sm:text-[22px] font-[800] text-center'>{dict?.additionalEducation?.advantages?.title}</p>*/}

            {/*  <div className='w-full gap-4 md:gap-7 sm:gap-10 flex flex-wrap py-[50px] justify-evenly items-center'>*/}
            {/*    {advantages?.map((advantage, index) => (*/}
            {/*      <AdditionalEducationAdvantages advantage={advantage} dict={dict} key={index} />*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div
                className='flex gap-5 lg:gap-2 sm:gap-2 w-[1320px] xl:w-[1120px] lg:w-[984px] md:w-[92%] sm:w-full justify-between py-5 lg:py-1 items-start sm:px-[16px] sm:pb-[60px] flex-wrap flex-col sm:pt-[5px] h-auto'>
                <Breadcrumbs items={breadcrumbsItems}/>
                <p className='text-[#000000] text-start text-[34px] md:text-[28px] sm:text-[22px] font-[600]'>{dict?.additionalEducation?.sertificates?.title}</p>

                <div className='w-full gap-4 md:gap-7 sm:gap-10 flex flex-wrap py-[50px] justify-between items-center'>
                    {sertificates?.map((sertificate, index) => (
                        <div key={index} className='w-[330px] h-[390px] flex flex-col justify-between items-start'>
                            <div
                                className='w-[330px] h-[390px] shadow-sm'
                                style={{
                                    backgroundImage: `url(${sertificate?.image})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center"
                                }}
                            >
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdditionalEducation

