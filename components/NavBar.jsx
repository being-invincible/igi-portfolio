import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Lang from './langSwitch';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-oxford-blue fixed top-0 left-0 right-0 z-10">
        <div className="lg:justify-between px-10 mx-auto md:items-center md:flex">
          <div>
            <div className="flex content-center items-center justify-between py-5 md:py-3 md:block">
              {/* LOGO */}
              <Link className='flex' href="/">
                <img src="/logo_footer.jpg" className="inline" width={60} alt="" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden"><Lang/></div>
              
              <div className="md:hidden">
                
                <button
                  className="transition-all p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="transition-all focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
          </div>
          
          <div>
          
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="invisible lg:visible text-lg font-sora font-medium text-platinum py-5 px-6 text-center transition-colors border-b-2 md:border-b-0  hover:bg-rhythm border-x-mountain-pink   md:hover:bg-transparent">
                <Lang />
                </li>
              
                <li className="text-lg font-sora font-medium text-platinum py-5 px-6 text-center transition-colors border-b-2 md:border-b-0  hover:bg-rhythm hover:text-crayola border-x-mountain-pink  md:hover:text-crayola md:hover:bg-transparent">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-lg font-sora font-medium text-platinum py-5 px-6 text-center transition-colors border-b-2 md:border-b-0  hover:bg-rhythm hover:text-crayola border-x-mountain-pink  md:hover:text-crayola md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className=" text-lg font-sora font-medium text-platinum py-5 px-6 text-center transition-colors border-b-2 md:border-b-0  hover:bg-rhythm hover:text-crayola border-x-mountain-pink  md:hover:text-crayola md:hover:bg-transparent">
                  <Link href="#product" onClick={() => setNavbar(!navbar)}>
                    Products
                  </Link>
                </li>
                <li className=" text-lg font-sora font-medium text-platinum py-5 px-6 text-center transition-colors border-b-2 md:border-b-0  hover:bg-rhythm hover:text-crayola border-x-mountain-pink  md:hover:text-crayola md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;