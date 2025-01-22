import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="FMK Global Holdings Logo" width={32} height={32} />
          <span className="font-bold">FMK Global Holdings</span>
        </Link>
        <button className="ml-auto md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:relative top-14 md:top-0 left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row items-center gap-4 p-4 md:p-0 md:ml-auto`}
        >
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/accelerator" className="text-sm font-medium hover:underline underline-offset-4">
            Accelerator
          </Link>
          <Link href="/careers" className="text-sm font-medium hover:underline underline-offset-4">
            Careers
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

