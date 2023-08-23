import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const poppins = Poppins({subsets: ['latin'], weight: ['300', '400', '600', '700', '800', '900'] }, )


export default function Dashboard2() {
    const [ resize, setResize ] = useState()

    const product =  [
        { url: '/product1.jpeg', name: 'Box Kado HFC 19', price: 32000},
        { url: '/product2.jpeg', name: 'Box Kado HFC 21', price: 31000},
        { url: '/product3.jpeg', name: 'Box Kado HFC 10', price: 33000},
        { url: '/product4.jpeg', name: 'Box Kado HFC 08', price: 34000},
    ]

    useEffect(() => {
        const handleResize = () => window.innerWidth < 720 ? setResize(false) : setResize(true)
        window.addEventListener('resize', handleResize)

        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    })
    return(
        <main className="flex md:flex-row flex-col h-[100%] px-7 py-10 md:pl-20">
            
            <div className="md:hidden w-full font-poppins border-b-2 border-dashed border-redbg mb-4">
                <p style={poppins.style} className="text-xl font-bold mb-2">Penawaran Menarik Buat Kamu!</p>
            </div>
            <div className="w-full self-center flex flex-col">
                <div className="bg-redbg w-[100%] md:py-2 md:pl-5 md:pr-2 flex flex-row rounded-full">
                    <input className="bg-redbg w-[60%] py-2 outline-0 text-lg rounded-full text-white"/>
                    <div className="grow"/>
                    <button className="flex flex-row md:w-[30%] rounded-full items-center bg-gradient-to-r from-black/50 from-[0%] to-[#895A01] to-[75%] text-white md:px-5 px-3 text-sm">
                        <p className="md:mr-0 mr-2">Cari Produk</p>
                        <div className="grow"/>
                        <Image src={'/search.svg'} alt="" width={0} height={0} sizes="10" className="h-auto w-auto"/>
                    </button>
                </div>
                {/* <input className="bg-redbg w-[82%] py-2"><button>Cari Produk</button></input> */}
                <h1 style={poppins.style} className="font-light text-6xl md:text-8xl mt-5 md:mt-0">We picked<br/>
                        <span>some</span>
                        <span className="font-extrabold font-lato text-redbg ml-5">cool</span><br/>
                        <span className="font-extrabold text-redbg">things</span>
                        <span className="ml-5">for</span><br/>
                        <span>you!*</span>
                </h1>
            </div>
            <div className="flex flex-col md:pl-40 md:pt-32 w-full">
                <div className="hidden md:flex w-full font-poppins border-b-2 border-dashed border-redbg mb-10">
                    <p style={poppins.style} className="text-2xl font-bold md:ml-5">Penawaran Menarik Buat Kamu!</p>
                </div>
                <div className="grid grid-cols-2 w-full gap-3 mt-20 md:mt-0 md:gap-20">
                    {product.map(( prod, i ) => {
                        return (
                            <div key={i} className="flex flex-col">
                                <Link href={'/product'}><Image src={prod.url} alt="" width={0} height={0} sizes="300px" className="p-0 mt-2 rounded-2xl h-full w-auto"/></Link>
                                <p style={poppins.style} className="font-bold ml-4 mt-2">{prod.name}</p>
                                <p style={poppins.style} className="font-medium ml-4">Rp. {Intl.NumberFormat().format(prod.price)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}