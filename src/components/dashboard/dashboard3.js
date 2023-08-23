import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const poppins = Poppins({subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] }, )

export default function Dashboard3() {
    const [ resize, setResize ] = useState(true);
    
    const product = [
        { img: '/need1.png', deskripsi: 'Best Seller'},
        { img: '/need2.png', deskripsi: 'Most Searched'},
        { img: '/need3.png', deskripsi: 'New Collection'},
        { img: '/need4.png', deskripsi: 'Hot Deals'},
    ]

    useEffect(() => {
        const handleResize = () => window.innerWidth < 720 ? setResize(false) : setResize(true)
        window.addEventListener('resize', handleResize)

        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    })    
    return(
        <main className="flex flex-col w-full h-auto justify-center items-center md:px-[140px] mt-20">
            <section className="bg-white md:px-20 md:py-10 rounded-3xl">
                { resize == true ? 
                    <Link href={'/product'} className="h-full md:flex w-full md:w-[auto] md:flex-row gap-10">
                        <div style={{backgroundImage: `url('/accessories.jpg')`, backgroundSize: 'cover', width: '230px', height: '230px' }} 
                            className="hover:scale-95 hover:outline-none hover:outline-redbg text-white place-content-center grid font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                                <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">ACCESSORIES</p>
                        </div>
                        <div style={{backgroundImage: `url('/accessories.jpg')`, backgroundSize: 'cover', width: '230px', height: '230px' }} 
                            className="hover:scale-95 hover:outline-none hover:outline-redbg text-white place-content-center grid font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                                <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">ACCESSORIES</p>
                        </div>
                        <div style={{backgroundImage: `url('/accessories.jpg')`, backgroundSize: 'cover', width: '230px', height: '230px' }} 
                            className="hover:scale-95 hover:outline-none hover:outline-redbg text-white place-content-center grid font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                                <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">ACCESSORIES</p>
                        </div>
                        <div style={{backgroundImage: `url('/accessories.jpg')`, backgroundSize: 'cover', width: '230px', height: '230px' }} 
                            className="hover:scale-95 hover:outline-none hover:outline-redbg text-white place-content-center grid font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                                <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">ACCESSORIES</p>
                        </div>
                    </Link> 
                :   <div className="grid grid-cols-2 gap-2 bg-white w-full p-4 rounded-2xl">
                        <Link href={'/product'} className="h-full grid place-items-center">
                            <p className="absolute text-white outline-none outline-white px-2 z-10">accessories</p>
                            <Image src={'/accessories.jpg'} height={0} width={0} sizes="160px" alt="" className="object-cover w-auto brightness-[.75] z-0"/>
                        </Link>
                        <Link href={'/product'} className="h-full grid place-items-center">
                            <p className="absolute text-white outline-none outline-white px-2 z-10">accessories</p>
                            <Image src={'/accessories.jpg'} height={0} width={0} sizes="160px" alt="" className="object-cover w-auto brightness-[.75] z-0"/>
                        </Link>
                        <Link href={'/product'} className="h-full grid place-items-center">
                            <p className="absolute text-white outline-none outline-white px-2 z-10">accessories</p>
                            <Image src={'/accessories.jpg'} height={0} width={0} sizes="160px" alt="" className="object-cover w-auto brightness-[.75] z-0"/>
                        </Link>
                        <Link href={'/product'} className="h-full grid place-items-center">
                            <p className="absolute text-white outline-none outline-white px-2 z-10">accessories</p>
                            <Image src={'/accessories.jpg'} height={0} width={0} sizes="160px" alt="" className="object-cover w-auto brightness-[.75] z-0"/>
                        </Link>
                    </div>}
            </section>
            <div className="w-[100%] pl-6 md:ml-24 font-bold text-white text-2xl md:text-5xl md:mt-24 mt-10 mb-5">Apa yang anda butuhkan?</div>
            {
                resize == true ? 
                <div className="w-full grid grid-cols-2 pl-5 gap-2">
                    <div style={{backgroundImage: `url(${product[0].img})`, backgroundSize: 'cover', backgroundPositionX: '-30px', backgroundRepeat: 'no-repeat', width: '600px', height: '600px' }} 
                        className="text-white text-8xl place-content-end justify-start pb-10 pl-10 grid font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                            <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]"><span className="font-normal">Best</span> <br/> Seller</p>
                    </div>
                    <div style={{backgroundImage: `url(${product[1].img})`, backgroundSize: 'cover', backgroundPositionX: '-30px', backgroundRepeat: 'no-repeat', width: '600px', height: '600px' }} 
                        className="text-white text-6xl place-content-start justify-end pt-10 pr-10 grid font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                            <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-right"><span className="font-normal">Most</span> <br/> Searched</p>
                    </div>
                    <div style={{backgroundImage: `url(${product[2].img})`, backgroundSize: 'cover', width: '600px', height: '600px' }} 
                        className="text-white text-6xl place-content-start pl-10 pt-10 grid font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] mt-2">
                            <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]"><span className="font-normal">New</span> <br/> Collection</p>
                    </div>
                    <div style={{backgroundImage: `url(${product[3].img})`, backgroundSize: 'cover', width: '600px', height: '600px' }} 
                        className="text-white text-8xl place-content-end pr-10 pb-10 grid font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] mt-2">
                            <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-right"><span className="font-normal">Hot</span> <br/> Deals</p>
                    </div>
                </div> : 
                <div className="grid grid-cols-2 gap-3 md:px-3">
                    <Link href={'/product'} className="h-full grid place-items-end">
                            <p className="absolute text-white outline-white z-10 pb-2 pr-2 font-bold text-right"><span className="font-normal">Best</span><br/> Seller</p>
                            <Image src={'/need1.png'} height={0} width={0} sizes="160px" alt="" className="object-cover w-auto brightness-[.75] z-0"/>
                    </Link>
                    <Link href={'/product'} className="h-full grid place-items-start">
                            <p className="absolute text-white outline-white z-10 font-bold"><span className="font-normal">Most</span><br/>Searched</p>
                            <Image src={'/need2.png'} height={0} width={0} sizes="160px" alt="" className="object-cover w-auto brightness-[.75] z-0"/>
                    </Link>
                    <Link href={'/product'} className="h-full w-full flex flex-col place-items-end">
                            <p className="absolute text-white outline-white z-10 text-right font-bold pr-2 pt-2"><span className="font-normal">New</span> <br/>Collection</p>
                            <Image src={'/need3.png'} height={0} width={0} sizes="160px" alt="" className="object-cover w-auto brightness-[.75] z-0"/>
                    </Link>
                    <Link href={'/product'} className="h-full grid place-items-end">
                            <p className="absolute text-white outline-white z-10 text-right font-bold"><span className="font-normal">Hot</span><br/>Deals</p>
                            <Image src={'/need4.png'} height={0} width={0} sizes="160px" alt="" className="object-cover w-auto brightness-[.75] z-0"/>
                    </Link>

                </div>

            }
        </main>
    )
}