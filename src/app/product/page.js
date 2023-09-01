'use client'

import CustomFooter from "@/components/footer";
import CustomNavigationBar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export default function ProductPage({ query }) {
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState()
    const [cardHover, setCardHover] = useState(false)
    const [shortByOpen, setShortByOpen] = useState(false)
    const [category, setCategory] = useState()
    const router = useRouter()



    const handleShortByOpen = () => {
        setShortByOpen(!shortByOpen)
    }

    const onCategoryChange = e => {
        setCategory(e.target.value)
    }

    async function getData() {
        const res = await fetch('http://localhost:5000/product')
        const data = await res.json();
        setProducts(data)

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
    }

    useEffect(() => {
        getData()
        console.log(query);
    }, [])


    return (
        <>
            <nav className=''><CustomNavigationBar color='black' color2='white' currentState={1} url3={'/#profil-suhuf'} url4={'/#contact-person'} /></nav>
            <div className='flex justify-between items-center space-x-4 px-2 lg:px-20 mt-10'>
                <div className='flex space-x-2 w-1/3'>
                    <p className='text-sm font-bold text-gray-800'>Showing 1 - 9</p> <p className='text-sm text-gray-500'> out of 24 products</p>
                </div>

                <form className='w-full hidden'>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for an item" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>

                <div className='flex items-center space-x-2 w-1/3 justify-end relative'>
                    <div className='flex items-center space-x-1 cursor-pointer' onClick={handleShortByOpen}>
                        <p className='text-sm text-gray-500'> Short by :</p><p className='text-sm font-bold text-gray-800'>New Arrival</p>
                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </div>
                    {shortByOpen && <div id="dropdown" className="z-10 absolute top-9 bg-white divide-y divide-gray-100 border-gray-200 border rounded-lg shadow w-44 ">
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">A-Z</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Price</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Date</a>
                            </li>
                        </ul>
                    </div>}
                </div>
            </div>


            <div className='mt-10 flex flex-col lg:flex-row lg:space-x-5 px-2 lg:px-20'>
                <div className='lg:w-1/4 lg:flex grid grid-cols-2 gap-10 lg:flex-col mb-10'>
                    <div className="max-w-xs">
                        <h1 className='font-bold text-left '>PRICE</h1>
                        <h1 className='text-gray-600 text-left text-sm mt-5'>Range</h1>
                        <div className='flex justify-between space-x-3 mt-3 items-center'>
                            <input type="number" id="default-number" className="block w-full py-4 px-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " required />
                            <h1 className='text-xl font-bold'>-</h1>
                            <input type="number" id="default-number" className="block w-full py-4 px-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " required />

                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold text-left'>CATEGORIES</h1>
                        <div className='mt-5 grid grid-cols-2 lg:grid-cols-1 gap-5'>
                            <div className="flex items-center">
                                <input id="default-radio" name="category" type="radio" value="All" checked={"Alat%Make%Up" == category} onChange={onCategoryChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio" className="ml-2 text-sm font-medium text-gray-600 ">All</label>
                            </div>

                            <div className="flex items-center">
                                <input id="default-radio" name="category" type="radio" value="Alat Make Up" checked={"Alat Make Up" == category} onChange={onCategoryChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio" className="ml-2 text-sm font-medium text-gray-600 ">Alat Make Up</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio" name="category" type="radio" value="Figura" checked={"Figura" == category} onChange={onCategoryChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio" className="ml-2 text-sm font-medium text-gray-600 ">Figura</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio" name="category" type="radio" value="Box%Kado" checked={"Box%Kado" == category} onChange={onCategoryChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio" className="ml-2 text-sm font-medium text-gray-600 ">Box Kado</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio" name="category" type="radio" value="Alat%Tulis" checked={"Alat%Tulis" == category} onChange={onCategoryChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio" className="ml-2 text-sm font-medium text-gray-600 ">Alat Tulis</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio" name="category" type="radio" value="pernak-pernik" checked={"pernak-pernik" == category} onChange={onCategoryChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio" className="ml-2 text-sm font-medium text-gray-600 ">Pernak-pernik</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio" name="category" type="radio" value="Kertas%Daur%Ulang" checked={"Kertas%Daur%Ulang" == category} onChange={onCategoryChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-radio" className="ml-2 text-sm font-medium text-gray-600 ">Kertas Daur Ulang</label>
                            </div>
                        </div>
                    </div>


                    <Link href={`http://localhost:5000/product$category=${category}`} className=" border-yellow-600 border-2 text-center rounded-full col-span-2 p-3 text-neutral-900  transition-colors">
                        FILTER
                    </Link>
                </div>

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