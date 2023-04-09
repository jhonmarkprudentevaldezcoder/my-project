import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcOpenedFolder } from 'react-icons/fc';
const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects" titleNo="- 03." />

      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* project one */}
        <div className="w-full  flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href=""
              className="w-full xl:w-1/2 h-auto relative group"
              target="_blank"
            >
              <div>
                <img
                  src="/portfolio.PNG"
                  className="w-full h-full object-contain"
                  alt="portfolio"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between  items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-teal-400 text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">PORTFOLIO WEBSITE</h3>
              <p className="bg-[#222222] text-sm md:text-base p-2 md:p-6 rounded-md">
                This is my personal website built with{' '}
                <span className="text-teal-400">nextjs</span> and
                <span className="text-teal-400"> tailwind</span> . here you can
                see my personal projects that you can use and view below you can
                see the materials I used to build this project
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
                <li>Next js</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Framer motion</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href=""
                  target="_blank"
                  className="hover:text-teal-500 duration-300"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* project app */}
        <div className="w-full flex-col items-center justify-center gap-28 ">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <Link
              href=""
              className="w-full xl:w-1/2 h-auto relative group"
              target="_blank"
            >
              <div>
                <img
                  src="/bloodbank.PNG"
                  className="w-full h-full object-contain"
                  alt="portfolio"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-teal-400 text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Blood bank management system
              </h3>
              <p className="bg-[#222222] text-sm md:text-base p-2 md:p-6 rounded-md xl:-ml-16">
                <span className="text-teal-400">
                  blood bank management system{' '}
                </span>
                this is what I made for those who manage those who{' '}
                <span className="text-teal-400">request blood </span>
                and <span className="text-teal-400">donate blood </span> here
                they can manage their data.below you can see the materials I
                used to build this project
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
                <li>VB.net</li>
                <li>Firebase</li>
                <li>Guna</li>
                <li>Visual Studio</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href=""
                  target="_blank"
                  className="hover:text-teal-500 duration-300"
                >
                  <FaGithub />
                </Link>

                <Link
                  href="/assets/exe.rar"
                  className="hover:text-teal-500 duration-300"
                >
                  <FcOpenedFolder />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* project one */}
        <div className="w-full flex-col items-center justify-center gap-28 ">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href=""
              className="w-full xl:w-1/2 h-auto relative group"
              target="_blank"
            >
              <div>
                <img
                  src="/ecom.PNG"
                  className="w-full h-full object-contain"
                  alt="portfolio"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-teal-400 text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Ecommerce webiste</h3>
              <p className="bg-[#222222] text-sm md:text-base p-2 md:p-6 rounded-md">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <span className="text-teal-400">Lorem Ipsum</span> has
                been the industry's standard
                <span className="text-teal-400">dummy</span> text ever since the
                1500s,
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-gray-400">
                <li>Next js</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>React Auth</li>
                <li>Bcrypt</li>
                <li>MongoDb</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  href=""
                  target="_blank"
                  className="hover:text-teal-500 duration-300"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
