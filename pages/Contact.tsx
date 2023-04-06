import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-teal-400 font-semibold flex items-center tracking-wide">
        04. What's Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <Link href="mailto:markbrvaldez@gmail.com">
        <button className="w-40 h-14 border border-teal-500 mt-6 font-titleFont text-sm text-teal-500 tracking-wide rounded-md duration-300">
          Get in Touch
        </button>
      </Link>
    </section>
  );
};

export default Contact;
