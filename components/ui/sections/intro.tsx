import Image from "next/image";
import heroImage from "@/public/images/yg8ippqhbclvkiss7aah.png"

export default function Intro(){
    return (
        <section id="hero" className="flex flex-col items-center justify-center bg-background font-montserrat">
               <Image 
                src={heroImage}
                alt="Hero Image"
                width={350}
                />
               <h1 className="text-4xl mb-3">Hey I'm Osborn</h1> 
               <h2 className="text-2xl mb-5">Mobile engineer</h2>
               <p className="text-muted-foreground text-center max-w-xl">Mobile Engineer specializing in native development with clean architecture (MVVM/MVI), writing scalable, test-driven code that delivers premium user experiences.</p>
        </section>
    )
}