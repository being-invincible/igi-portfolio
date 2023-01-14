import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Hero() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <section id='home'
  className="relative bg-[url(/411.jpg)] bg-cover bg-center bg-no-repeat h-screen"
>
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:h-screen lg:items-center"
  >
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
  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className=" rounded-xl p-5 mt-14 max-w-xl font-sora text-center sm:text-left hover:shadow-lg hover:transition-all hover:bg-cultured/50">
      {/*<h1 class="text-3xl font-extrabold sm:text-5xl">
        Luxury & Comfort

        <strong class="block font-extrabold text-rose-700">
          Forever Home.
        </strong>
      </h1>
      <h6 className='font-semibold text-left'>Since 2005</h6>*/}
      <Image src="Title.svg" alt="Company Title" width={500} height={500}/>
      <p className="text-justify font-semibold text-oxford-blue mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
      Experience the luxury of premium quality with IGI. The trusted source for hotels and home utility linen made with world class fabrics
      </p>

      <div className="mt-5 flex flex-wrap gap-4 text-center">
      <a
        className="inline-block rounded-full bg-platinum p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
        href="#product"
      >
        <span
          className="block rounded-full text-platinum bg-rhythm bg-no-repeat px-8 py-3 text-sm font-normal hover:bg-oxford-blue hover:text-crayola"
        >
          Our Products
        </span>
      </a>
      <a
        className="inline-block rounded-full bg-oxford-blue p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
        href="#contact"
      >
        <span
          className="block rounded-full bg-platinum text-oxford-blue px-8 py-3 text-sm font-normal hover:text-crayola hover:bg-oxford-blue"
        >
          Contact Us
        </span>
      </a>
      </div>
    </div>
  </div>
  </div>
  </section>

  </div>
  );
}

export default Hero;