import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export function AcceleratorSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date("2023-12-31") - +new Date()
      let timeLeft = {}

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      setTimeLeft(timeLeft)
    }

    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="accelerator" className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10"
        >
          FMK Accelerator Program
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-6">
              Join our cutting-edge accelerator program designed to propel innovative startups to new heights. Benefit
              from mentorship, funding, and access to our global network of industry leaders.
            </p>
            <Link href="/accelerator">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-100">
                Learn More About Our Program
              </Button>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Next Cohort Starts In:</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-white/20 p-3 rounded">
                    <div className="text-3xl font-bold">{value}</div>
                    <div className="text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

