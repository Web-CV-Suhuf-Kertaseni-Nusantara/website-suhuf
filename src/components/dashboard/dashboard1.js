import Image from "next/image";
import Link from "next/link";

export default function Dashboard1() {
    return(
        <>
            <div className="font-black font-rubik text-6xl text-white">Produk<br/>Unggulan</div>
            <Link href='/product' className="flex flex-row items-center mt-10 outline-none outline-offset-0 outline-8 outline-white rounded-3xl pl-5 pr-3 pb-1 bg-gradient-to-r from-[#E30A17] to-[#895A01] w-fit z-10">
                    <p className="mr-[150px] text-white font-bold font-rubik">Lihat Semua Produk</p>
                    <Image src="/hand.svg" alt="" width={35} height={35} className="p-0 self-center mt-2"/>
            </Link>
            
            <p className="text-white italic text-lg mt-5">
                Suhuf Kertaseni Nusantara yaitu Suatu unit usaha <br/> yang bergerak dalam bidang pembuatan kertas <br/> seni, 
                kertas daur ulang dan kerajinan tangan <br/> dengan bahan utama berupa kertas seni <br/> dan serat alami. 
            </p>
            
            
        </>
    )
}