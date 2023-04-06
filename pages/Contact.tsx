import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-teal-400 font-semibold flex items-center tracking-wide">
        04. Get the info you're looking for right now!
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">REACH OUT</h2>
      <p className="max-w-[600px] text-center text-gray-400">
        feel free to contact me if you need any further information. Drop me a
        line if I can do anything else for you. please do not hesitate to
        contact me. Let me know if you need anything else
      </p>

      <Link href="mailto:markbrvaldez@gmail.com">
        <button className="w-40 h-14 border border-teal-500 mt-6 font-titleFont text-sm text-teal-500 tracking-wide rounded-md duration-300">
          Let’s Chat
        </button>
      </Link>
    </section>
  );
};

export default Contact;
