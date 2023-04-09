import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';

const About = () => {
  return (
    <section
      id="about"
      className="max-w-contentContainer h-screen mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="- 01." />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-gray-400 font-medium flex flex-col gap-4">
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>

          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <AiFillCodeSandboxCircle />
              </span>
              Javascript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <AiFillCodeSandboxCircle />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <AiFillCodeSandboxCircle />
              </span>
              Tailwindcss
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <AiFillCodeSandboxCircle />
              </span>
              Firebase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <AiFillCodeSandboxCircle />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <AiFillCodeSandboxCircle />
              </span>
              VB.Net
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <AiFillCodeSandboxCircle />
              </span>
              Django
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-500">
                <AiFillCodeSandboxCircle />
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
                className="rounded-lg h-full object-cover"
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
