"use client"

import CooperationNewsBlock from '@/components/cooperationNewsBlock/component'
import CooperationPrograms from '@/components/cooperationPrograms/component'
import { API } from '@/requester'
import { useParams, useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import "./styles.css"

import ProgrammsMiniBox from '@/components/programmsMiniBox/component'
import { Pagination, useMediaQuery, useTheme } from '@mui/material'

const InternatonalCooperation = ({ dict }) => {
  const [news, setNews] = useState([])
  const [programms, setProgramms] = useState([])
  const [programsProps, setProgramsProps] = useState({
    search: '',
    page: 1,
    pageSize: 3,
    order: 1,
    count: 0,
  });
  const [contacts, setContacts] = useState([])

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));

  const capibilitiesStudents = [
    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textOne, image: "/cooperation-students-capibilities-icon.svg" },

    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textTwo, image: "/cooperation-students-capibilities-icon.svg" },

    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textThree, image: "/cooperation-students-capibilities-icon.svg" },

    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textFour, image: "/cooperation-students-capibilities-icon.svg" },

    { title: dict?.cooperation?.capibilitiesStudentsBlock?.texts?.textFive, image: "/cooperation-students-capibilities-icon.svg" }
  ]

  const { lang } = useParams()
  const router = useRouter()

  const handleChangePage = (e, page) => {
    setProgramsProps((prevValue) => ({
      ...prevValue,
      page: page,
    }));
  };

  const handleGetNews = useCallback(async () => {
    const response = await API.get("news/news")
    const data = await response.data.results
    setNews(data)
  }, [])


  const handleGetProgramms = useCallback(async () => {
    const response = await API.get(`education/courses-programms?page=${programsProps.page}`)
    const data = await response.data.results
    const countPage = response.data.count;
    setProgramms(data)
    setProgramsProps((prevValue) => ({ ...prevValue, count: countPage }));
  }, [lang, programsProps.page])

  const handleGetContacs = useCallback(async () => {
    const response = await API.get("abouts/contact-information")
    const data = await response.data.results
    setContacts(data)
  }, [])

  useEffect(() => {
    handleGetNews();
    handleGetProgramms()
    handleGetContacs()
  }, [handleGetNews, handleGetProgramms, handleGetContacs]);

  return (
    <div className='flex flex-col w-full px-[100px] md:px-[40px] sm:px-4 items-center h-auto min-h-screen bg-[#F1F3F4]'>
      <CooperationNewsBlock dict={dict} news={news} />
      <CooperationPrograms dict={dict} />

      <div className='w-full h-[500px] flex-wrap gap-5 my-10 flex justify-evenly items-center'>
        {programms && programms.length > 0 && programms?.map((programm, index) => (
          <div onClick={() => router.push(`/${lang}/international-cooperation/${programm.id}`)} key={index} className='bg-white cursor-pointer  gap-3 w-[400px] h-[400px] shadow-xl rounded-xl p-5 flex flex-col justify-evenly items-center'>
            <img className='w-full h-[200px]' src={programm?.image} alt={programm?.[`title_${lang}`]} />
            <p onClick={() => router.push(`/${lang}/international-cooperation/${programm.id}`)} className='text-[#000000] truncate hover:underline cursor-pointer w-full text-[26px] font-[700]'>{programm?.[`title_${lang}`]}</p>

            <button
              onClick={() => router.push(`/${lang}/international-cooperation/${programm.id}`)}
              className="cursor-pointer hover:underline pt-4"
            >
              {dict?.blogAndNews?.titles?.aboutButton}
            </button>
          </div>
        ))}
        <div
          className={'w-full flex justify-center items-center py-6'}
        >
          <Pagination
            variant="outlined"
            shape="rounded"
            onChange={handleChangePage}
            page={programsProps?.page}
            count={Math.ceil(programsProps.count / programsProps.pageSize) || 1}
            showFirstButton
            showLastButton
            siblingCount={2}
          />
        </div>
      </div>

      <div className='py-[50px] flex flex-col gap-[30px]'>
        <p className='text-[34px] md:text-[24px] sm:text-[16px] text-[#000] font-[900] text-center'>{dict?.cooperation?.capibilitiesStudentsBlock?.title}</p>

        <div className='w-full flex flex-wrap justify-evenly gap-[25px]'>{capibilitiesStudents?.map((item, index) => (
          <ProgrammsMiniBox item={item} index={index} />
        ))}</div>
      </div>

      <div className='w-full flex flex-col justify-center items-center gap-[30px] py-[50px]'>
        <p className='text-[34px] md:text-[24px] sm:text-[16px] text-[#000] font-[900] text-center'>{dict?.cooperation?.contacts?.title}</p>

        <div className='flex flex-col gap-7 shadow-xl p-7 bg-white'>
          {contacts?.map((contact, index) => (
            <div key={index} className='flex w-full md:flex-col sm:flex-col md:items-center sm:items-center gap-7 sm:py-[30px] flex-wrap justify-evenly items-center'>
              <img src={`/contact-info-icon-${index + 1}.svg`} className='w-[45px] h-[45px]' />

              <div className='flex flex-col justify-start w-[300px] sm:w-full'>
                <p className='font-[500] text-center text-[20px] text-[#000]'>{contact?.[`text_${lang}`]}</p>
              </div>

              <div className='flex flex-col justify-start w-[300px] sm:w-full'>
                <p className='font-[700] text-start md:text-center sm:text-center text-[24px] text-[#000]'>{contact?.[`title_${lang}`]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default InternatonalCooperation