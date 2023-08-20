import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] }, )

export default function Dashboard3() {
    const product = [
        { img: '/need1.png', deskripsi: 'Best Seller'},
        { img: '/need2.png', deskripsi: 'Most Searched'},
        { img: '/need3.png', deskripsi: 'New Collection'},
        { img: '/need4.png', deskripsi: 'Hot Deals'},
    ]
    return(
        <main className="flex flex-col w-auto h-auto justify-center items-center px-[140px] mt-20">
            <section className="bg-white px-20 py-10 rounded-3xl">
                <Link href={'/product'} className="h-full md:flex grid grid-cols-2 w-[500px] md:w-[auto] md:flex-row gap-10">
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
            </section>
            <div className="w-[100%] ml-24 font-bold text-white text-5xl mt-24 mb-5">Apa yang anda butuhkan?</div>
            <div className="w-full grid grid-cols-2 pl-5 gap-2">
                <div style={{backgroundImage: `url(${product[0].img})`, backgroundSize: 'cover', backgroundPositionX: '-30px', backgroundRepeat: 'no-repeat', width: '600px', height: '600px' }} 
                    className="text-white text-5xl place-content-end justify-start pb-10 pl-10 grid font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                        <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">{product[0].deskripsi}</p>
                </div>
                <div style={{backgroundImage: `url(${product[1].img})`, backgroundSize: 'cover', backgroundPositionX: '-30px', backgroundRepeat: 'no-repeat', width: '600px', height: '600px' }} 
                    className="text-white text-5xl place-content-start justify-end pt-10 pr-10 grid font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
                        <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">{product[1].deskripsi}</p>
                </div>
                <div style={{backgroundImage: `url(${product[2].img})`, backgroundSize: 'cover', width: '600px', height: '600px' }} 
                    className="text-white text-5xl place-content-start pl-10 pt-10 grid font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] mt-2">
                        <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">{product[2].deskripsi}</p>
                </div>
                <div style={{backgroundImage: `url(${product[3].img})`, backgroundSize: 'cover', width: '600px', height: '600px' }} 
                    className="text-white text-5xl place-content-end pr-10 pb-10 grid font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] mt-2">
                        <p className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">{product[3].deskripsi}</p>
                </div>
            </div>
        </main>
    )
}