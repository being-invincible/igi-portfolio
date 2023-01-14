import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Features() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div id='Features' class="bg-platinum py-40 sm:py-32 lg:py-36 px-10">
  <div class="rounded-lg mx-auto max-w-7xl p-8 lg:px-20 bg-oxford-blue">
    <div class="sm:text-center">
      <h2 class="text-lg font-semibold leading-8 text-platinum">What makes us special</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-crayola sm:text-4xl">Factory Direct Sales</p>
      <p class="mx-auto mt-4 max-w-2xl text-lg font-medium leading-8 text-platinum">
      Our company handles every aspect of the production process from sourcing raw materials to manufacturing and selling the final product. We do not use any intermediaries or middlemen, ensuring that our products are of the highest quality while still being offered at the most competitive prices.
      </p>
    </div>

    <div class="mt-10 max-w-lg sm:mx-auto md:max-w-none">
    <div class="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 font-sora">
              <div class="mb-6">
                <svg class="inline w-4 h-4 mr-2 text-crayola" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>
                <p class="inline pl-20 items-center text-platinum hover:text-crayola">
                From Raw Materials
                </p>
              </div>

              <div class="mb-6">
                <svg class="inline w-4 h-4 mr-2 text-crayola" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>
                <p class="inline pl-20 items-center text-platinum hover:text-crayola">
                To Production
                </p>
              </div>

              <div class="mb-6">
                <svg class="inline w-4 h-4 mr-2 text-crayola" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>
                <p class="inline pl-20 items-center text-platinum hover:text-crayola">
                To Direct Sales!
                </p>
              </div>

              {/*<div class="mb-6">
                <svg class="inline w-4 h-4 mr-2 text-crayola" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>
                <p class="inline pl-20 items-center text-platinum hover:text-crayola">
                  Plain Sateen
                </p>
              </div>

              <div class="mb-6">
                <svg class="inline w-4 h-4 mr-2 text-crayola" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>
                <p class="inline pl-20 items-center text-platinum hover:text-crayola">
                  Plain Percale
                </p>
              </div>
              
              <div class="mb-6">
                <svg class="inline w-4 h-4 mr-2 text-crayola" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                  </path>
                </svg>
                <p class="inline pl-20 items-center text-platinum hover:text-crayola">
                  Custom Size & Colors
                </p>
              </div>*/}
              
        </div>

    </div>
    
    </div>
    <div class=" text-center py-4 lg:px-4">
      <div class="p-2 bg-rhythm items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span class="flex rounded-full bg-crayola uppercase px-2 py-1 text-oxford-blue text-sm font-bold mr-3">New</span>
        <span class="font-semibold text-platinum mr-2 text-left flex-auto">Get all types of hotel equipments from our another brand</span>
        <svg class="fill-platinum opacity-100 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
      </div>
    </div>
</div>

  );
}

export default Features;