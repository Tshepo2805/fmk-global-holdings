"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const milestones = [
  { year: 2010, event: "FMK Global Holdings founded in Gaborone, Botswana" },
  { year: 2013, event: "Completed first major infrastructure project in Southern Africa" },
  { year: 2015, event: "Launched Tech Innovation division" },
  { year: 2017, event: "Expanded operations to East Africa" },
  { year: 2019, event: "Initiated FMK Accelerator Program for African startups" },
  { year: 2021, event: "Reached 100+ completed projects across Africa" },
  { year: 2023, event: "Established partnerships with leading global tech firms" },
]

const leadershipTeam = [
  {
    name: "Dr. Fatima Kwamboka",
    title: "Founder & CEO",
    bio: "With over 20 years of experience in engineering and business leadership, Dr. Kwamboka founded FMK Global Holdings with a vision to transform Africa through innovative engineering solutions.",
    image: "/images/leader-fatima.jpg",
  },
  {
    name: "Michael Osei",
    title: "Chief Operations Officer",
    bio: "Michael brings 15 years of operational expertise in managing large-scale engineering projects across Africa, ensuring efficient and timely delivery of FMK's solutions.",
    image: "/images/leader-michael.jpg",
  },
  {
    name: "Dr. Amina Diallo",
    title: "Chief Innovation Officer",
    bio: "Leading our Tech Innovation division, Dr. Diallo drives FMK's cutting-edge research and development initiatives, focusing on AI, IoT, and sustainable technologies.",
    image: "/images/leader-amina.jpg",
  },
  {
    name: "John Mutua",
    title: "Chief Financial Officer",
    bio: "With a strong background in finance and African markets, John ensures FMK's financial health and guides our investment strategies for sustainable growth.",
    image: "/images/leader-john.jpg",
  },
]

const impactStats = [
  { label: "Projects Completed", value: "100+" },
  { label: "Countries Impacted", value: "15" },
  { label: "Startups Accelerated", value: "50+" },
  { label: "Jobs Created", value: "10,000+" },
]

export default function AboutPage() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log("Subscribed:", email)
    setEmail("")
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="FMK Global Holdings Impact"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-orange-500/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Engineering Africa's Future, Driving Innovation Today
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Empowering Africa through sustainable engineering, cutting-edge technology, and visionary leadership
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8, delay: 0.4 }}>
            <Link href="#overview">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Discover Our Vision
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="overview" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-lg text-center max-w-3xl mx-auto mb-8"
          >
            FMK Global Holdings is a leader in turnkey engineering solutions, spearheading innovation across Africa. We
            specialize in engineering, mining, tech innovation, and start-up acceleration, with a primary focus on
            Botswana and expanding our impact across the African continent and beyond.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-lg text-center max-w-3xl mx-auto"
          >
            Our multidisciplinary approach allows us to tackle complex challenges, drive sustainable development, and
            foster economic growth throughout the region.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Mission, Vision, and Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Parallax translateY={[-20, 20]} className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p>
                To solve Africa's most pressing challenges through sustainable and innovative engineering solutions,
                empowering communities and driving economic growth.
              </p>
            </Parallax>
            <Parallax translateY={[20, -20]} className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p>
                To be the catalyst for Africa's technological and infrastructural renaissance, creating a future where
                innovation and sustainability go hand in hand.
              </p>
            </Parallax>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Values</h3>
              <ul className="space-y-2">
                {[
                  { icon: "🔍", value: "Integrity" },
                  { icon: "💡", value: "Innovation" },
                  { icon: "🤝", value: "Collaboration" },
                  { icon: "🌱", value: "Sustainability" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History and Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Our Journey
          </h2>
          <div className="relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="mb-8 flex items-center"
              >
                <div className="flex flex-col items-center mr-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  {index < milestones.length - 1 && <div className="h-full w-0.5 bg-blue-600"></div>}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{milestone.year}</h3>
                  <p>{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

