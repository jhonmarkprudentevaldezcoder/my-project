import React from 'react';
import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Freelance = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web developer
      </h3>
      <p className="text-sm mt-1 font-medium text-gray-400">
        Jan 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-gray-300">
          <span className="text-teal-400 mt-1">
            <TiArrowForward />
          </span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </li>
        <li className="text-base flex gap-2 text-gray-300">
          <span className="text-teal-400 mt-1">
            <TiArrowForward />
          </span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          500s
        </li>
        <li className="text-base flex gap-2 text-gray-300">
          <span className="text-teal-400 mt-1">
            <TiArrowForward />
          </span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </li>
      </ul>
    </motion.div>
  );
};

export default Freelance;
