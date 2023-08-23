import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard1() {

    return(
        <>
            <div className="font-black font-rubik text-3xl md:text-6xl text-white">Produk <br/>Unggulan</div>
            
            <Link href='/product' className="flex flex-row items-center outline-none outline-offset-0 
                outline-8 outline-white rounded-3xl pl-5 pr-3 pb-1 md:mt-10 mt-5 bg-gradient-to-r from-[#E30A17] to-[#895A01] w-fit z-10">
                    <p className="md:mr-[150px] text-white font-bold font-rubik">Lihat Semua Produk</p>
                    <Image src="/hand.svg" alt="" width={0} height={0} sizes="10px" className="flex md:w-10 w-7 self-center mt-2"/>
            </Link>
            
            <p className="text-white italic text-xs md:text-lg mt-5 md:w-full text-left">
                Suhuf Kertaseni Nusantara yaitu Suatu<br className="block md:hidden"/> unit usaha <br className="hidden md:block"/> yang 
                bergerak dalam bidang<br className="block md:hidden"/> pembuatan kertas <br className="hidden md:block"/> seni, 
                kertas daur ulang <br className="block md:hidden"/> dan 
                kerajinan tangan <br className="hidden md:block"/> dengan bahan <br className="block md:hidden"/> utama berupa kertas 
                seni <br className="hidden md:block"/> dan serat alami. 
            </p>
            
            
        </>
    )
}