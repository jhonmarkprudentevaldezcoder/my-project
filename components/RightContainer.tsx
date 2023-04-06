import Link from 'next/link';
import React from 'react';

const RightContainer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-gray-300">
      <Link href="mailto:markbrvaldez@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-teal-400">
          markbrvaldez@gmail.com
        </p>
      </Link>
      <span className="w-[2px] h-32 bg-gray-600 inline-flex"></span>
    </div>
  );
};

export default RightContainer;
