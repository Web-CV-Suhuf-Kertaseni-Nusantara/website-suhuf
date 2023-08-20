'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CustomNavigationBar( { color, url3, url4, currentState = 0 } ) {
    const [ select, setSelect ] = useState(currentState);


    return (
        <>
            <div className={`flex flex-row justify-end text-${color} font-rubik px-20 pt-7 pb-2 items-center`}>
                <Image src="/icon.png" alt="" width={50} height={50} className="self-center ml-2"/>
                <p className="text-white font-bold">Suhuf Kertaseni</p>
                <div className="grow"/>
                <div className="group flex flex-col h-10 mt-3 mr-6 text-lg">
                    <Link href={'/'} rel="preload" onClick={() => setSelect(0)} className={`${ select == 0 ? 'font-bold' : 'font-semibold'} hover:scale-105 `}>Home</Link>
                    <div className="grow"></div>
                    { select === 0 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg transition-all duration-700"/> }
                </div>
                <div className="flex flex-col h-10 mt-3 text-lg mr-6 group">
                    <Link href={'/product'} onClick={() => setSelect(1)} className={`${ select == 1 ? 'font-bold' : 'font-semibold'} hover:scale-105 `}>All Product</Link>
                    <div className="grow"></div>
                    { select === 1 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg transition-all duration-700"/> }
                </div>
                <div className="flex flex-col h-10 mt-3 mr-6 text-lg">
                    <a href={url3} onClick={() => setSelect(2)} className={`${ select == 2 ? 'font-bold' : 'font-semibold'} hover:scale-105 `}>Profil Suhuf</a>
                    <div className="grow"></div>
                    { select === 2 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg"/> }
                </div>
                <div className="flex flex-col h-10 mt-3 mr-6 text-lg">
                    <a href={url4} onClick={() => setSelect(3)} className={`${ select == 3 ? 'font-bold' : 'font-semibold'} hover:scale-105 `}>Contact Person</a>
                    <div className="grow"></div>
                    { select === 3 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg"/> }
                </div>
                <div className="flex flex-col h-10 mt-3 mr-6 text-lg">
                    <a href={'/login'} onClick={() => setSelect(4)} className={`${ select == 4 ? 'font-bold' : 'font-semibold'} hover:scale-105`}>Login</a>
                    <div className="grow"></div>
                    { select === 4 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg"/> }
                </div>
                <div className="self-center flex flex-row bg-white rounded-full pl-3 pt-1 pb-1 pr-1">
                    <input type="text" placeholder="Cari Produk Disini" className="w-[250px] text-[14px] text-black outline-0 italic rounded-full"/>
                    <button className="w-[120px] h-8 pl-2 flex flex-row items-center bg-gradient-to-r from-red-600 to-yellow-800 rounded-full">
                        <p className="font-bold font-rubik text-sm">Cari Produk</p>
                        <Image src="/search.svg" alt="" width={15} height={15} className="self-center ml-2"/>
                    </button>
                </div>
            </div>
            <hr className="h-px bg-black mx-20"/>
        </>
    )
}