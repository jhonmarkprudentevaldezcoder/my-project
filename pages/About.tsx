import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { TbBrandTailwind, TbBrandDjango } from 'react-icons/tb';
import {
  SiNextdotjs,
  SiFirebase,
  SiDotnet,
  SiAndroidstudio,
} from 'react-icons/si';

const About = () => {
  return (
    <section
      id="about"
      className=" max-w-contentContainer mx-auto py-20 lgl:py-52 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="- 01." />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base  text-gray-400 font-medium flex flex-col gap-4">
          <p className="capitalize">
            As a{' '}
            <span className="text-teal-400">BS Information Technology </span>
            graduate from{' '}
            <span className="text-teal-400">Colegio de Montaban</span>, I
            seeking an entry-level position as a web developer at your firm. I
            have 2 months of internship experience at Department of Social
            Welfare and Development (DSWD) and part time freelancer creating web
            apps, android applications where I fine-tuned my skills.
          </p>
          <p className="capitalize">
            My strong background in computer programming, keen interest in
            Building web apps , full stack development work skills and attention
            to detail have fetched me many awards at various senior high and
            college-level competitions
          </p>

          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <DiJavascript1 />
              </span>
              Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <FaReact />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <TbBrandTailwind />
              </span>
              Tailwindcss
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <SiFirebase />
              </span>
              Firebase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <SiNextdotjs />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <SiDotnet />
              </span>
              VB.Net
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <TbBrandDjango />
              </span>
              Django
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <SiAndroidstudio />
              </span>
              Android Studio
            </li>
          </ul>
        </div>

        {/* profile pic */}
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <img
                className="rounded-lg h-full object-cover m-auto"
                src="/profilepic.jpg"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
