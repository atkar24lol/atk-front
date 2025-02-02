import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/component';
import Footer from '@/components/footer/component';

const montserratBlack = Montserrat({ weights: [800], subsets: ['latin'] });
const montserratSemibold = Montserrat({ weights: [600], subsets: ['latin'] });
const montserratTitle = Montserrat({ weights: [900], subsets: ['latin'] });

export const metadata = {
  title: 'Главная | Агротехнический колледж имени Султана Ибраимова',
  description: 'Агротехнический колледж имени Султана Ибраимова',
};

const fontClasses = [montserratBlack.className, montserratSemibold.className, montserratTitle.className].join(' ');

export default function RootLayout({ children }) {
  return (
    <html lang='ru' className={fontClasses}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body
        className="max-w-[1920px] mx-auto"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
