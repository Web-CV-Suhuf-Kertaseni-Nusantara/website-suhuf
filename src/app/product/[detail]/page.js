'use client'
import { useEffect, useState } from 'react';
import CustomNavigationBar from '@/components/navbar';

// /* eslint-disable @next/next/no-img-element */
// const fs = require('fs');
// const path = require('path');


export default function Detail({ params }) {

    /*
    const [product, setProduct] = useState();
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const res = await fetch(`http://localhost:5000/product/slug/${params.detail}`)
        const data = await res.json();
        setProduct(data)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
    }
    */

    const [currentImage, setCurrentImage] = useState('/product1.jpeg'); // Initial image

    // Function to handle clicking on a previous image
    const handleImageClick = (newImage) => {
      setCurrentImage(newImage);
    };

    

    ///<h2 className='font-bold text-3xl'>{product.name}</h2>
     ///product &&
    ///product.name

    
    return (
        <>
            <CustomNavigationBar color='black' color2='white' currentState={1} url3={'/#profil-suhuf'} url4={'/#contact-person'} />
           
            {
                <main className='flex flex-col justify-center w-full sm:flex-col md:flex-row lg:flex-row xl:flex-row 
                
                sm:m-8 md:m-0 lg:m-0 xl:m-0 m-8'>
                <section className='flex flex-col w-full h-full justify-center md:gap-10 lg:gap-10
                pt-0 sm:pt-0 md:pt-20 lg:pt-20 xl:pt-20'>
                <h2 className='font-bold text-3xl lg:hidden md:hidden'>Kado Box Lebaran</h2>
                <h2 className='font-semibold text-2xl lg:hidden md:hidden'>Rp1.000.000</h2>
                    <div id='mainImage' className='rounded-xl w-100 h-80 self-center 
                    m-8 sm:m-8 md:m-0 lg:md-0 xl:md-0' onClick={() => handleImageClick('/product1.jpeg')}>
                        <img src={currentImage} alt='' className='h-full w-full rounded-xl' />
                    </div>
                    <div className='flex flex-row self-center gap-4'>
                        <div id='prevImage1' className='h-20 w-32' onClick={() => handleImageClick('/product1.jpeg')} 
                        onMouseEnter={() => document.getElementById('prevImage1').style.cursor = 'pointer'} 
                        onMouseLeave={() => document.getElementById('prevImage1').style.cursor = 'default'}>
                        <img src='/product1.jpeg' alt='' className='rounded-xl'/>
                        </div>
                        <div id='prevImage2' className='h-20 w-32' onClick={() => handleImageClick('/product2.jpeg')}
                        onMouseEnter={() => document.getElementById('prevImage2').style.cursor = 'pointer'} 
                        onMouseLeave={() => document.getElementById('prevImage2').style.cursor = 'default'}
                        >
                        <img src='/product2.jpeg' alt='' className='rounded-xl'/>
                        </div>
                        <div id='prevImage3' className='h-20 w-32' onClick={() => handleImageClick('/product3.jpeg')}
                        onMouseEnter={() => document.getElementById('prevImage3').style.cursor = 'pointer'} 
                        onMouseLeave={() => document.getElementById('prevImage3').style.cursor = 'default'}
                        >
                        <img src='/product3.jpeg' alt='' className='rounded-xl'/>
                        </div>
                        <div id='prevImage4' className='h-20 w-32' onClick={() => handleImageClick('/product4.jpeg')}
                        onMouseEnter={() => document.getElementById('prevImage4').style.cursor = 'pointer'} 
                        onMouseLeave={() => document.getElementById('prevImage4').style.cursor = 'default'}
                        >
                        <img src='/product4.jpeg' alt='' className='rounded-xl'/>
                        </div>
                    </div>
                    </section>
                    <section className='flex flex-col w-full h-full pt-6 justify-start items-start 
                    m-0 sm:m-0 md:m-5 lg:m-5 xl:m-5'>
                  
                        <h2 className='hidden font-bold text-3xl md:block lg:block xl:block sm:hidden'>Kado Box Lebaran</h2>
                        <h2 className='hidden font-semibold text-2xl md:block lg:block xl:block sm:hidden'>Rp1.000.000</h2>
                        <div className='flex flex-row items-center gap-2 mt-5'>
                            <p className='hidden md:block lg:block sm:hidden'>Stock : 240</p>
                            <div className='ml-2 bg-gray-100 rounded-md px-2 py-1 drop-shadow-lg'><img alt='' src='/tokopedia.png' className='h-12' /></div>
                            <div className='ml-2 bg-gray-100 rounded-md px-2 py-1 drop-shadow-lg'><img alt='' src='/shopee.png' className='h-12' /></div>
                        </div>
                        <p className='font-semibold text-xl mt-5'>Deskripsi</p>
                        <p className='w-[600px]'>Keterangan Bahan : E Fluted | Single Wall | Corrugated Box | 2mm |
                            Duplex 310/M125/K150 B10-01-02 Panjang : 30.5 cm Lebar :20.5 cm</p>
                        <p className='font-bold text-2xl mt-10'>REKOMENDASI PRODUK</p>
                        <div className='bg-[#FFD6D6] px-7 py-5 rounded-lg flex flex-row gap-10 w-[600px] h-[170px]'>
                            <div className='flex flex-col'>
                                <img alt='' src='/product1.jpeg' className='h-28 rounded-lg' />
                                <p className='font-bold'>Box Motif Batik</p>
                                <p className='text-redbg'>Rp50.000</p>
                            </div>
                            <div className='flex flex-col'>
                                <img alt='' src='/product2.jpeg' className='h-28 rounded-lg' />
                                <p className='font-bold'>Box Motif Batik</p>
                                <p className='text-redbg'>Rp50.000</p>
                            </div>
                            <div className='flex flex-col'>
                                <img alt='' src='/product3.jpeg' className='h-28 rounded-lg' />
                                <p className='font-bold'>Box Motif Batik</p>
                                <p className='text-redbg'>Rp50.000</p>
                            </div>
                            <div className='flex flex-col'>
                                <img alt='' src='/product4.jpeg' className='h-28 rounded-lg' />
                                <p className='font-bold'>Box Motif Batik</p>
                                <p className='text-redbg'>Rp50.000</p>
                            </div>
                        </div>
                    </section>

                </main>
            }
        </>

    )
}

// async function getData() {
//     const filePath = path.join(process.cwd(), 'data.json');
//     const fileData = await fs.promises.readFile(filePath, 'utf-8');
//     const data = JSON.parse(fileData);

//     return data;
// }