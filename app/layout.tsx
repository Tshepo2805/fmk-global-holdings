"use client"

import { Inter } from "next/font/google"
import { ParallaxProvider } from "react-scroll-parallax"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParallaxProvider>
          <div className="flex flex-col min-h-screen max-w-7xl mx-auto border-x border-gray-200 shadow-xl">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ParallaxProvider>
      </body>
    </html>
  )
}



import './globals.css'