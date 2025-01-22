import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-orange-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Stay Informed
          </h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter for the latest updates on innovation, investments, and industry insights.
          </p>
          <form className="flex gap-4">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button type="submit" className="bg-gradient-to-r from-blue-600 to-orange-600 text-white">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

