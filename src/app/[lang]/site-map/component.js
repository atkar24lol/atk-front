"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const SiteMap = ({ dict }) => {

  const { lang } = useParams()

  const siteMapAtk = [
    {
      name: dict?.siteMap?.main, link: `/${lang}/blog-and-news`
    },
    { name: dict?.siteMap?.content, link: `/${lang}/` },
    { name: dict?.siteMap?.multimedia, link: `/${lang}/` },
    { name: dict?.siteMap?.contacts, link: `/${lang}/` },
    { name: dict?.siteMap?.feedback, link: `/${lang}/` },
    { name: dict?.siteMap?.entrants, link: `/${lang}/` },
  ]

  const siteMapInvite = [
    { name: dict?.siteMap?.entrants, link: `/${lang}/` },
    { name: dict?.siteMap?.students, link: `/${lang}/` },
  ]

  const siteMapEducationAtk = [
    {
      name: dict?.siteMap?.main, link: `/${lang}/blog-and-news`
    },
    { name: dict?.siteMap?.educationActivity, link: `/${lang}/` },
    { name: dict?.siteMap?.gallary, link: `/${lang}/` },
    { name: dict?.siteMap?.aboutTeachers, link: `/${lang}/` },
    { name: dict?.siteMap?.blogAndNews, link: `/${lang}/` },
    { name: dict?.siteMap?.questionParrents, link: `/${lang}/` },
    { name: dict?.siteMap?.teachers, link: `/${lang}/` },
  ]

  return (
    <div className='flex flex-col py-7 px-[80px] md:px-[40px] sm:px-4 gap-[20px]'>
      <div className='flex flex-col py-7 gap-[15px]'>
        <p className='text-[#0079C1] text-[24px] font-[700] tracking-[1px]'>{dict?.siteMap?.atk}</p>
        {siteMapAtk?.map(({ name, link }) => (
          <li className='text-[#042442] cursor-pointer hover:underline hover:text-[#0079C1] text-[18px] sm:text-[14px] font-[700] tracking-[0.5px]'>
            <a href={link}></a>{name}</li>
        ))}
      </div>

      <div className='flex flex-col py-7 gap-[15px]'>
        <p className='text-[#0079C1] text-[24px] font-[700] tracking-[1px]'>{dict?.siteMap?.invite}</p>
        {siteMapInvite?.map(({ name, link }) => (
          <li className='text-[#042442] cursor-pointer hover:underline hover:text-[#0079C1] text-[18px] sm:text-[14px] font-[700] tracking-[0.5px]'>
            <a href={link}></a>{name}</li>
        ))}
      </div>

      <div className='flex flex-col py-7 gap-[15px]'>
        <p className='text-[#0079C1] text-[24px] font-[700] tracking-[1px]'>{dict?.siteMap?.educationWithAtk}</p>
        {siteMapEducationAtk?.map(({ name, link }) => (
          <li className='text-[#042442] cursor-pointer hover:underline hover:text-[#0079C1] text-[18px] sm:text-[14px] font-[700] tracking-[0.5px]'>
            <a href={link}></a>{name}</li>
        ))}
      </div>
    </div>

  )
}

export default SiteMap