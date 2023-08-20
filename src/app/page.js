'use client'

import CustomNavigationBar from '@/components/navbar';
import { useEffect, useState } from 'react'
import Dashboard1 from '../components/dashboard/dashboard1';
import Dashboard2 from '@/components/dashboard/dashboard2';
import Dashboard3 from '@/components/dashboard/dashboard3';
import RekomendasiProduct from '@/components/dashboard/rekomendasi';
import { Poppins, Rubik } from 'next/font/google';
import ProfilSuhuf from '@/components/dashboard/profil-suhuf';
import ContactPerson from '@/components/dashboard/contact-person';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] }, )
const rubik = Rubik({subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] }, )

export default function Home() {
   const [ index, setIndex ] = useState(0);

   const slides = [
      { url: '/bg.jpg'},
      { url: '/bg2.jpg'},
      { url: '/bg3.jpg'},
   ]

   useEffect(() => {
      let i = 0;

      function changeBackground(){
         setIndex(i)
         index === 0 && setIndex(1)
         index === 1 && setIndex(2)
         i++
      }

      const interval = setInterval(changeBackground, 7000);

      return () => clearInterval(interval);
   })

   return (
      <main className='scroll-smooth'>
         {/* PAGE 1 HOME */}
         <section style={rubik.style}  className='page-1 relative flex flex-col min-h-[100vh] min-w-full'>
            <div style={{backgroundImage: `url(${slides[index].url})`, backgroundSize: 'cover', filter: 'brightness(50%)'}} className='absolute top-0 left-0 w-full h-full -z-10 duration-500'/>
            {/* <Image src={slides[index].url} fill={true} quality={100} alt='' sizes="auto" className='relative object-cover brightness-[.6] duration-1000'/> */}
            <nav className='animate-translateIn'><CustomNavigationBar color='white' url3={'#profil-suhuf'} url4={'#contact-person'}/></nav>
            <div className='flex flex-row h-full w-full mt-5 3xl:mt-24'>
               <main className='grow pt-20 pl-20 pb-20 animate-fade'><Dashboard1/></main>
               <div className='h-fit w-fit mr-32 3xl:mr-[200px] flex flex-col self-end animate-fade'>
                  <RekomendasiProduct/>
               </div>
            </div>
            <footer className='flex flex-row bg-gray-400 rounded-full w-fit self-center justify-end mb-24 3xl:mt-[10vh] animate-fade'>
               <button onClick={ () => {setIndex(0)} } className={`w-20 h-2 rounded-full ${ index === 0 ? 'bg-white' : 'bg-gray-400'}`}/>
               <button onClick={ () => {setIndex(1)} } className={`w-20 h-2 rounded-full ${ index === 1 ? 'bg-white' : 'bg-gray-400'}`}/>
               <button onClick={ () => {setIndex(2)} } className={`w-20 h-2 rounded-full ${ index === 2 ? 'bg-white' : 'bg-gray-400'}`}/>
            </footer>
         </section>

         {/* PAGE 2 PRODUCT RINGKASAN */}
         <section style={poppins.style} className='page-2 flex min-h-[125vh]'>
            <div><Dashboard2/></div>
         </section>

         <span className='absolute w-full h-36 flex justify-end -translate-y-[55px] pr-20'>
            <p style={poppins.style} className='text-8xl text-redbg font-bold text-transparent bg-clip-text bg-gradient-to-b from-redbg/[.61] from-[30%] to-white to-[45%]'>Categories</p>
         </span>
         <section className='page-3 flex  flex-col bg-gradient-to-b bg-opacity-100 from-redbg/[.61] from-60% to-redbg/[.3]'>
            <div id='categories' style={poppins.style} className='min-h-[200vh]'><Dashboard3/></div>
            <div id='profil-suhuf' style={poppins.style} className='min-h-[50vh] p-32'><ProfilSuhuf/></div>
         </section>
         <section id="contact-person" className='page-3 min-h-fit bg-white'>
            <ContactPerson/>
         </section>
      </main>
   )
}
