'use client';

import MainFormBlock from '@/components/mainFormBlock/component';
import MainInfoBlock from '@/components/mainInfoBlock/component';
import MainNewsBlock from '@/components/mainNewsBlock/component';
import Map from '@/components/map/component';
import { API } from '@/requester';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const MainPage = ({ dict }) => {
  const [news, setNews] = useState([]);
  const { lang } = useParams()

  const handleGetNews = useCallback(async () => {
    try {
      const response = await API.get('news/news/', {
        params: { page: 1, ordering: '-date' } // Получаем последние новости
      });
      const data = response.data.results;

      if (data.length < 5) {
        // Если на первой странице < 4 новостей, пробуем получить еще одну страницу
        const response2 = await API.get('news/news/', {
          params: { page: 2, ordering: '-date' }
        });
        data.push(...response2.data.results);
      }

      setNews(data.slice(0, 5));
    } catch (error) {
      console.error("Ошибка загрузки новостей", error);
    }
  }, [lang]);


  useEffect(() => {
    handleGetNews();
  }, [handleGetNews]);

  return <div className='w-full h-auto min-h-screen flex flex-col bg-[#F6F6F6] sm:bg-[#F1F3F4]'>
    <MainNewsBlock dict={dict} news={news} />
    <MainInfoBlock dict={dict} />
    <MainFormBlock dict={dict} />
    <Map dict={dict} />

  </div>;
};

export default MainPage;
