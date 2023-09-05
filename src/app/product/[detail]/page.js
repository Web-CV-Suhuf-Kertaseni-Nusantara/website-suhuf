<<<<<<< HEAD
'use client'
import { useEffect, useState } from 'react';
=======
import CustomNavigationBar from '@/components/navbar';

/* eslint-disable @next/next/no-img-element */
const fs = require('fs');
const path = require('path');
>>>>>>> 7fdc5a2a438369a238dc90e04b9a3b4326b3d67b

// const fs = require('fs');
// const path = require('path');

export default function Detail({ params }) {
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

    return (
        <>
<<<<<<< HEAD
            {product &&

                <h1>{product.name}</h1>
            }
=======
            <CustomNavigationBar color='black' color2='white'  currentState={1} url3={'/#profil-suhuf'} url4={'/#contact-person'}/>  
            <main className='flex flex-row justify-center w-full h-[80vh]'>
                <section className='flex flex-col w-full h-full justify-center gap-20'>
                    <div className='rounded-xl w-72 h-72 self-center'><img src='/product_1.png' alt=''/></div>
                    <div className='flex flex-row self-center gap-4'>
                        <div className='h-32 w-32'><img src='/product_1.png' alt=''/></div>
                        <div className='h-32 w-32'><img src='/product_1.png' alt=''/></div>
                        <div className='h-32 w-32'><img src='/product_1.png' alt=''/></div>
                        <div className='h-32 w-32'><img src='/product_1.png' alt=''/></div>
                    </div>

                </section>
                <section className='flex flex-col w-full h-full pt-10 justify-start items-start'>
                    <h2 className='font-bold text-3xl'>BOX KADO - MOTIF BATIK</h2>
                    <h2 className='font-semibold text-2xl'>Rp1.000.000</h2>
                    <div className='flex flex-row items-center gap-2 mt-5'>
                        <p>Stock : 240</p>
                        <div className='ml-2 bg-gray-100 rounded-md px-2 py-1 drop-shadow-lg'><img alt='' src='/tokopedia.png' className='h-12'/></div>
                        <div className='ml-2 bg-gray-100 rounded-md px-2 py-1 drop-shadow-lg'><img alt='' src='/shopee.png' className='h-12'/></div>
                    </div>
                    <p className='font-semibold text-xl mt-5'>Deskripsi</p>
                    <p className='w-[600px]'>Keterangan Bahan : E Fluted | Single Wall | Corrugated Box | 2mm | 
                        Duplex 310/M125/K150 B10-01-02 Panjang : 30.5 cm Lebar :20.5 cm</p>
                    <p className='font-bold text-2xl mt-10'>REKOMENDASI PRODUK</p>
                    <div className='bg-[#FFD6D6] px-7 py-5 rounded-lg flex flex-row gap-10 w-[700px]'>
                        <div className='flex flex-col'>
                            <img alt='' src='/product1.jpeg' className='h-28 rounded-lg'/>
                            <p className='font-bold'>Box Motif Batik</p>
                            <p className='text-redbg'>Rp50.000</p>
                        </div>
                        <div className='flex flex-col'>
                            <img alt='' src='/product2.jpeg' className='h-28 rounded-lg'/>
                            <p className='font-bold'>Box Motif Batik</p>
                            <p className='text-redbg'>Rp50.000</p>
                        </div>
                        <div className='flex flex-col'>
                            <img alt='' src='/product3.jpeg' className='h-28 rounded-lg'/>
                            <p className='font-bold'>Box Motif Batik</p>
                            <p className='text-redbg'>Rp50.000</p>
                        </div>
                        <div className='flex flex-col'>
                            <img alt='' src='/product4.jpeg' className='h-28 rounded-lg'/>
                            <p className='font-bold'>Box Motif Batik</p>
                            <p className='text-redbg'>Rp50.000</p>
                        </div>
                    </div>
                </section>

            </main>
>>>>>>> 7fdc5a2a438369a238dc90e04b9a3b4326b3d67b
        </>
    )
}

// async function getData() {
//     const filePath = path.join(process.cwd(), 'data.json');
//     const fileData = await fs.promises.readFile(filePath, 'utf-8');
//     const data = JSON.parse(fileData);

//     return data;
// }