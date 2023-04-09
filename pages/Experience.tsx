import SectionTitle from '@/components/SectionTitle';
import React, { useState } from 'react';
import Freelance from '@/components/Works/Freelance';
import Datadynamix from '@/components/Works/Datadynamix';

const Experience = () => {
  const [workFreelance, setWorkFreelance] = useState(true);
  const [workDatadynamix, setWorkDatadynami] = useState(false);

  const handleFreelance = () => {
    setWorkFreelance(true);
    setWorkDatadynami(false);
  };

  const handleDatadynamix = () => {
    setWorkFreelance(false);
    setWorkDatadynami(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs  mx-auto py-5 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience" titleNo="- 02." />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleFreelance}
            className={`${
              workFreelance
                ? 'border-l-2 border-l-teal-500 text-teal-500'
                : 'border-l-2 border-l-teal-500 text-gray-300'
            }  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Freelance
          </li>
          <li
            onClick={handleDatadynamix}
            className={`${
              workDatadynamix
                ? 'border-l-2 border-l-teal-500 text-teal-500'
                : 'border-l-2 border-l-teal-500 text-gray-300'
            }  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Datadynamix
          </li>
        </ul>

        {workFreelance && <Freelance />}
        {workDatadynamix && <Datadynamix />}
      </div>
    </section>
  );
};

export default Experience;
