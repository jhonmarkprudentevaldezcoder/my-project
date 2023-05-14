import React from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import MiddleContainer from './MiddleContainer';
import { motion } from 'framer-motion';
import About from '@/pages/About';
import Experience from '@/pages/Experience';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import Footer from '@/pages/Footer';

const MainContent = () => {
  return (
    <div
      id="home"
      className="w-full h-[calc(100vh-74px)] xl:flex items-center gap-20 justify-between"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
      >
        <LeftContainer />
      </motion.div>
      <div className=" h-[50vh] w-full mx-auto p-4 ">
        <MiddleContainer />
        {/* about */}
        <About />
        {/* experience */}
        <Experience />
        {/* projects */}
        <Projects />
        {/* contact */}
        <Contact />
        {/* footer */}
        <Footer />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
      >
        <RightContainer />
      </motion.div>
    </div>
  );
};

export default MainContent;
