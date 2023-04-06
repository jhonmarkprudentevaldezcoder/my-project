import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';
import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div
      id="footer"
      className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4"
    >
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
  );
};

export default Footer;
