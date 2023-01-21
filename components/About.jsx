import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function About({title, para01, para02, button01}) {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
  
  <section id='about' className=''>
  
    <div class="h-screen pt-20 lg:py-32 px-10 grid grid-cols-1 gap-4 md:grid-cols-2 bg-platinum">
      <div class="bg-gradient-to-tl from-mountain-pink to-rhythm p-8 md:p-8 lg:px-16 lg:py-8">
        <div class="font-sora">
          <h2 class="text-2xl font-sora font-bold text-platinum md:text-3xl">
            {title}
          </h2>
          <p className='mt-4 font-medium text-justify text-sm text-platinum sm:mt-4 sm:block'>
          {para01}
          </p>

          <p class="hidden font-medium text-justify text-sm text-platinum sm:mt-4 sm:block">
          {para02}
          </p>

          <div class="mt-4 md:mt-6">
          <a
            class="inline-block rounded-full bg-platinum p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="#Features"
          >
            <span
              class="block rounded-full text-platinum bg-rhythm bg-no-repeat px-8 py-3 text-sm font-bold hover:bg-oxford-blue hover:text-crayola"
            >
              {button01}
            </span>
          </a>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Image
          alt="Student"
          src="/about1.jpg"
          class="h-64 w-full object-cover sm:h-48 md:min-h-full"
          width={800}
      height={500}
        />

        <Image
          alt="Student"
          src="/about2.jpg"
          class="h-64 w-full object-cover sm:h-48 md:min-h-full"
          width={800}
      height={500}
        />
      </div>
    </div>
  
</section>

  </div>
  );
}

export default About;