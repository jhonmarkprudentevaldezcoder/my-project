import React from 'react';
import { motion } from 'framer-motion';
import { TiArrowForward } from 'react-icons/ti';

const Datadynamix = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full stack Web developer
      </h3>
      <p className="text-sm mt-1 font-medium text-gray-400">
        April to June 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-gray-300">
          <span className="text-teal-400 mt-1">
            <TiArrowForward />
          </span>
         Developed online platform of the technical specifications of
          commonly procured items for DSWD Central Office.
          The site framework used is codeigniter4 which may be utilized
          by the end-users on downloading the specification file as attachment
          to the procurement documents.
        </li>
        <li className="text-base flex gap-2 text-gray-300">
          <span className="text-teal-400 mt-1">
            <TiArrowForward />
          </span>
         On-boarded as Student Trainee at Administrative Service - Building and Grounds Management Division as part of the academic requirements.
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

export default Datadynamix;
