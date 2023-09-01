'use client'
import CustomFooter from "@/components/footer";
import CustomNavigationBar from "@/components/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductPage() {
    const [products, setProducts] = useState()

    async function getData() {
        const res = await fetch('http://localhost:5000/product/new-collection')
        const data = await res.json();
        setProducts(data)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <nav className=''><CustomNavigationBar color='black' color2='white' currentState={1} url3={'/#profil-suhuf'} url4={'/#contact-person'} /></nav>
            <div className='mt-10 flex flex-col px-2 lg:px-20'>

                <h1 className="text-3xl font-bold mb-5">New Collection</h1>
                {products && <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {products.map((product) => (
                        <Link href={`/product/${product.name.replace(/ /g, "-").toLowerCase()}`} key={product.uuid} className='rounded-lg border border-gray-400 w-full relative'>
                            <Image className=' rounded-t-lg h-[300px] object-cover w-full' width={0} height={0} sizes="100px" src="/product1.jpeg" alt="" srcset="" />
                            {/* <div className='h-[350px] bg-black bg-opacity-70 absolute flex items-center flex-col justify-center space-y-3 z-10 w-full top-0 rounded-t-lg'>
                            <a className='bg-green-500 text-white py-3 w-[200px] rounded-lg text-sm font-medium' href="/">Tokopedia</a>
                            <a className='bg-orange-500 text-white py-3 w-[200px] rounded-lg text-sm font-medium' href="/">Shopee</a>
                            </div> */}
                            <div className='p-3 text-left'>
                                <h1 className='text-lg font-medium'>{product.name}</h1>
                                <h2 className='text-2xl font-bold mt-5'>Rp {product.price}</h2>
                            </div>
                        </Link>
                    ))}
                </div>}
            </div>
            <section id="contact-person" className='page-3 min-h-fit bg-white mt-32'>
                <CustomFooter />
            </section>
        </>
    )
}