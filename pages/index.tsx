import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import MainContent from '@/components/MainContent';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
const inter = Inter({ subsets: ['latin'] });
import { NextSeo } from 'next-seo';

export default function Home() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const seoConfig = {
    title: 'Jhon mark prudente valdez portfolio website',
    description:
      'my name is mark valdez this is my personal website build with next js .',
    canonical:
      'https://portfolio-seven-alpha-27.vercel.app/?fbclid=IwAR20paG-iHuqGuC399XJcMoc8z5nlJnx401fQRer2TSrQBDqZ_mBDt6a--k',
    openGraph: {
      type: 'website',
      url: 'https://portfolio-seven-alpha-27.vercel.app/?fbclid=IwAR20paG-iHuqGuC399XJcMoc8z5nlJnx401fQRer2TSrQBDqZ_mBDt6a--k',
      title: 'jhon mark prudente valdez portfolio website',
      description:
        'jhon mark prudente valdez portfolio website build with next js .',
      images: [
        {
          url: 'https://portfolio-seven-alpha-27.vercel.app/',
          width: 800,
          height: 600,
          alt: 'An image of my page',
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
    },
  };
  return (
    <>
      <Head>
        <title>JHON MARK VALDEZ</title>
        <meta name="description" content="mark valdez Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/letter-m.png" />
      </Head>

      {loading ? (
        <LoadingScreen />
      ) : (
        <main
          id="main"
          className="w-full h-screen font-bodyFont bg-[#333333] text-[#ccd6f6] overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-teal-600/20 scrollbar-thumb-teal-600"
        >
          <Navbar />
          <MainContent />
        </main>
      )}
    </>
  );
}
