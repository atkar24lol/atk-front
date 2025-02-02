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
    const response = await API.get('news/news/');
    const data = await response.data.results;
    setNews(data);
  }, [lang]);

  useEffect(() => {
    handleGetNews();
  }, [handleGetNews]);

  return <div className='w-full h-auto min-h-screen flex flex-col sm:bg-[#F1F3F4]'>
    <MainNewsBlock dict={dict} news={news} />
    <MainInfoBlock dict={dict} />
    <MainFormBlock dict={dict} />
    <Map dict={dict} />

  </div>;
};

export default MainPage;
