import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';
import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const LeftContainer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-teal-500">
      <div className="flex flex-col gap-4">
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
      {/* line */}
      <div className="w-[2px] h-32 bg-gray-400"></div>
    </div>
  );
};

export default LeftContainer;
