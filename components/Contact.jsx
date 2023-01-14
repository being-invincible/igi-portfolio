import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Contact() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      {/*<!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
  -->*/}

<section id='contact' class="bg-platinum">
  <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 space-y-5 lg:py-12">
          <h2 class="text-2xl font-sora font-bold text-oxford-blue md:text-3xl">
            Contact us
          </h2>
        
        <p class="max-w-xl font-medium text-lg font-sora text-justify text-oxford-blue">
        Our team of experts are dedicated to providing personalized service and expert guidance to help you make the best selection for your needs
        </p>

          <div class="space-y-5">
          <a
            class="inline-block rounded-full bg-platinum p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="https://goo.gl/maps/n7Fd76WWjdeNqrhTA"
          >
            <span
              class="block rounded-full text-platinum bg-rhythm bg-no-repeat px-8 py-3 text-md font-normal hover:bg-oxford-blue hover:text-crayola"
            >
              +96502056978 || +96659527889
            </span>
          </a>
          <a class=" text-2xl font-bold text-crayola">
            
          </a>
          <a
            class="inline-block rounded-full bg-oxford-blue p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="https://goo.gl/maps/n7Fd76WWjdeNqrhTA"
          >
            
            <span
              class="block rounded-full bg-platinum text-oxford-blue px-10 py-3 text-md font-bold hover:text-crayola hover:bg-oxford-blue"
            >
              P.O. Box 7306 Riyadh 24326,<br/>
              Kingdom of Saudi Arabia
            </span>
          </a>
          

          </div>
      </div>

      <div class="bg-gradient-to-tl from-mountain-pink to-rhythm p-8 shadow-lg lg:col-span-3 lg:p-12">
        <h4 class="mb-5 text-2xl font-sora font-bold text-cultured md:text-3xl">
          Drop us a mail!
        </h4>
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg bg bg-cultured border-platinum p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg bg-cultured border-platinum p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg bg-cultured border-platinum p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label class="sr-only" for="subject">Subject</label>
            <input
              class="w-full bg-cultured border-platinum rounded-lg p-3 text-sm"
              placeholder="Enquire & Buy Products (or) Write reivews!"
              type="text"
              id="subject"
            />
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full rounded-lg bg-cultured border-platinum p-3 text-sm"
              placeholder="Type the detailed description of your message here..."
              rows="6"
              id="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-lg bg-platinum text-oxford-blue hover:text-crayola px-5 py-3 text-white sm:w-auto hover:bg-oxford-blue"
            >
              <span class="font-sora  font-medium"> Send Enquiry </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default Contact;