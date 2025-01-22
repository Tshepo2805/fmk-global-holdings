import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-orange-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              FMK Global Holdings is a leader in engineering innovation and technological advancement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Accelerator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">123 Innovation Street</p>
            <p className="text-sm">Tech City, TC 12345</p>
            <p className="text-sm">contact@fmkglobal.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} FMK Global Holdings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

