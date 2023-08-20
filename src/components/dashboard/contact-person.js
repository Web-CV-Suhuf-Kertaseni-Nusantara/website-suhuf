import Image from "next/image";

export default function ContactPerson() {
    return(
        <main className="grid grid-cols-3 ">
            <div className="w-full grid grid-cols-2  place-items-center p-4">
                <div className="bg- grid self-center"><Image src={'/business-partner.svg'} alt="" height={0} width={0} sizes='20px' className="w-48"/></div>
                <div><Image src={'/footer-img2.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/></div>
                <div><Image src={'/footer-img1.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/></div>
                <div><Image src={'/footer-img3.png'} height={0} width={0} sizes='150px' alt='' className="w-auto"/></div>
            </div>
            <div className="bg-red-200 w-full grid place-content-center">2</div>
            <div className="bg-yellow-500 w-full">3</div>
        </main>
    )
}