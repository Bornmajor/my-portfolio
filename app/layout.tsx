import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteTitle = "Osborn Maja | Software Developer (Flutter, Kotlin & TypeScript)";
const siteDescription =
  "Software developer building and shipping production fintech apps with Flutter, Kotlin and TypeScript. Clean architecture, test-driven code, real users.";

export const metadata: Metadata = {
  metadataBase: new URL("https://majasociet.netlify.app"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Osborn Maja",
    type: "website",
    images: [{ url: "/images/yg8ippqhbclvkiss7aah.png", alt: "Osborn Maja" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/yg8ippqhbclvkiss7aah.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
