import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RekomendasiProduct() {
    const product = {
        name: 'BOX KADO HFC 17',
        img: '/product1.jpeg'
    }

    const [ resize, setResize ] = useState(false);
    useEffect(() =>{
        const handleResize = () => window.innerWidth < 720 ? setResize(false) : setResize(true);
        window.addEventListener('resize', handleResize);
        
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    })

    return(
        <>
            <div className="md:h-[220px] md:w-[300px] h-[140px] w-[200px] px-3">
                <div className='bg-white/[.3] backdrop-blur-sm bg-blend-saturation rounded-t-3xl flex flex-col items-center h-full px-3'>
                    <h1 className='text-white text-sm font-rubik font-black md:text-lg mt-2 md:drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] md:mb-1 mb-2'>Rekomendasi</h1>
                    
                    {
                        resize == true ? <Image src={product.img} alt='' height={0} width={0} sizes="200px" className="rounded-3xl w-full mb-2"/> :
                        <Image src={product.img} alt='' height={0} width={0} sizes="75px" className="rounded-2xl w-full mb-10 -translate-y-1"/>
                    }

                    {/* { resize == true ? null : <p className="text-base md:text-xs font-rubik text-white">{product.name}</p> } */}
                </div>
            </div>
            <Link href={'/product/detail'} className="bg-redbg flex items-center pl-4 pr-1 md:px-5 w-[200px] md:w-full  z-10 rounded-xl">
                <p className="text-white font-rubik font-medium text-sm">Lihat Detail Product</p>
                <div className="grow"></div>
                <div className="md:">
                    {
                        resize == true ? <Image src={'/hand.png'} alt='' height={0} width={0} sizes="40px" className="rounded-2xl w-auto mt-2"/> 
                    : <Image src={'/hand.png'} alt='' height={0} width={0} sizes="40px" className="rounded-2xl w-auto mt-2"/>

                    }
                </div>
            </Link>
        </>
    )
}