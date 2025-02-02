"use client";

import { API } from '@/requester';
import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

const ElectronLibrary = ({ dict }) => {
  const [documents, setDocuments] = useState([]);
  const { lang } = useParams();

  const handleGetDocuments = useCallback(async () => {
    try {
      const response = await API.get('abouts/sample/');
      const data = response.data.results;
      setDocuments(data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  }, [lang]);

  useEffect(() => {
    handleGetDocuments();
  }, [handleGetDocuments]);

  return (
    <div className="flex flex-col items-center p-5 md:px-[40px] sm:px-4 px-[80px]">
      <p className="font-[900] text-[34px] sm:text-center md:text-[28px] sm:text-[24px] text-[#000000] sm:pb-0 pb-[41px]">
        {dict?.blogAndNews?.titles?.simpleDocs}
      </p>
      <div className="flex md:flex-col sm:flex-col w-full justify-evenly md:justify-center sm:justify-center items-center gap-3 pb-[34px] sm:pt-4 pt-[53px]">
        {documents.map((document, index) => (
          <div
            key={index}
            className="flex gap-5 w-[300px] items-center py-4 px-5 justify-between border-[1px] border-[#DEE2E6] rounded-md"
          >
            <div className="flex gap-2">
              <div className="flex flex-col gap-[10px] w-[150px]">
                <span
                  className="truncate w-[210px] font-[700] text-[12px] text-[#98A6AD]"
                >
                  {document?.[`title_${lang}`]}
                </span>
                <span className="font-[700] text-[12px] text-[#98A6AD]">
                  {document?.created_at}
                </span>
              </div>
            </div>
            <a href={document?.file} download={document?.[`title_${lang}`]}>
              <img
                src="/download-icon.svg"
                alt={document?.[`description_${lang}`]}
                className="w-[24px] h-[24px]"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronLibrary;
