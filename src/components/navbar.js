'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CustomNavigationBar({ color, color2, url3, url4, currentState = 0 }) {
    const [select, setSelect] = useState(currentState);
    const [dropdown, setDropdown] = useState(true);
    const [search, setSearch] = useState("");


    return (
        <>
            <div className={`flex flex-row md:justify-end text-${color} w-full font-rubik px-3 md:px-20 pt-7 pb-2 mb-2`}>
                <button onClick={() => setDropdown(!dropdown)} className="md:hidden flex bg-gradient-to-r from-redbg to-yellow-800 rounded-lg outline-white outline-none outline-1 w-8 h-8 p-2 self-center">
                    <Image src={'/menu.svg'} alt="" width={0} height={0} sizes="1px" className="h-auto w-full" />
                </button>
                <div className={`${dropdown ? 'hidden' : 'block'} md:hidden w-full z-20 absolute flex flex-col divide-y-2 bg-white text-black rounded-xl p-3 translate-y-12 -translate-x-1 animate-dropdown`}>
                    <Link href={'/'} onClick={() => setSelect(0)} className={`${select == 0 ? 'font-bold' : 'font-semibold'} py-1`}>Home</Link>
                    <Link href={'/product'} onClick={() => setSelect(1)} className={`${select == 1 ? 'font-bold' : 'font-semibold'} py-1`}>All Product</Link>
                    <a href={url3} onClick={() => setSelect(2)} className={`${select == 2 ? 'font-bold' : 'font-semibold'} py-1`}>Profil Suhuf</a>
                    <a href={url4} onClick={() => setSelect(3)} className={`${select == 3 ? 'font-bold' : 'font-semibold'} py-1`}>Contact Person</a>
                    <a href={'/login'} onClick={() => setSelect(4)} className={`${select == 4 ? 'font-bold' : 'font-semibold'} py-1`}>Login</a>
                </div>

                <div className={`hidden md:flex flex-row items-center w-full`}>
                    <Image src="/icon.png" alt="" width={0} height={0} sizes="50px" className="w-auto self-center ml-2 " />
                    <p className="text-white font-bold">Suhuf Kertaseni</p>
                    <div className="grow" />
                    <div className="group flex flex-col h-10 mt-3 mr-6 text-lg">
                        <Link href={'/'} rel="preload" onClick={() => setSelect(0)} className={`${select == 0 ? 'font-bold' : 'font-semibold'} hover:scale-105 `}>Home</Link>
                        <div className="grow"></div>
                        {select === 0 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg transition-all duration-700" />}
                    </div>
                    <div className="flex flex-col h-10 mt-3 text-lg mr-6 group">
                        <Link href={'/product'} onClick={() => setSelect(1)} className={`${select == 1 ? 'font-bold' : 'font-semibold'} hover:scale-105 `}>All Product</Link>
                        <div className="grow"></div>
                        {select === 1 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg transition-all duration-700" />}
                    </div>
                    <div className="flex flex-col h-10 mt-3 mr-6 text-lg">
                        <a href={url3} onClick={() => setSelect(2)} className={`${select == 2 ? 'font-bold' : 'font-semibold'} hover:scale-105 `}>Profil Suhuf</a>
                        <div className="grow"></div>
                        {select === 2 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg" />}
                    </div>
                    <div className="flex flex-col h-10 mt-3 mr-6 text-lg">
                        <a href={url4} onClick={() => setSelect(3)} className={`${select == 3 ? 'font-bold' : 'font-semibold'} hover:scale-105 `}>Contact Person</a>
                        <div className="grow"></div>
                        {select === 3 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg" />}
                    </div>
                    <div className="flex flex-col h-10 mt-3 mr-6 text-lg">
                        <a href={'/login'} onClick={() => setSelect(4)} className={`${select == 4 ? 'font-bold' : 'font-semibold'} hover:scale-105`}>Login</a>
                        <div className="grow"></div>
                        {select === 4 && <hr className="animate-scale h-1 w-5 self-center rounded-full border-none bg-redbg" />}
                    </div>
                </div>
                <div className="grow" />
                <div className={`self-center flex flex-row bg-white ${color2 === 'white' && 'outline-none'} outline-gray-400 rounded-full pl-3 pt-1 pb-1 pr-1 `}>
                    <input type="text" placeholder="Cari Produk Disini" className="pl-1 md:w-[250px] text-[14px] text-black outline-0 italic rounded-full" />
                    <button className="w-[120px] h-8 pl-2 flex flex-row items-center bg-gradient-to-r from-red-600 to-yellow-800 rounded-full">
                        <p className={`font-bold font-rubik text-sm text-${color2}`}>Cari Produk</p>
                        <Image src="/search.svg" alt="" width={0} height={0} sizes="auto" className="self-center ml-2 w-3" />
                    </button>
                </div>
            </div>
            <hr className="h-px bg-black md:mx-20" />
        </>
    )
}