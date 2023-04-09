import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import MainContent from '@/components/MainContent';
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ['latin'] });
import React from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

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
