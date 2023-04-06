import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiAlignRight } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import {
  TbCircleLetterM,
  TbCircleLetterA,
  TbCircleLetterR,
  TbHexagonLetterK,
} from 'react-icons/tb';

import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';
import { AiFillLinkedin } from 'react-icons/ai';

const Navbar = () => {
  const ref = useRef<string | any>('');
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });

    const Links = document.querySelectorAll('.nav-link');
    Links.forEach((link) => {
      link.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };

  function handleCLick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div
      id="mainhome"
      className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 px-10 bg-[#0A192F]"
    >
      <div className="max-w-full h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row "
        >
          <TbCircleLetterM className="h-32 w-14 text-teal-500 cursor-pointer" />
          <TbCircleLetterA className="h-32 w-14 text-teal-500 cursor-pointer" />
          <TbCircleLetterR className="h-32 w-14 text-teal-500 cursor-pointer" />
          <TbHexagonLetterK className="h-32 w-14 text-teal-500 cursor-pointer" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-centers gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium  text-gray-400 hover:text-teal-300 cursor-pointer duration-300  hover:-translate-y-2 transition-all nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="hover:-translate-y-2"
              >
                Home
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#about"
              className="flex items-center gap-1 font-medium text-gray-400 hover:text-teal-300 cursor-pointer duration-300  hover:-translate-y-2 transition-all nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-teal-300 hover:-translate-y-2">01. </span>
                About
              </motion.li>
            </Link>

            <Link
              onClick={handleScroll}
              href="#experience"
              className="flex items-center gap-1 font-medium text-gray-400 hover:text-teal-300 cursor-pointer duration-300  hover:-translate-y-2 transition-all nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-teal-300 hover:-translate-y-2">02. </span>
                Experience
              </motion.li>
            </Link>

            <Link
              onClick={handleScroll}
              href="#project"
              className="flex items-center gap-1 font-medium text-gray-400 hover:text-teal-300 cursor-pointer duration-300  hover:-translate-y-2 transition-all nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-teal-300 hover:-translate-y-2">03. </span>
                Project
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#contact"
              className="flex items-center gap-1 font-medium text-gray-400 hover:text-teal-300 cursor-pointer  hover:-translate-y-2 transition-all duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-teal-300 hover:-translate-y-2">04. </span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <Link
            href="/assets/VALDEZ-resume.docx"
            target="_blank"
            className="hover:-translate-y-2 transition-all duration-300"
          >
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="px-4 py-2 rounded-md text-teal-400 text-[13px] border border-teal-400  duration-300 hover:-translate-y-2"
            >
              RESUME
            </motion.button>
          </Link>
        </div>
        {/* drawers */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-teal-400 cursor-pointer overflow-hidden group"
        >
          <FiAlignRight className="h-32 w-12 text-teal-500 cursor-pointer hover:text-teal-300 duration-300" />
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleCLick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <AiOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-teal-500 cursor-pointer hover:text-orange-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium  text-gray-400 hover:text-teal-300 cursor-pointer duration-300  hover:-translate-y-2 transition-all nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1 }}
                      className="hover:-translate-y-2"
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#about"
                    className="flex items-center gap-1 font-medium text-gray-400 hover:text-teal-300 cursor-pointer duration-300  hover:-translate-y-2 transition-all nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.1 }}
                    >
                      <span className="text-teal-300 hover:-translate-y-2">
                        01.{' '}
                      </span>
                      About
                    </motion.li>
                  </Link>

                  <Link
                    onClick={handleScroll}
                    href="#experience"
                    className="flex items-center gap-1 font-medium text-gray-400 hover:text-teal-300 cursor-pointer duration-300  hover:-translate-y-2 transition-all nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-teal-300 hover:-translate-y-2">
                        02.{' '}
                      </span>
                      Experience
                    </motion.li>
                  </Link>

                  <Link
                    onClick={handleScroll}
                    href="#project"
                    className="flex items-center gap-1 font-medium text-gray-400 hover:text-teal-300 cursor-pointer duration-300  hover:-translate-y-2 transition-all nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-teal-300 hover:-translate-y-2">
                        03.{' '}
                      </span>
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#contact"
                    className="flex items-center gap-1 font-medium text-gray-400 hover:text-teal-300 cursor-pointer  hover:-translate-y-2 transition-all duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-teal-300 hover:-translate-y-2">
                        04.{' '}
                      </span>
                      Contact
                    </motion.li>
                  </Link>
                  <Link
                    href="/assets/VALDEZ-resume.docx"
                    target="_blank"
                    className="hover:-translate-y-2 transition-all duration-300"
                  >
                    <motion.button
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="px-4 py-2 rounded-md text-teal-400 text-[13px] border border-teal-400  duration-300 hover:-translate-y-2"
                    >
                      RESUME
                    </motion.button>
                  </Link>
                </ul>
                <div>
                  <div className="flex flex-row gap-4">
                    <Link
                      href="https://github.com/jhonmarkprudentevaldezcoder"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-[#0e2444] rounded-full inline-flex items-center justify-center hover:text-teal-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <FaGithub />
                      </span>
                    </Link>
                    <Link
                      href="https://www.facebook.com/markprudentevaldez"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-[#0e2444] rounded-full inline-flex items-center justify-center hover:text-teal-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <BsFacebook />
                      </span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/markvaldeznameko/"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-[#0e2444] rounded-full inline-flex items-center justify-center hover:text-teal-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <RiInstagramLine />
                      </span>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/jhon-mark-valdez-5502751b5/"
                      target="_blank"
                    >
                      <span className="w-10 h-10 text-xl bg-[#0e2444] rounded-full inline-flex items-center justify-center hover:text-teal-400 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <AiFillLinkedin />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
