import CustomNavigationBar from "@/components/navbar";

export default function ProductPage() {
    return(
        <main className="">
            <nav className=''><CustomNavigationBar color='black' currentState={1} url3={'/#profil-suhuf'} url4={'/#contact-person'}/></nav>
            <div className="min-h-screen flex justify-center items-center font-bold font-rubik text-8xl animate-fade duration-500">
                Product Page
            </div>
        </main>
    )
}