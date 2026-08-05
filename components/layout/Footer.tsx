import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa6';
import { IoCodeSlashSharp } from "react-icons/io5";

export default function Footer() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Project', href: '#project' },
    { label: 'Experience', href: '#experience' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/osborn-maja-8811a81b3/',
      icon: <FaLinkedin size={22} />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Bornmajor/',
      icon: <FaGithub size={22} />,
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com/osbornmaja',
      icon: <FaDribbble size={22} />,
    },
  ];

  return (
    <footer className="relative bg-surface text-gray-900 dark:text-gray-100 pt-16 pb-20 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* 1. Logo */}
        <div className="relative w-12 h-12">
          <IoCodeSlashSharp className="w-8 h-8 " />
        </div>

        {/* 2. Headline Quote */}
        <h2 className="text-2xl md:text-3xl font-medium italic tracking-tight text-gray-900 dark:text-white max-w-xl">
          &ldquo;Your next big idea starts here. Let&apos;s chat.&rdquo;
        </h2>

        {/* 3. Direct Email */}
        <div>
          <a
            href="mailto:osbornmaja@gmail.com"
            className="text-lg md:text-xl font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 hover:underline transition-colors"
          >
            osbornmaja@gmail.com
          </a>
        </div>

        {/* 4. Section Scroll Navigation Links */}
        <nav className="pt-4">
          <ul className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-base md:text-lg font-medium text-gray-800 dark:text-gray-200">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 5. Clickable Social Icons */}
        <div className="flex items-center justify-center gap-6 pt-2 text-emerald-700 dark:text-emerald-400">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>

      {/* Thick Horizontal Line at End of Footer (Primary Color) */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
    </footer>
  );
}