"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { HiDocumentText } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { IoCodeSlashSharp } from "react-icons/io5";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

// Google Drive / Docs Link for your Resume
const RESUME_URL = "https://docs.google.com/document/d/1kV1LBVYVcc2wk6oAxXZ9I6c21zLwe5v1/edit?usp=sharing&ouid=105929605492359857069&rtpof=true&sd=true";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-surface backdrop-blur font-montserrat">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold">
          <IoCodeSlashSharp className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
          <span>Osborn Maja</span>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-2">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                {/* Added    prop here */}
                <NavigationMenuLink>
                  <Link href={link.href} className="px-4 py-2 text-base font-semibold hover:text-emerald-700 transition-colors">
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            {/* Resume Link */}
            <NavigationMenuItem>
              {/* Added    prop here */}
              <NavigationMenuLink   >
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-base font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <HiDocumentText className="h-5 w-5" />
                  <span>Resume</span>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger className="md:hidden"   >
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <SheetTitle className="text-xl">Menu</SheetTitle>
            <nav className="mt-8 flex flex-col gap-5">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-lg font-semibold px-2 py-1 hover:text-emerald-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Resume Link */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-lg font-semibold text-emerald-700 hover:text-emerald-800 transition-colors px-2 py-1"
              >
                <HiDocumentText className="h-6 w-6" />
                <span>Resume</span>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}