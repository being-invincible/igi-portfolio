import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Products from '../components/Products'
import About from '../components/About'
import Features from '../components/Features'
import Lang from '../components/langSwitch'
import { useTranslations } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const t= useTranslations('home')
  
  return (
    <>
      <Head>
        <title>IGI</title>
        <meta name="description" content="Imran Gulf Industries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <main className=''>
      
      <NavBar home={t("home")} aboutUs={t("aboutUs")} products={t("products")} contacts={t("contacts")} />
      
      <Hero slogan={t("slogan")} button01={t("hero_button01")} button02={t("hero_button02")} company={t("company")} />
      <About title={t("about")} para01={t("about_para01")} para02={t("about_para02")} button01={t("about_button")} />
      <Features title={t("feature_title")} subtitle01={t("feature_subtitle01")} para01={t("feature_para01")} subtitle02={t("feature_subtitle02")} para02={t("feature_para02")} feature01={t("feature_point01")} feature02={t("feature_point02")} feature03={t("feature_point03")} tag={t("tag")} msg={t("msg")} />
      <Products product={t("product")} product_para={t("product_para")} sizes={t("sizes")} note={t("note")} 
      p1={t("p1")} p1_des={t("p1_des")}
      p2={t("p2")} p2_des={t("p2_des")}
      p3={t("p3")} p3_des={t("p3_des")}
      p4={t("p4")} p4_des={t("p4_des")}
      p5={t("p5")} p5_des={t("p5_des")}
      p6={t("p6")} p6_des={t("p6_des")}
      />
      <Contact contact={t("contact")} contact_des={t("contact_des")} mail_des={t("mail_des")} send_button={t("send_button")} call={t("call")} landmark={t("landmark")} form_name={t("form_name")} form_email={t("form_email")} form_phone_number={t("form_phone_number")} form_subject={t("form_subject")} form_message={t("form_message")} />

      <footer id="#Footer"class=" p-4 bg-platinum sm:p-6 dark:bg-gray-800">
          <div class="mx-8 mb-0 max-h-screen max-w-screen-xl">
              
              <hr class="my-6 border-smoky-black/75 sm:mx-auto lg:my-8" />
              <div class="sm:flex text-smoky-black sm:items-center sm:justify-between">
                  
                  {/*<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                      <a  class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                      </a>
                      <a  class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                      </a>
                      <a  class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                      </a>
                      
                  </div>*/}
                  <div class="items-end bottom-0 right-0">
                    <img className='w-20 mb-5 lg:mb-0' src="logo_footer.jpg" alt=""/>
                </div>
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#home" class="hover:underline">Imran Gulf Industries. F. Co.</a> - All Rights Reserved.
                  </span>
              </div>
              
          </div>
      </footer>

      </main>
    </>
  )
}

export function getStaticProps({locale}) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`)
    }
  }
}
