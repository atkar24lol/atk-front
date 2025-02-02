"use client"

import React from 'react'
import "./styles.css"
import EducationValueCard from '@/components/educationValueCard/component'
import InfoMiniBox from '@/components/infoMiniBox/component'

const EducationActivity = ({ dict }) => {

  const mainRoutes = [
    {
      image: '/education-route-icon.svg',
      title: dict?.educationActivity?.routesLearning?.routeOne?.title,
      description: dict?.educationActivity?.routesLearning?.routeOne?.description,
      button: dict?.educationActivity?.routesLearning?.routeOne?.buttonText,
    },
    {
      image: '/education-route-icon.svg',
      title: dict?.educationActivity?.routesLearning?.routeTwo?.title,
      description: dict?.educationActivity?.routesLearning?.routeTwo?.description,
      button: dict?.educationActivity?.routesLearning?.routeTwo?.buttonText,
    },

    {
      image: '/education-route-icon.svg',
      title: dict?.educationActivity?.routesLearning?.routeThree?.title,
      description: dict?.educationActivity?.routesLearning?.routeThree?.description,
      button: dict?.educationActivity?.routesLearning?.routeThree?.buttonText,
    },

    {
      image: '/education-route-icon.svg',
      title: dict?.educationActivity?.routesLearning?.routeFour?.title,
      description: dict?.educationActivity?.routesLearning?.routeFour?.description,
      button: dict?.educationActivity?.routesLearning?.routeFour?.buttonText,
    },
  ]

  const colledgeValues = [{
    image: "/college-value-preview.png",
    title: dict?.educationActivity?.values?.valueOne?.title,
    descriptionOne: dict?.educationActivity?.values?.valueOne?.descriptionOne,
    descriptionTwo: dict?.educationActivity?.values?.valueOne?.descriptionTwo,
  },

  {
    image: "/college-value-preview.png",
    title: dict?.educationActivity?.values?.valueTwo?.title,
    descriptionOne: dict?.educationActivity?.values?.valueTwo?.descriptionOne,
    descriptionTwo: dict?.educationActivity?.values?.valueTwo?.descriptionTwo,
  },

  {
    image: "/college-value-preview.png",
    title: dict?.educationActivity?.values?.valueThree?.title,
    descriptionOne: dict?.educationActivity?.values?.valueThree?.descriptionOne,
    descriptionTwo: dict?.educationActivity?.values?.valueThree?.descriptionTwo,
  }]

  return (
    <div className='flex flex-col w-full justify-center items-center pt-[58px] md:pt-[30px] sm:pt-3 px-[125px] md:px=[70px] sm:px-5'>
      <div className='flex w-full xxl:flex-nowrap flex-wrap gap-[100px] xl:h-[275px] h-auto py-[18px] px-[20px] border-[1px] lg:justify-center rounded-[5px] border-[#0072BC]'>

        <div style={{
          backgroundImage: `url('/education-activity-preview.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }} className='xl:w-[412px] w-full xl:h-full h-[275px] relative flex justify-center items-center rounded-[5px]'>
          <div className='absolute right-[-54px] xl:top-[50%] xl:transform xl:translate-y-[-50%] bottom-[-54px] xl:left-[100%] left-[50%] transform translate-x-[-50%] rounded-lg bg-white shadow-lg w-[108px] h-[108px] flex justify-center items-center mission-box-icon'>
            <img src='/education-mission-icon.svg' alt='education' />
          </div>
        </div>


        <div className='flex flex-col justify-evenly lg:items-center gap-5 tracking-[1px] items-start h-full'>
          <p className='text-[#000] text-[34px] font-[800]'>{dict?.educationActivity?.mission?.title}</p>

          <span className='text-[#000] text-[14px] tracking-[1px] font-[400]'>{dict?.educationActivity?.mission?.descriptionOne}</span>

          <span className='text-[#000] text-[14px] tracking-[1px] font-[400]'>{dict?.educationActivity?.mission?.descriptionTwo}</span>
        </div>
      </div>

      <div className='pt-[100px] pb-[80px]  w-full flex flex-col'>
        <p className='font-[800] pb-[36px] text-[#000] md:text-[34px] sm:text-[20px] text-[40px] text-center'>{dict?.educationActivity?.values?.title}</p>
        <div className='flex w-full justify-evenly gap-[30px] flex-wrap'>
          {colledgeValues?.map((valueCollege, index) => (
            <EducationValueCard valueCollege={valueCollege} key={index} />
          ))}
        </div>
      </div>

      <div className='lg:w-full xl:w-full xxl:flex-nowrap max-w-[1440px] border-[1px] gap-5 border-[#0072BC] rounded-[5px] flex flex-wrap md:items-center sm:items-center p-5 justify-between'>
        <div className='flex flex-col justify-evenly xl:max-w-[500px] w-full'>
          <p className='font-[800] text-[34px] xl:text-start text-center text-[#000]'>{dict?.educationActivity?.strategicGoal?.title}</p>
          <span className='font-[400] text-[14px] leading-[22px] text-[#000]'>{dict?.educationActivity?.strategicGoal?.descriptionOne}</span>
          <span className='font-[400] text-[14px] leading-[22px] text-[#000]'>{dict?.educationActivity?.strategicGoal?.descriptionTwo}</span>
        </div>

        <div style={{
          backgroundImage: `url('/college-value-preview.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }} className='xl:w-[412px] w-full h-[275px] relative flex justify-center items-center rounded-[5px]'>
          <div className='md:hidden sm:hidden lg:hidden absolute xl:top-[50%] xl:transform xl:translate-y-[-50%] xl:left-0 left-0 transform translate-x-[-50%] rounded-lg bg-white shadow-lg w-[108px] h-[108px] flex justify-center items-center mission-box-icon'>
            <img src='/education-aim-icon.svg' alt='education' />
          </div>
        </div>
      </div>

      <div className='pt-[53px] pb-[55px]'>
        <div className='flex flex-wrap justify-between 
         lg:w-full xxl:w-full gap-10 xl:w-full max-w-[1000px] w-full min-h-[450px]'>
          <div className='flex border-[1px] border-[#0072BC] flex-col lg:items-center  p-[22px] xl:w-[322px] w-full'>
            <img src='/college-value-preview.png' className='w-full lg:w-[80%] h-[320px] pb-5' />
            <p className='font-[800] text-[34px] md:text-[24px] sm:text-[20px] text-[#000]'>{dict?.educationActivity?.routesLearning?.title}</p>
          </div>

          <div className='xl:w-[60%] w-full md:pt-4 sm:pt-4 justify-center flex-wrap sm:flex-col flex gap-7 items-center'>{mainRoutes?.map((item, index) => (
            <InfoMiniBox item={item} key={index} />
          ))}</div>
        </div>
      </div>
    </div>
  )
}

export default EducationActivity