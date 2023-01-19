import { getRandomValues } from 'crypto';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Input from './input.tsx';
import Textarea from './textarea';

function Contact({contact, contact_des, mail_des, send_button}) {
  const [navbar, setNavbar] = useState(false);
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field =>
      {
        if (!field.name) return;
        formData[field.name] = field.value;

      });

      fetch('/api/mail',{
        method: 'post',
        body: JSON.stringify(formData)
      })
      console.log(formData)
  }
  return (
    <div>
      {/*<!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
  -->*/}

<section id='contact' class="bg-platinum">
  <div class="mx-auto max-w-screen-xl px-10 pt-10 lg:py-20 sm:px-6 lg:px-0">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 space-y-5 lg:py-12">
          <h2 class="text-2xl font-sora font-bold text-oxford-blue md:text-3xl">
            {contact}
          </h2>
        
        <p class="max-w-xl font-normal text-md font-sora text-justify text-oxford-blue">
        {contact_des}
        </p>

          <div class="space-y-5">
          <a
            class="inline-block rounded-full bg-platinum p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="tel:+96502056978"
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
          {mail_des}
        </h4>
        <form method='post' onSubmit={handleOnSubmit} class="space-y-4">
          <Input  id="name" name="name" label="Name" type="text" placeholder="Name"/>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input  id="email" name="email" label="Email" type="text" placeholder="Email Address"/>
          <Input  id="phone" name="phone" label="Phone" type="text" placeholder="Phone Number"/>
          </div>

          <Input  id="subject" name="subject" label="Subject" type="text" placeholder="Enquire Products / Write reivews!"/>

          <Textarea id="message" name="message" label="Message" rows="6" placeholder="Type the detailed description of your message here..." />
          

          <div>
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-full bg-platinum text-oxford-blue border-2 border-oxford-blue hover:text-crayola px-5 py-3 text-white sm:w-auto hover:bg-oxford-blue active:border-2 active:border-crayola
              "
            >
              <span class="font-sora  font-semibold">{send_button}</span>

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
                  stroke-width="3"
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