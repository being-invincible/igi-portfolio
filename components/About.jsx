import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function About() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
  
  <section id='about' className=''>
  
    <div class="h-screen py-32 px-10 grid grid-cols-1 gap-4 md:grid-cols-2 bg-platinum">
      <div class="bg-gradient-to-tl from-mountain-pink to-rhythm p-8 md:p-8 lg:px-16 lg:py-8">
        <div class="mx-auto font-sora max-w-xl">
          <h2 class="text-2xl font-sora font-bold text-platinum md:text-3xl">
            About us
          </h2>
          <p className='mt-4 font-medium text-justify text-sm text-platinum sm:mt-4 sm:block'>Imran Gulf Industries F. Co. is a leading provider of tailor-made solutions and premium quality products, founded in Saudi Arabia with a decade-long track record of excellence. We understand the importance of providing our customers with the very best in terms of quality, comfort, and style.</p>

          <p class="hidden font-medium text-justify text-sm text-platinum sm:mt-4 sm:block">Our specialization in supplying hotel linens to the hospitality industry and luxury bed linens to discerning households reflects our commitment to meeting the highest standards of elegance, luxury, and beauty. Whether you are a hotelier looking to elevate your guests' experience, or a household with an eye for luxury and comfort, we have the perfect solutions for you.</p>

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