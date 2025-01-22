import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/hero-background.jpg" alt="Engineering background" layout="fill" objectFit="cover" quality={100} />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/50 to-blue-500/50"></div>
      </div>
      <div className="container relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Innovate. Invest. Impact.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-8"
        >
          Empowering global innovation in engineering and technology
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

