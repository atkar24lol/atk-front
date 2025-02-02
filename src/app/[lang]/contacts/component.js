"use client"

import Map from '@/components/map/component'
import { API } from '@/requester';
import axios from 'axios';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import './styles.css'

const Contacts = ({ dict }) => {
  const [contacts, setContacts] = useState([]);

  const { lang } = useParams()
  const path = usePathname()
  const router = useRouter()

  const handleGetContacts = useCallback(async () => {
    const response = await API.get('abouts/contacts/');
    const data = await response.data.results;
    setContacts(data);
  }, [lang]);

  useEffect(() => {
    handleGetContacts();
  }, [handleGetContacts]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(async (d) => {
    const response = await axios.post(`https://asanabdi.pythonanywhere.com/${lang}/api/v1/abouts/sending/`, { name: d.name, email: d.email, info_text: d.info_text });
    await response.data;
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
      setTimeout(() => {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  useEffect(() => {
    if (path === `/${lang}/contacts#form`) {
      scrollToForm();
    }
  }, [path]);

  return (
    <div className='w-full h-auto min-h-screen flex flex-col gap-4 pt-[61px] flex-wrap'>
      <div className='md:px-0 sm:px-0 flex-wrap flex gap-10'>
        <div className='flex px-[80px] flex-col justify-evenly sm:px-4 gap-4 md:w-full sm:w-full'>
          <p className='font-[600] text-[40px] md:text-[30px] sm:text-[20px] text-[#292C3D]'>{dict?.contacts?.title}</p>
          {contacts?.map((contact, index) => (
            <div key={index} className='flex flex-col'>
              <div className='flex flex-col pb-4'>
                <p className='text-[22px] text-[#0079C1] font-[600]'>{contact?.[`role_${lang} `]}</p>

                <span className='text-[16px] text-[#292C3D] font-[400]'>{contact?.[`title_${lang} `]}</span>
              </div>

              <div className='flex gap-3 items-center'>
                <img src='/contacts-icon-phone.svg' alt='phone' />
                <p>{contact?.contact}</p>
              </div>

              <div className='flex gap-3 items-center'>
                <img src='/contacts-icon-mail.svg' alt='mail' />
                <a href='#' className='underline'>{contact?.email}</a>
              </div>
            </div>
          ))}

          <div className='bg-[#F1F2F4] px-[80px] flex pt-10 md:px-4 sm:px-0 md:w-full sm:w-full'>
            <div className='flex flex-col'>
              <div className='flex flex-col pb-4'>
                <div className='flex w-full justify-start pl-[70px] md:px-[70px] md:pl-[0px] sm:px-4 pb-6'>
                  <button className='bg-[#0079C1] border-[1px] border-[#0079C1] tracking-[1px] p-4 text-[#fff] font-[600] text-[14px] text-center'>Телефонная книга</button>
                </div>

                <div className='flex flex-wrap w-full justify-around gap-6 h-full md:px-[70px] sm:px-4'>
                  <div className='flex flex-col justify-evenly w-[350px]  sm:w-full'>
                    <p className='text-[18px] text-[#292C3D] font-[700]'>
                      КОНТАКТ-ЦЕНТР
                    </p>
                    <span className='text-[18px] text-[#292C3D] font-[400]'>Номер</span>
                    <span className='text-[18px] text-[#292C3D] font-[400]'>Почта</span>
                  </div>

                  <div className='flex flex-col justify-evenly w-[350px] sm:w-full'>
                    <p className='text-[18px] text-[#292C3D] font-[700]'>
                      ЕДИНАЯ СЛУЖБА ТЕХПОДДЕРЖКИ
                    </p>
                    <span className='text-[18px] text-[#292C3D] font-[400]'>Номер</span>
                    <span className='text-[18px] text-[#292C3D] font-[400]'>Почта</span>
                  </div>

                  <div className='flex flex-col justify-evenly w-[350px] sm:w-full'>
                    <p className='text-[18px] text-[#292C3D] font-[700]'>
                      ПРИЕМНАЯ КОМИССИЯ
                    </p>
                    <span className='text-[18px] text-[#292C3D] font-[400]'> Граждане КР</span>
                    <span className='text-[18px] text-[#292C3D] font-[400]'>Номер</span>
                    <span className='text-[18px] text-[#292C3D] font-[400]'>Почта</span>
                  </div>

                  <div className='flex flex-col justify-evenly w-[350px] sm:w-full'>
                    <p className='text-[18px] text-[#292C3D] font-[700]'>
                      РАЗМЕЩЕНИЕ В ОБЩЕЖИТИЯХ
                    </p>
                    <span className='text-[18px] text-[#292C3D] font-[400]'> Номер (WhatsApp)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Map />

        <div id='form' className='w-full justify-center flex-col flex items-center'>
          <div
            className={
              'sm:pt-[20px] relative flex justify-center items-center bg-[#F0F7FF] w-full h-auto z-20'
            }
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={
                'max-w-[1440px] mx-auto sm:w-full z-20 w-[595px] h-auto pt-[40px] px-[32px] pb-[43px] my-[30px] flex flex-col gap-5 rounded-[10px] bg-white sm:py-[40px] sm:px-[21px] sm:pb-[23px] sm:gap-5'
              }
            >
              <input
                {...register('name', {
                  required: 'Это поле не может быть пустым.',
                })}
                placeholder={String(dict?.contacts?.feedback?.name)}
                className={
                  'py-[7px] z-20 px-[15.8px] text-[#000B33] bg-[#F5F8FF] font-[400] text-[14px] rounded'
                }
              />
              {errors.name && (
                <p className={' text-[12px] font-[400] text-[red]'}>
                  {errors.name.message}
                </p>
              )}

              <input
                {...register('email', {
                  required: 'Это поле не может быть пустым.',
                })}
                type="email"
                placeholder={String(dict?.contacts?.feedback?.mail)}
                className={
                  'py-[7px] z-20 px-[15.8px] text-[#000B33] bg-[#F5F8FF]  font-[400] text-[14px] rounded'
                }
              />
              {errors?.email && (
                <p className={' text-[12px] font-[400] text-[red]'}>
                  {errors.email.message}
                </p>
              )}

              <textarea
                {...register('info_text', {
                  required: 'Это поле не может быть пустым.',
                })}
                placeholder={String(dict?.contacts?.feedback?.message)}
                rows={7}
                className={
                  'pt-[28px] z-20 px-[15.8px] text-[#000B33] bg-[#F5F8FF]   font-[400] text-[14px] rounded'
                }
              />
              {errors.message && (
                <p className={' text-[12px] font-[400] text-[red]'}>
                  {errors.message.message}
                </p>
              )}

              <button
                type="submit"
                className={
                  'by-[40px] z-20 bg-[#4383FF] py-[13px] px-[33px] rounded-[3px] text-[#FFFFFF]  font-[700] text-[14px] text-center'
                }
              >
                {dict?.contacts?.feedback?.enterButoon}
              </button>

              <div className='w-full flex flex-col flex-wrap px-4 gap-4'>
                <span>{dict?.contacts?.feedback?.descriptionOne}</span>
                <span>{dict?.contacts?.feedback?.descriptionTwo}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts