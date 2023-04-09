import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const MiddleContainer = () => {
  const [text, count] = useTypewriter({
    words: [
      'HI, MY NAME IS MARK ',
      '</REACT DEVELOPER>',
      'DESIGNER',
      'FULL STACK DEVELOPER',
      'ANDROID APP DEVELOPER /',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="max-w-contentContainer h-screen mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg font-titleFont tracking-wide text-teal-400 animate-bounce"
      >
        Hi, i'M
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        JHON MARK PRUDENTE VALDEZ.{' '}
        <span className="text-gray-500 mt-2 lgl:mt-4">
          {text} <Cursor cursorColor="#F7AB0A" />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-base md:max-w-[650px] text-gray-400 font-medium"
      >
        hi my name is mark valdez and i like coding since i was junior high
        school welcome to my portfolio website i hope you like it <br />
        <Link
          href="https://markvaldezportfoliowebsite-markbrvaldez-gmailcom.vercel.app/?fbclid=IwAR0pM3R_Ij3ZYC0MTjyaTx6DyEJNUDucdQUzOvhJozAYuURQ6LGHIMy053w"
          target="_blank"
        >
          <span className="text-teal-400 inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            <span className="absolute w-full h-[1px] bg-teal-400 left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </Link>
      </motion.p>
      <motion.button className="w-52 h-14 text-sm font-titleFont border border-teal-300 rounded-md text-teal-400 tracking-wide hover:bg-[#102749] duration-300">
        <Link
          href="https://github.com/jhonmarkprudentevaldezcoder"
          target="_blank"
        >
          Check out my Projects
        </Link>
      </motion.button>
    </section>
  );
};

export default MiddleContainer;
