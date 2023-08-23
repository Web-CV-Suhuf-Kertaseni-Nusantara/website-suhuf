import Image from "next/image";

export default function CustomFooter() {
    return(
        <main className="grid grid-cols-3 ">
            <div className="w-full grid grid-cols-2  place-items-center p-4">
                <div><Image src={'/business-partner.svg'} alt="" height={0} width={0} sizes='20px' className="w-48"/></div>
                <div><Image src={'/footer-img2.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/></div>
                <div><Image src={'/footer-img1.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/></div>
                <div><Image src={'/footer-img3.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/></div>
            </div>
            <div className="w-full grid grid-cols-1 place-items-center p-4">
                <div><Image src={'/dapat-di-temukan.svg'} alt="" height={0} width={0} sizes='20px' className="w-48"/></div>
                <div><Image src={'/footer-img4.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/></div>
                <div><Image src={'/footer-img5.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/></div>
            </div>
            <div className="w-full grid grid-cols-1  place-items-center p-4">
                <div><Image src={'/business-partner.svg'} alt="" height={0} width={0} sizes='20px' className="w-48"/></div>
                <div className="grid grid-cols-2">
                    <Image src={'/footer-img6.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/>
                    <Image src={'/footer-img7.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/>
                </div>
            </div>
        </main>
    )
}