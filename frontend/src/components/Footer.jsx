import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt='' />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae
            eos. Aliquid, incidunt quisquam? Quae officiis dolores itaque?
            Magnam nihil, eos impedit adipisci nesciunt esse deleniti vitae
            distinctio omnis magni!
          </p>
        </div>
        {/* center section */}
        <div>
          <p className='text-xl font-medium mb-5'>company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privary Policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            {/* random phone no */}
            <li>+8445963201448</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/*  -------copy right text -------- */}
        <hr />
        <p className='py-5 text-sm text-center'>
          Copy rights@@ all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
