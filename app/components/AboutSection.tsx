import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import { motion } from "framer-motion"
import Link from "next/link" // Import Link component
import { Button } from "@/components/ui/button" // Updated import statement

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-orange-50">
      <div className="container">
        <Parallax translateY={[-20, 20]}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            About FMK Global Holdings
          </h2>
        </Parallax>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4">
              FMK Global Holdings is a dynamic conglomerate at the forefront of engineering innovation and technological
              advancement. With a diverse portfolio spanning multiple industries, we're committed to driving progress
              and creating lasting value.
            </p>
            <p className="text-lg mb-6">
              Our mission is to empower visionaries, support groundbreaking projects, and foster a global ecosystem of
              innovation that shapes the future of engineering and technology.
            </p>
            <Link href="/about">
              <Button className="bg-gradient-to-r from-blue-600 to-orange-600 text-white">Discover Our Vision</Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="/about-image.jpg"
              alt="FMK Global Holdings Team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

