'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { API } from '@/requester';
import CoursesAndPrograms from '@/components/coursesAndProgramms/component';

const SearchResult = ({ dict }) => {
  const [searchValue, setSearchValue] = useState([]);
  const { value, lang } = useParams();

  const router = useRouter();

  const handleGetDataSearch = useCallback(async () => {
    const response = await API.get(`abouts/global-search/?q=${value}`);
    const data = await response.data;
    setSearchValue(data);
  }, [value]);

  const toDetails = (path, id) => {
    router.push(`/${lang}/${path}/${id}`);
  };

  useEffect(() => {
    handleGetDataSearch();
  }, [handleGetDataSearch]);

  return (
    <div
      className={
        'flex flex-wrap min-h-screen items-start sm:items-center justify-evenly gap-[40px] pt-[54px] px-[120px] pb-[50px] sm:flex sm:flex-col sm:py-[40px] sm:px-[16px] sm:gap-[20px] bg-[#E5F0FA] relative sm:bg-[#E5F0FA]'
      }
    >
      {/* поиск по новостям */}

      {searchValue && searchValue.news && searchValue.news.length > 0 && (
        <div
          className={'flex w-full shadow-xl rounded-md flex-col gap-[22px] p-5 bg-[#FCFCFD]'}
        >
          <h3 className={'text-[#0072BC]  font-[800] text-[34px] md:text-[20px] sm:text-[20px]'}>{dict?.header?.list?.news}</h3>

          <div className='flex flex-wrap rounded-sm justify-evenly items-center w-full p-5'>
            {searchValue?.news?.map((event) => (
              <div
                className={`z-20 h-auto ${searchValue?.tenders?.length <= 2
                  ? 'justify-start'
                  : 'justify-evenly'
                  }  items-start flex flex-row sm:px-4 sm:justify-center sm:py-[40px]`}
                key={event.id}
              >
                <div
                  onClick={() => router.push(`/${lang}/news`)}
                  className={
                    'flex z-10 w-[250px] gap-3 text-wrap sm:flex flex-start flex-col sm:justify-center sm:flex-col flex-wrap'
                  }
                >
                  <img
                    src={event?.image}
                    alt={event?.[`title_${lang}`]}
                    className={'w-[370px] h-[220px] hover:cursor-pointer rounded-xl'}
                  />

                  <p
                    className={
                      'text-[#000] font-[600] text-[12px] hover:cursor-pointer hover:underline'
                    }
                  >
                    {event?.[`title_${lang}`]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      )}

      {/* поиск по галерее */}

      {searchValue && searchValue.images_for_multimedia && searchValue.images_for_multimedia.length > 0 && (
        <div
          className={'flex w-full shadow-xl rounded-md flex-col gap-[22px] p-5 bg-[#FCFCFD]'}
        >
          <h3 className={'text-[#0072BC]  font-[800] text-[34px] md:text-[20px] sm:text-[20px]'}>{dict?.header?.list?.gallary}</h3>

          <div className='flex flex-wrap rounded-sm justify-evenly items-center w-full p-5'>
            {searchValue?.images_for_multimedia?.map((media) => (
              <div
                className={`z-20 h-auto ${searchValue?.tenders?.length <= 2
                  ? 'justify-start'
                  : 'justify-evenly'
                  }  items-start flex flex-row sm:px-4 sm:justify-center sm:py-[40px]`}
                key={media.id}
              >

                {media?.type === 'video' ? (
                  <div
                    onClick={() => router.push(`/${lang}/gallary`)}
                    className='flex flex-col gap-3'>
                    <iframe
                      className='sm:w-full w-[350px] h-[220px] rounded-sm'
                      src={media?.link}
                      title={media?.[`title_${lang}`]}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <p className='text-[#000] font-[600] text-[12px] hover:cursor-pointer hover:underline'>{media?.[`title_${lang}`]}</p>
                  </div>
                ) : (
                  <div
                    onClick={() => router.push(`/${lang}/gallary`)}
                    className={
                      'flex z-10 w-[250px] gap-3 text-wrap sm:flex flex-start flex-col sm:justify-center sm:flex-col flex-wrap'
                    }
                  >
                    <img
                      src={media?.image}
                      alt={media?.[`title_${lang}`]}
                      className={'w-[370px] h-[220px] hover:cursor-pointer rounded-xl'}
                    />

                    <p
                      className={
                        'text-[#000] font-[600] text-[12px] hover:cursor-pointer hover:underline'
                      }
                    >
                      {media?.[`title_${lang}`]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Курсы и программы */}

      {searchValue && searchValue?.courses_and_programms && searchValue?.courses_and_programms.length > 0 && (
        <div
          className={'flex w-full shadow-xl rounded-md flex-col gap-[22px] p-5 bg-[#FCFCFD]'}
        >
          <h3 className={'text-[#0072BC]  font-[800] text-[34px] md:text-[20px] sm:text-[20px]'}>{dict?.footer?.list?.additionalEducation}</h3>

          <div
            onClick={() => router.push(`/${lang}/additional-education`)}
            className='w-full gap-10 md:gap-7 sm:gap-10 flex overflow-x-auto py-[50px] justify-start items-center'>
            {searchValue?.courses_and_programms?.map((course, index) => (
              <div className='flex-shrink-0' key={index}>
                <CoursesAndPrograms course={course} dict={dict} />
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default SearchResult;