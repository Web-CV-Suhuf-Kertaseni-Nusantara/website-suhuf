import Image from "next/image";

export default function ProfilSuhuf() {
    return(
        <main className="bg-gray-100 flex flex-col px-10 md:pt-5 md:pb-0 pb-5 pt-5 rounded-3xl text-gray-800">
            <div className="font-bold text-lg md:text-2xl mb-2 md:self-start self-center"><p>About Us</p></div>
            <div className="md:text-base text-xs flex flex-row md:items-start h-40 md:h-[100%] overflow-y-scroll">
                <p className="">
                    <span>
                    <Image src={'/suhuf.png'} height={0} width={0} sizes='15px' alt='' className="float-right block md:hidden w-24"/>
                    </span>
                    <span className="font-bold">Suhuf Kertaseni Nusantara</span> merupakan suatu unit usaha yang bergerak dalam pembuatan kertas seni, 
                    kertas daur ulang dan kerajinan tangan dengan bahan utama berupa kertas seni dan serat alami. 
                    Pendirian SUHUF Art Paper didorong oleh kenyataan bahwa minat masyarakat terhadap pengguna kriya kertas seni 
                    buatan tangga dari daur ulang limbah kertas dan bahan-bahan alami (sering disebut dengan art paper dan hand-made paper) 
                    yang semakin meningkat, terutama untuk digunakan sebagai bahan produk kriya cindramata. Umumnya produk yang dihasilkan 
                    adalah berupa kertas buatan tangan, alat tulis, bingkai foto, kartu ucapan, kartu undangan, buku catatan, kotak atau box Hadiah dan 
                    bahan-bahan dasar untuk untuk hiasan lainnya yang terbuat dari serat alami.
                </p>
                <Image src={'/suhuf.png'} height={0} width={0} sizes='200px' alt='' className="md:block hidden -translate-y-5 w-auto"/>
                
            </div>
        </main>
    )
}