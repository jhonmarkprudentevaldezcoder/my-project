import React from 'react';
import { motion } from 'framer-motion';
import {
  TbCircleLetterM,
  TbCircleLetterA,
  TbCircleLetterR,
  TbHexagonLetterK,
} from 'react-icons/tb';

const LoadingScreen = () => {
  return (
    <div className="h-screen bg-[#333333]">
      <div className=" text-center place-items-center py-[20%] text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-row "
        >
          <TbCircleLetterM className="h-32 w-14 text-teal-500 cursor-pointer" />
          <TbCircleLetterA className="h-32 w-14 text-teal-500 cursor-pointer" />
          <TbCircleLetterR className="h-32 w-14 text-teal-500 cursor-pointer" />
          <TbHexagonLetterK className="h-32 w-14 text-teal-500 cursor-pointer" />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
