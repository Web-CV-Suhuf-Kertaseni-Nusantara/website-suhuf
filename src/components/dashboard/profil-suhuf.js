import Image from "next/image";

export default function ProfilSuhuf() {
    return(
        <main className="bg-gray-100 flex flex-col p-10 rounded-3xl text-gray-800 text-justify">
            <div className="font-bold text-2xl">About Us</div>
            <div className="font-regular flex flex-row items-center">
                <p>
                    <span className="font-bold">Suhuf Kertaseni Nusantara</span> merupakan suatu unit usaha yang bergerak dalam pembuatan kertas seni, 
                    kertas daur ulang dan kerajinan tangan dengan bahan utama berupa kertas seni dan serat alami. 
                    Pendirian SUHUF Art Paper didorong oleh kenyataan bahwa minat masyarakat terhadap pengguna kriya kertas seni 
                    buatan tangga dari daur ulang limbah kertas dan bahan-bahan alami (sering disebut dengan art paper dan hand-made paper) 
                    yang semakin meningkat, terutama untuk digunakan sebagai bahan produk kriya cindramata. Umumnya produk yang dihasilkan 
                    adalah berupa kertas buatan tangan, alat tulis, bingkai foto, kartu ucapan, kartu undangan, buku catatan, kotak atau box Hadiah dan 
                    bahan-bahan dasar untuk untuk hiasan lainnya yang terbuat dari serat alami.
                </p>
                <Image src={'/suhuf.png'} height={0} width={0} sizes='250px' alt='' className="w-auto"/>
            </div>
        </main>
    )
}