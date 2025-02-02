"use client"

import { getDictionary } from '@/app/[lang]/dictionaries';
import { MenuRounded, Search } from '@mui/icons-material';
import { IconButton, TextField, useMediaQuery, useTheme } from '@mui/material';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ModalHeader from '../modalHeader/component';
import './styles.css'

const Header = () => {
  const [language, setLanguage] = useState('ru');
  const [searchValue, setSearchValue] = useState('');
  const [dict, setDict] = useState('ru');
  const [modalHeader, setModalHeader] = useState(false);

  const { lang, value, newsId, programm } = useParams()
  const path = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  let headerImage;
  let headerTitle;
  let headerDescription;

  if (path === `/${lang}` || path === '/' || path === '/ru') {
    if (isSmScreen) {
      headerImage = '/header-main-mobile.png';
      headerTitle = dict?.header?.previews?.titles?.main;
      headerDescription = dict?.header?.previews?.descriptions?.main;

    } else {
      headerImage = '/header-main.png';
      headerTitle = dict?.header?.previews?.titles?.main;
      headerDescription = dict?.header?.previews?.descriptions?.main;
    }
  }

  if (path === `/${lang}/news`) {
    (headerImage = `/blog-and-news-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.blogAndNews),
      (headerDescription = dict?.header?.previews?.descriptions?.blogAndNews)
  }

  if (path === `/${lang}/news/${newsId}`) {
    (headerImage = `/blog-and-news-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.blogAndNewsDetails),
      (headerDescription = dict?.header?.previews?.descriptions?.blogAndNewsDetails)
  }

  if (path === `/${lang}/blog-and-news`) {
    (headerImage = `/blog-and-news-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.blogAndNews),
      (headerDescription = dict?.header?.previews?.descriptions?.blogAndNews)
  }

  if (path === `/${lang}/education-activity`) {
    (headerImage = `/education-activity-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.educationActivity),
      (headerDescription = dict?.header?.previews?.descriptions?.educationActivity)
  }

  if (path === `/${lang}/electron-library`) {
    (headerImage = `/education-activity-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.electronLibrary),
      (headerDescription = dict?.header?.previews?.descriptions?.electronLibrary)
  }

  if (path === `/${lang}/gallary`) {
    (headerImage = `/education-activity-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.gallary),
      (headerDescription = dict?.header?.previews?.descriptions?.gallary)
  }

  if (path === `/${lang}/teachers`) {
    (headerImage = `/teachers-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.teachers),
      (headerDescription = dict?.header?.previews?.descriptions?.teachers)
  }

  if (path === `/${lang}/contacts`) {
    (headerImage = `/contacts-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.contacts),
      (headerDescription = dict?.header?.previews?.descriptions?.contacts)
  }

  if (path === `/${lang}/entrants`) {
    (headerImage = `/contacts-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.entrants),
      (headerDescription = dict?.header?.previews?.descriptions?.entrants)
  }

  if (path === `/${lang}/about-teachers`) {
    (headerImage = `/contacts-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.aboutTeachers),
      (headerDescription = dict?.header?.previews?.descriptions?.aboutTeachers)
  }

  if (path === `/${lang}/additional-education`) {
    (headerImage = `/additional-education-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.additionalEducation),
      (headerDescription = dict?.header?.previews?.descriptions?.additionalEducation)
  }

  if (path === `/${lang}/search/${value}`) {
    (headerImage = `/additional-education-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.searchResult),
      (headerDescription = dict?.header?.previews?.descriptions?.searchResult)
  }

  if (path === `/${lang}/international-cooperation` || path === `/${lang}/international-cooperation/${programm}`) {
    (headerImage = `/additional-education-preview.png`),
      (headerTitle = dict?.header?.previews?.titles?.internationalCooperation),
      (headerDescription = dict?.header?.previews?.descriptions?.internationalCooperation)
  }

  const headerList = [
    {
      title: dict?.header?.list?.news,
      link: `/${lang}/news`
    },

    {
      title: dict?.header?.list?.educationalActivity,
      link: `/${lang}/education-activity`
    },

    {
      title: dict?.header?.list?.gallary,
      link: `/${lang}/gallary`
    },

    {
      title: dict?.header?.list?.entrants,
      link: `/${lang}/entrants`
    },

    {
      title: dict?.header?.list?.teachers,
      link: `/${lang}/teachers`
    },

    {
      title: dict?.header?.list?.contacts,
      link: `/${lang}/contacts`
    },
  ]

  const languages = [
    { selectedLang: 'KG', value: 'ky' },
    { selectedLang: 'RU', value: 'ru' },
    { selectedLang: 'EN', value: 'en' },
  ];

  const handleGetLanguage = async () => {
    const dict = await getDictionary(language);
    setDict(dict);
  };

  const toggleModalHeader = (value) => {
    setModalHeader(value);
  };

  const handleChangeValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleChangeLanguage = (value) => {
    setLanguage(value);
    getDictionary(language);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchValue !== '' && searchValue !== 'undefined') {
      router.push(`/${lang}/search/${searchValue}`)
    }
  }

  useEffect(() => {
    handleGetLanguage();
    const trimmedPath = path.substring(3);
    if (language && language !== 'undefined') {
      router.push(`/${language}${trimmedPath}`);
    } else {
      router.push('/ru');
    }
  }, [language]);

  return (
    <div className='w-full'>
      <div className="w-full h-[79.6px] sm:h-[45.71px] bg-[#0072BC] flex justify-between items-center px-[80px] sm:px-[20px]">
        <div className='max-w-[1440px] mx-auto flex justify-between sm:justify-end w-full gap-3'>
          <div
            className='flex gap-[30px] justify-between items-center'
          >
            <img src='/header-phone.svg' alt='header-phone' className='sm:hidden' />
            <img src='/header-point.svg' alt='header-point' className='sm:hidden' />
            <img src='/header-logo.svg' alt='header-logo' className='w-[35.26px] h-[35.26px] sm:hidden' />
          </div>

          <div className='flex gap-3 items-center'>
            <form
              onSubmit={handleSubmit}
              onChange={handleChangeValue}
            >
              <TextField
                className='placeholder'
                sx={{
                  // display: isSmScreen ? "none" : "inline-block",
                  '& .MuiInputBase-root': {
                    backgroundColor: '#D9D9D980',
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: '25px',
                    border: "none",
                    transition: 'none',
                    '&:hover': {
                      backgroundColor: '#D9D9D980',
                      color: "#FFFFFF",
                    },
                  },
                  '& .MuiInputBase-input': {
                    padding: '11px 21px',
                  },
                  '& .MuiIconButton-root': {
                    padding: '10px',
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton type="submit">
                      <Search sx={{ color: "#0072BC", width: "24px", height: "24px" }} />
                    </IconButton>
                  ),
                }}
                placeholder={String(dict?.header?.searchField)}
              />
            </form>

            <div className={`gap-3 flex uppercase tracking-[0.5px] font-[500] text-[18px]`}>{languages?.map(({ selectedLang, value }) => (
              <span className={`${value === lang ? 'text-[#000]' : 'text-[#fff]'} cursor-pointer`} key={selectedLang}
                onClick={() => handleChangeLanguage(value)}
              >{selectedLang}</span>
            ))}</div>
          </div>
        </div>


      </div>

      <div className='w-full sm:flex sm:justify-between sm:px-[20px]'>
        <div className='w-full flex max-w-[1440px] gap-[10px] items-center px-[80px] sm:px-[0px] py-[22px]'>
          <img onClick={() => router.push(`/${lang}/`)} src='/big-logo.svg' className='w-[100px] h-[100px] md:w-[70px] md:h-[70px] sm:w-[45.71px] sm:h-[45.71px] hover:cursor-pointer' />
          <span className='text-[20px] md:text-[18px] sm:text-[9.14px] text-[#000] font-[600]' dangerouslySetInnerHTML={{ __html: dict?.header?.slogan }}></span>
        </div>

        <IconButton onClick={() => toggleModalHeader(true)} sx={{ display: isSmScreen ? "inline-block" : "none" }}>
          <MenuRounded fontSize='large' htmlColor='#0072BC' />
        </IconButton>
      </div>

      <div className='w-full'>
        <div className='w-full pb-[35px] px-[80px] flex justify-between items-center flex-wrap gap-3 sm:hidden'>{headerList?.map(({ title, link }) => (
          <a href={link} key={link} className='text-[14px] text-[#0072BC] font-[700] uppercase tracking-[1px]'>{title}</a>
        ))}</div>
      </div>

      <div
        className={`${path === `/${lang}/site-map` || path === `/${lang}/contacts` ? 'hidden' : 'flex'} header sm:w-full sm:h-[300px] md:w-full md:h-[320px] w-full h-[460px] overflow-y-hidden sm:p-5 md:p-10 p-[100px] flex flex-col gap-[2.5px] justify-start sm:pt-[30px] md:pt-[75px] pt-[91px] items-start relative`}
      >
        <div
          className="bg-cover bg-center bg-no-repeat  shadow-xl"
          style={{
            backgroundImage: `url(${headerImage})`,
            position: 'absolute',
            zIndex: '-1',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        ></div>

        <p className='font-montserratTitle opacity-[100] font-black text-[#ffffff] sm:text-[28px] md:text-[37px] text-[48px]'>
          {headerTitle}
        </p>

        <span className='font-montserratTitle font-[400] text-[#ffffff] text-[14px]'>
          {headerDescription}
        </span>

      </div>


      <ModalHeader
        dict={dict}
        open={modalHeader}
        onClose={() => toggleModalHeader(false)}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
};

export default Header;
