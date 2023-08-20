import Image from "next/image";
import Link from "next/link";

export default function RekomendasiProduct() {
    const product = {
        name: 'BOX KADO HFC 17',
        img: '/product1.jpeg'
    }
    return(
        <>
            <div className="h-[210px] w-[300px] px-3">
                <div className='bg-white/[.3] backdrop-blur-sm bg-blend-saturation rounded-t-2xl flex flex-col items-center gap-2 h-full'>
                    <h1 className='text-white font-rubik font-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] text-md mt-2'>Rekomendasi</h1>
                    <Image src={product.img} alt='' height={180} width={210} className="rounded-2xl"/>
                    <p className="text-xs font-rubik text-white">{product.name}</p>
                </div>
            </div>
            <Link href={'/product/detail'} className="bg-redbg flex items-center px-5 py-2 z-10 rounded-xl">
                <p className="text-white font-rubik font-medium text-sm">Lihat Detail Product</p>
                <div className="grow"></div>
                <Image src="/hand.svg" alt="" width={35} height={35} className="p-0 self-center mt-1"/>
            </Link>
        </>
    )
}