import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='text-gray-700 font-medium'>
          About <span>US</span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full max-w-[360px]' src={assets.about_image} alt='' />
        <div className='flex flex-col justify-center gap-6 w-2/4 text-sm text-gray-600'>
          <p className='text-gray-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            accusamus consectetur tempora nihil accusantium quam libero
            laudantium officia repellat labore fuga, ut consequatur voluptatibus
            neque quod nesciunt culpa quia dolores?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            repellendus reiciendis est hic rerum dicta error, minima
            reprehenderit suscipit consequuntur fugiat quisquam ullam odio earum
            nostrum fuga deleniti corporis nam?
          </p>

          <b>Our Vision</b>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit illum et, repudiandae vel tempore quisquam hic iste
            vero adipisci eius qui ducimus expedita, autem ut quis? Reiciendis
            similique quisquam vel.
          </p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>
          WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span>
        </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reumenda
            facere at temporibus .
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.i
            repellendus laborum inventore quo quos?
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600 cursor-pointer'>
          <b>Personilazition</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. met culpa
            earum laborum.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
