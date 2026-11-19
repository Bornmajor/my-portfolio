import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { HiDocumentText, HiEnvelope } from "react-icons/hi2";
import heroImage from "@/public/images/yg8ippqhbclvkiss7aah.png"

const RESUME_URL = "https://drive.google.com/file/d/1-mxCweTTyAIFSK3XlevlVnnFdbNReE9Y/view?usp=sharing";

const contactLinks = [
    { label: "Email", href: "mailto:osbornmaja@gmail.com", icon: <HiEnvelope size={22} />, external: false },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/osborn-maja-8811a81b3/", icon: <FaLinkedin size={22} />, external: true },
    { label: "GitHub", href: "https://github.com/Bornmajor/", icon: <FaGithub size={22} />, external: true },
];

export default function Intro(){
    return (
        <section id="about" className="flex flex-col items-center justify-center bg-background font-montserrat my-8 py-20 scroll-mt-20">
               <Image
                src={heroImage}
                alt="Hero Image"
                width={350}
                />
               <h1 className="text-4xl mb-3">Hey I'm Osborn</h1>
               <h2 className="text-2xl mb-5">Mobile engineer</h2>
               <p className="text-muted-foreground text-center max-w-xl">Mobile Engineer specializing in native development with clean architecture (MVVM/MVI), writing scalable, test-driven code that delivers premium user experiences.</p>

               <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                   <a
                       href={RESUME_URL}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-800"
                   >
                       <HiDocumentText className="h-5 w-5" />
                       <span>View Resume</span>
                   </a>
                   <div className="flex items-center gap-4 text-emerald-700 dark:text-emerald-400">
                       {contactLinks.map((link) => (
                           <a
                               key={link.label}
                               href={link.href}
                               aria-label={link.label}
                               {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                               className="transition-transform hover:scale-110 hover:text-emerald-800 dark:hover:text-emerald-300"
                           >
                               {link.icon}
                           </a>
                       ))}
                   </div>
               </div>
        </section>
    )
}
