'use client'

import CustomNavigationBar from '@/components/navbar';
import { useEffect, useState } from 'react'
import Dashboard1 from '../components/dashboard/dashboard1';
import Dashboard2 from '@/components/dashboard/dashboard2';
import Dashboard3 from '@/components/dashboard/dashboard3';
import RekomendasiProduct from '@/components/dashboard/rekomendasi';
import { Poppins, Rubik } from 'next/font/google';
import ProfilSuhuf from '@/components/dashboard/profil-suhuf';
import CustomFooter from '@/components/footer';
import Image from 'next/image';

const poppins = Poppins({subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] }, )
const rubik = Rubik({subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] }, )

export default function Home() {
   const [ index, setIndex ] = useState(0);

   const slides = [
      { url: 'https://i.ibb.co/WxbX3mV/bg.png'},
      { url: 'https://i.ibb.co/CbdV96d/bg2.jpg'},
      { url: 'https://i.ibb.co/yVdp2LD/bg3.jpg'},
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
         <section style={rubik.style}  className='page-1 relative flex flex-col h-[100vh] min-w-full'>
            {/* <div style={{backgroundImage: `url(${slides[index].url})`, backgroundSize: 'cover', filter: 'brightness(50%)'}} className=' absolute top-0 right-0 w-full h-full'/> */}
            <Image src={slides[index].url} fill={true} quality={100} alt='' sizes="auto" className='relative animate-fade object-cover brightness-[.6] -z-10'/>
            <nav className='animate-translateIn z-10 px-2'><CustomNavigationBar color='white' url3={'#profil-suhuf'} url4={'#contact-person'}/></nav>
            <div className='flex flex-col md:flex-row h-full px-4 justify-center md:place-items-center'>
               <div className='grow md:hidden'></div>
               <main className='flex flex-col animate-fade h-fit md:px-20 justify-center mb-5'><Dashboard1/></main>
               <div className='md:grow'></div>
               <section className='flex self-end md:mr-20 md:mb-3 pb-3 mt-4'>
                  <div className='h-fit w-fit 3xl:mr-[200px] flex flex-col md:self-end animate-fade'>
                     <RekomendasiProduct/>
                  </div>
               </section>
            </div>
            <footer className='absolute bottom-0 hidden md:flex flex-row bg-gray-400 rounded-full w-fit self-center justify-end mb-24 3xl:mt-[10vh] animate-fade'>
               <button onClick={ () => {setIndex(0)} } className={`w-20 h-2 rounded-full ${ index === 0 ? 'bg-white' : 'bg-gray-400'}`}/>
               <button onClick={ () => {setIndex(1)} } className={`w-20 h-2 rounded-full ${ index === 1 ? 'bg-white' : 'bg-gray-400'}`}/>
               <button onClick={ () => {setIndex(2)} } className={`w-20 h-2 rounded-full ${ index === 2 ? 'bg-white' : 'bg-gray-400'}`}/>
            </footer>
         </section>

         {/* PAGE 2 PRODUCT RINGKASAN */}
         <section style={poppins.style} className='page-2 flex h-[125vh]'>
            <div><Dashboard2/></div>
         </section>

         <span className='absolute w-full h-36 flex md:justify-end pl-3 md:ml-0 md:-translate-y-[55px] -translate-y-[50px] pr-20'>
            <p style={poppins.style} className='text-[65px] md:text-8xl  font-bold text-transparent bg-clip-text bg-gradient-to-b from-redbg/[.61] md:from-[30%] from-[30%] to-white md:to-[45%] to-[48%]'>Categories</p>
         </span>
         <section className='page-3 flex  flex-col bg-gradient-to-b bg-opacity-100 from-redbg/[.61] from-60% to-redbg/[.3]'>
            <div id='categories' style={poppins.style} className='min-h-fit'><Dashboard3/></div>
            <div id='profil-suhuf' style={poppins.style} className='min-h-fit md:p-32 p-6'><ProfilSuhuf/></div>
         </section>
         <section id="contact-person" className='page-3 h-fit bg-white'>
            <CustomFooter/>
         </section>
      </main>
   )
}
