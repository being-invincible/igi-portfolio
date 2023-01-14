import { useEffect, useState } from 'react';

function Products() {
  return (
    <div class="flex justify-center items-center lg:flex-row bg-gradient-to-tl from-mountain-pink to-rhythm">
    <section id='product' class="px-10 mt-5 mb-5">
          <div class="py-5 mx-auto max-w-screen-xl lg:py-28 ">
                <div class="max-w-screen mb-5 font-sora">
                    <h2 class="mb-4 tracking-tight text-2xl font-sora font-bold text-platinum md:text-3xl">
                        Our Products
                    </h2>
                    <p class="font-normal text-platinum lg:mb-5 sm:text-xl dark:text-gray-400">
                    Welcome to a world of luxurious elegance, softness, and comfort. Indulge in the sumptuousness of <b className='font-bold'>IGI's</b> elegant, cozy and soft linens, curated to elevate your living and sleeping experience.
                    </p>

                    <p class="mt-4 font-normal text-platinum lg:mb-4 sm:text-xl dark:text-gray-400">
                    <b>Sizes : </b> Single, King & Queen
                    </p> 
                </div> 
                <div class="grid gap-8 md:grid-cols-3" >
                    
                

                <div
                class="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group"
                >
                    <div
                        class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-smoky-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                    >
                        <div>
                            <div
                                class="font-sora text-cultured p-4 space-y-2 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out"
                            >
                                <div class=" font-bold">Bedsheet</div>

                                <div class="text-sm ">
                                    Bedsheets & Fitted Bedsheets
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt=""
                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                        src="/bs.jpeg"
                    />
                </div>

                <div
                class="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group"
                >
                    <div
                        class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-smoky-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                    >
                        <div>
                            <div
                                class="font-sora text-cultured p-4 space-y-2 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out"
                            >
                                <div class=" font-bold">Duvet</div>

                                <div class="text-sm ">
                                    Duvets & Duvet covers
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt=""
                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                        src="/duvet.jpg"
                    />
                </div>

                
                <div
                class="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group"
                >
                    <div
                        class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-smoky-black/75 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                    >
                        <div>
                            <div
                                class="font-sora text-cultured p-4 space-y-2 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out"
                            >
                                <div class=" font-bold">Bed Runner</div>

                                <div class="text-sm ">
                                    Bed decors & runners
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt=""
                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                        src="/bedrunner.jpg"
                    />
                </div>

                
                <div
                class="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group"
                >
                    <div
                        class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-smoky-black/75 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                    >
                        <div>
                            <div
                                class="font-sora text-cultured p-4 space-y-2 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out"
                            >
                                <div class=" font-bold">Pillow</div>

                                <div class="text-sm ">
                                    Pillow, protectors & cases
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt=""
                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                        src="/pillow.jpeg"
                    />
                </div>

                <div
                class="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group"
                >
                    <div
                        class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-smoky-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                    >
                        <div>
                            <div
                                class="font-sora text-cultured p-4 space-y-2 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out"
                            >
                                <div class=" font-bold">Mattress Protectors</div>

                                <div class="text-sm ">
                                    Mattress protectors & mattress encasement protectors
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt=""
                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                        src="/mattress.jpg"
                    />
                </div>


                <div
                class="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group"
                >
                    <div
                        class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-smoky-black/75 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                    >
                        <div>
                            <div
                                class="font-sora text-cultured p-4 space-y-2 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out"
                            >
                                <div class=" font-bold">Bed Skirt</div>

                                <div class="text-sm ">
                                    Bed skirts
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        alt=""
                        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                        src="bedskirt.jpeg"
                    />
                </div>
                     
                </div> 
                <p class="mt-4 font-normal font-sora text-platinum lg:mb-4 sm:text-xl dark:text-gray-400">
                <b>Note : </b> Custom made color & sizes available on request 
                </p> 
          </div>
        </section>
    


    </div>
  );
}

export default Products;