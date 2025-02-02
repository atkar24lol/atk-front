"use client"
import AboutTeacherBlock from '@/components/aboutTeacherBlock/components'
import { API } from '@/requester';
import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'

const AboutTeachers = ({ dict }) => {

  const [teachers, setTeachers] = useState([]);
  const { lang } = useParams()

  const handleGetTeachers = useCallback(async () => {
    const response = await API.get('abouts/lecturers/');
    const data = await response.data.results;
    setTeachers(data);
  }, [lang]);

  useEffect(() => {
    handleGetTeachers();
  }, []);
  return (
    <div className='flex w-full flex-col flex-wrap py-[70px] gap-10 pb-[80px] px-[80px] md:px-[40px] sm:px-4'>
      {teachers?.map((teacher, index) => (
        <AboutTeacherBlock dict={dict} teacher={teacher} key={index} />
      ))}
    </div>
  )
}

export default AboutTeachers