import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function About() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
    {/* <div class="mx-auto max-w-3xl text-center">
      
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        Luxury & Comfort

        <strong class="block font-extrabold text-rose-700">
          Forever Home.
        </strong>
      </h1>
      <h6 className='text-left'>Since 2005</h6>
      <img src="Title.svg" alt="" />
      <p class="text-justify mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
      Experience the luxury of premium quality with IGI - the trusted source for hotel and home utility linen made with 100% Pakistani cotton
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
      <a
        class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="/download"
      >
        <span
          class="block rounded-full bg-rhythm bg-no-repeat px-8 py-3 text-sm font-medium hover:bg-transparent"
        >
          Our Products
        </span>
      </a>
      <a
        class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="/download"
      >
        <span
          class="block rounded-full bg-pale-purple px-8 py-3 text-sm font-medium hover:bg-transparent"
        >
          Contact Us
        </span>
      </a>
      </div>
    </div>
  </div>*/}
  

  <section id='about' className=''>
  
    <div class="h-screen py-32 px-10 grid grid-cols-1 gap-4 md:grid-cols-2 bg-platinum">
      <div class="bg-gradient-to-tl from-mountain-pink to-rhythm p-8 md:p-8 lg:px-16 lg:py-8">
        <div class="mx-auto font-sora max-w-xl">
          <h2 class="text-2xl font-sora font-bold text-platinum md:text-3xl">
            About us
          </h2>
          <p className='mt-4 font-medium text-justify text-sm text-platinum sm:mt-4 sm:block'>Imran Gulf Industries F. Co. is a leading provider of tailor-made solutions and premium quality products, founded in Saudi Arabia with a decade-long track record of excellence. We understand the importance of providing our customers with the very best in terms of quality, comfort, and style.</p>

          <p class="hidden font-medium text-justify text-sm text-platinum sm:mt-4 sm:block">
          Our specialization in supplying hotel linens to the hospitality industry and luxury bed linens to discerning households reflects our commitment to meeting the highest standards of elegance, luxury, and beauty. Whether you are a hotelier looking to elevate your guests' experience, or a household with an eye for luxury and comfort, we have the perfect solutions for you.
          </p>

          <div class="mt-4 md:mt-6">
          <a
            class="inline-block rounded-full bg-platinum p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="#Features"
          >
            <span
              class="block rounded-full text-platinum bg-rhythm bg-no-repeat px-8 py-3 text-sm font-bold hover:bg-oxford-blue hover:text-crayola"
            >
              Why IGI?
            </span>
          </a>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src="/about1.jpg"
          class="h-64 w-full object-cover sm:h-48 md:min-h-full"
        />

        <img
          alt="Student"
          src="/about2.jpg"
          class="h-64 w-full object-cover sm:h-48 md:min-h-full"
        />
      </div>
    </div>
  
</section>

  </div>
  );
}

export default About;