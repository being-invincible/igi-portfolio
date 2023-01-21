import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl'



function Hero({slogan, button01, button02, company}) {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <section id='home'
      className="relative bg-[url(/411.jpg)] bg-cover bg-center bg-no-repeat h-screen"
      >
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:h-screen lg:items-center"
      >
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
          <div className='py-5 font-lato uppercase text-center tracking-[.25em] text-sm lg:text-2xl text-cultured bg-gradient-to-r from-goldenrod to-crayola'>{company}</div>
          {/*<Image src="Title.svg" alt="Company Title" width={500} height={500}/>*/}
          <p className="text-justify font-semibold text-oxford-blue mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
          {slogan}
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-center">
          <a
            className="inline-block rounded-full bg-platinum p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="#product"
          >
            <span
              className="block rounded-full text-platinum bg-rhythm bg-no-repeat px-6 py-3 text-sm font-normal hover:bg-oxford-blue hover:text-crayola"
            >
              {button01}
            </span>
          </a>
          <a
            className="inline-block rounded-full bg-oxford-blue p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="#contact"
          >
            <span
              className="block rounded-full bg-platinum text-oxford-blue bg-no-repeat px-8 py-3 text-sm font-normal hover:text-crayola hover:bg-oxford-blue"
            >
              {button02}
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