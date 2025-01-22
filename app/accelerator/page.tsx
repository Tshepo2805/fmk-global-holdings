"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

const successStories = [
  {
    name: "EcoTech Solutions",
    founder: "Aisha Nkosi",
    description: "Developed sustainable water purification technology, now serving over 100,000 people across Africa.",
    image: "/images/success-story-1.jpg",
  },
  {
    name: "AgriConnect",
    founder: "Thabo Moyo",
    description: "Created an AI-powered app connecting small-scale farmers to markets, increasing incomes by 40%.",
    image: "/images/success-story-2.jpg",
  },
  {
    name: "HealthBridge",
    founder: "Zainab Osei",
    description:
      "Launched a telemedicine platform, providing healthcare access to remote areas and serving 500,000+ patients.",
    image: "/images/success-story-3.jpg",
  },
]

const timeline = [
  { date: "May 1, 2023", event: "Applications Open" },
  { date: "June 15, 2023", event: "Application Deadline" },
  { date: "July 1-15, 2023", event: "Selection Process" },
  { date: "August 1, 2023", event: "Program Kickoff" },
  { date: "August - October 2023", event: "Intensive Mentorship & Workshops" },
  { date: "November 15, 2023", event: "Demo Day" },
]

const faqs = [
  {
    question: "Who is eligible to apply?",
    answer:
      "Early-stage startups based in Africa, with a focus on technology and engineering solutions. We're looking for innovative ideas that have the potential to make a significant impact.",
  },
  {
    question: "What kind of support does the program offer?",
    answer:
      "Our program provides mentorship from industry experts, seed funding, access to state-of-the-art facilities, networking opportunities with investors, and tailored workshops to accelerate your startup's growth.",
  },
  {
    question: "How long is the accelerator program?",
    answer:
      "The core program runs for 3 months, from August to November. However, we provide ongoing support and networking opportunities to our alumni.",
  },
  {
    question: "Is funding provided as part of the program?",
    answer:
      "Yes, selected startups receive seed funding. The exact amount varies and is determined based on the startup's needs and potential.",
  },
  {
    question: "Do I need to relocate to participate?",
    answer:
      "While the program is primarily based in Gaborone, Botswana, we offer a hybrid model with both in-person and virtual components to accommodate startups from across Africa.",
  },
]

export default function AcceleratorPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date("2023-06-15") - +new Date()
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
            src="/images/accelerator-hero.jpg"
            alt="Entrepreneurs collaborating"
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
            Empowering Africa's Next Innovators
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Accelerating start-ups through mentorship, funding, and innovation
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8, delay: 0.4 }}>
            <Link href="/accelerator/apply">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Program Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Parallax translateY={[-20, 20]}>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Who It's For</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Early-stage start-ups in Africa</li>
                  <li>Innovators in tech and engineering</li>
                  <li>Visionaries with scalable ideas</li>
                </ul>
              </div>
            </Parallax>
            <Parallax translateY={[20, -20]}>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Expert mentorship and guidance</li>
                  <li>Seed funding opportunities</li>
                  <li>Networking with industry leaders</li>
                  <li>State-of-the-art resources and facilities</li>
                </ul>
              </div>
            </Parallax>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl mb-4">Program Duration: 3 months intensive, with ongoing support</p>
            <p className="text-xl">Location: Gaborone, Botswana (with virtual components)</p>
          </div>
        </div>
      </section>

      {/* Key Features and Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Key Features and Benefits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧠",
                title: "Expert Mentorship",
                description: "Learn from industry leaders and seasoned entrepreneurs",
              },
              {
                icon: "💰",
                title: "Funding Opportunities",
                description: "Access to seed funding and investor networks",
              },
              { icon: "🤝", title: "Networking Events", description: "Connect with potential partners and customers" },
              {
                icon: "🏢",
                title: "World-class Facilities",
                description: "Work from our state-of-the-art innovation hub",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4">Founded by {story.founder}</p>
                  <p>{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-20 bg-gradient-to-r from-blue-100 to-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Program Timeline
          </h2>
          <div className="relative">
            {timeline.map((item, index) => (
              <div key={index} className="mb-8 flex items-center">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  {index < timeline.length - 1 && <div className="h-full w-0.5 bg-blue-600"></div>}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.event}</h3>
                  <p className="text-gray-600">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Application Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Fill out the application form",
                description: "Provide details about your startup and team",
              },
              {
                step: 2,
                title: "Submit your pitch deck",
                description: "Share your vision, market opportunity, and business model",
              },
              {
                step: 3,
                title: "Attend an interview",
                description: "If selected, pitch your idea to our panel of experts",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/accelerator/apply">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-600 text-white">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Application Deadline</h2>
          <div className="flex justify-center space-x-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/20 rounded-lg p-4">
                <div className="text-4xl font-bold mb-2">{value}</div>
                <div className="text-sm uppercase">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="mb-4">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                      <span>{faq.question}</span>
                      <ChevronDownIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-gray-500`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">{faq.answer}</Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-orange-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: accelerator@fmkglobal.com</p>
              <p>Phone: +267 123 4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://twitter.com/fmkglobalholdings" className="hover:text-blue-300">
                  Twitter
                </Link>
                <Link href="https://www.linkedin.com/company/fmkglobalholdings" className="hover:text-blue-300">
                  LinkedIn
                </Link>
                <Link href="https://www.facebook.com/fmkglobalholdings" className="hover:text-blue-300">
                  Facebook
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/accelerator/guidelines" className="hover:text-blue-300">
                    Program Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/accelerator#faqs" className="hover:text-blue-300">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; {new Date().getFullYear()} FMK Global Holdings Accelerator Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

