import { getRandomValues } from 'crypto';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Input from './input.tsx';
import Textarea from './textarea';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import Router from 'next/router';

function Contact({contact, contact_des, mail_des, send_button, call, landmark, form_name, form_email, form_phone_number, form_subject, form_message}) {
  const [navbar, setNavbar] = useState(false);
  const {register,formState:{errors}, handleSubmit, reset} = useForm()

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      header: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config)
      if (response.status == 200) {
        console.log('Sucess')
        reset()
        Router.push("/")
      }
      console.log(response)
    }
    catch(err){
      console.error(err)
    }
    
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

          <p class="mt-10 max-w-xl font-bold text-md font-sora text-justify text-oxford-blue">
          {call}
          </p>
          <a
            class="inline-block rounded-full bg-platinum p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="tel:+966502056978"
          >
            <span
              class="block rounded-full text-platinum bg-rhythm bg-no-repeat px-9 py-3 text-md font-normal hover:bg-oxford-blue hover:text-crayola"
            >
              +966502056978
            </span>
          </a>
          
          <a
            class="ml-0 lg:ml-5 inline-block rounded-full bg-platinum p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="tel:+966595278489"
          >
            <span
              class="block rounded-full text-platinum bg-rhythm bg-no-repeat px-9 py-3 text-md font-normal hover:bg-oxford-blue hover:text-crayola"
            >
              +966595278489
            </span>
          </a>
          
          <p class="space-x-2 max-w-xl font-bold text-md font-sora text-justify text-oxford-blue">
          
          {landmark}
          
          </p>
          
          <a
            class="inline-block rounded-full bg-oxford-blue p-[2px] hover:bg-crayola focus:outline-none focus:ring transition-all"
            href="https://goo.gl/maps/n7Fd76WWjdeNqrhTA"
          >
            
            <span
              class="block rounded-full bg-platinum text-oxford-blue px-5 py-3 text-sm font-bold hover:text-crayola hover:bg-oxford-blue"
            >
              P.O. Box 7306 Riyadh 14326,
              Kingdom of Saudi Arabia
            </span>
          </a>
          

          </div>
      </div>

      <div className="bg-gradient-to-tl from-mountain-pink to-rhythm p-8 shadow-lg lg:col-span-3 lg:p-12">
        <h4 className="mb-5 text-2xl font-sora font-bold text-cultured md:text-3xl">
          {mail_des}
        </h4>
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
          <div>
            <label className='sr-only'>Name</label>
            <input type="text" name='name' placeholder={form_name}
              {...register('name')
            }
              className="w-full rounded-lg bg bg-cultured border-platinum p-3 text-sm"
            />
          </div>
          {/*<span>{errors?.name?.message}</span>*/}
          
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className='sr-only'>Email</label>
              <input type="text" name='email' placeholder={form_email}
                {...register('email')}
                className="w-full rounded-lg bg bg-cultured border-platinum p-3 text-sm"
              />
            </div>
            <div>
              <label className='sr-only'>Phone Number</label>
              <input type="text" name='phone' placeholder={form_phone_number}
                {...register('phone')}
                className="w-full rounded-lg bg bg-cultured border-platinum p-3 text-sm"
              />
            </div>
          </div>
          <div>
            <label className='sr-only'>Subject</label>
            <input type="text" name='subject' placeholder={form_subject}
              {...register('subject')}
              className="w-full rounded-lg bg bg-cultured border-platinum p-3 text-sm"
            />
          </div>
          <div>
            <label className='sr-only'>Message</label>
            <textarea
              rows='6'
              name='message' 
              placeholder={form_message} 
              {...register('message')}
              className="w-full rounded-lg bg-cultured border-platinum p-3 text-sm"
             />
          </div>
          {/*<Input  id="name" name="name" label="Name" type="text" placeholder="Name" ref={register}/>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input  id="email" name="email" label="Email" type="text" placeholder="Email Address" ref={register}/>
          <Input  id="phone" name="phone" label="Phone" type="text" placeholder="Phone Number" ref={register}/>
          </div>

          <Input  id="subject" name="subject" label="Subject" type="text" placeholder="Enquire Products / Write reivews!" ref={register}/>

          <Textarea id="message" name="message" label="Message" rows="6" placeholder="Type the detailed description of your message here..." ref={register}/>
          */}

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