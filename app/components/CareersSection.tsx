import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CareersSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-100 to-blue-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600">
            Join Our Team
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of a dynamic team shaping the future of engineering and technology. Explore exciting career
            opportunities at FMK Global Holdings.
          </p>
          <Link href="/careers">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-blue-600 text-white">
              View Open Positions
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

