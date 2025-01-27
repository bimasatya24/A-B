import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "shopmaster",
  description: "a complete e-commerce website for gamers",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
