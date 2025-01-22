"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const services = [
  {
    category: "Engineering Solutions",
    items: [
      {
        title: "Turnkey Engineering Solutions",
        description: "End-to-end project management and execution for complex engineering projects.",
        icon: "/icons/turnkey.svg",
        details: [
          "Comprehensive project planning and design",
          "Efficient resource allocation and management",
          "Quality assurance and control throughout the project lifecycle",
          "Timely delivery and handover of completed projects",
        ],
      },
      {
        title: "Structural Engineering",
        description: "Expert structural design and analysis for buildings and infrastructure.",
        icon: "/icons/structural.svg",
        details: [
          "Advanced 3D modeling and simulation",
          "Seismic analysis and design",
          "Retrofit and rehabilitation of existing structures",
          "Compliance with international building codes and standards",
        ],
      },
      {
        title: "Sustainable Engineering",
        description: "Innovative solutions for environmentally friendly and energy-efficient projects.",
        icon: "/icons/sustainable.svg",
        details: [
          "Green building design and certification (LEED, BREEAM)",
          "Renewable energy integration",
          "Waste reduction and management strategies",
          "Life cycle assessment and optimization",
        ],
      },
    ],
  },
  {
    category: "Tech Innovation",
    items: [
      {
        title: "AI and Machine Learning Solutions",
        description: "Cutting-edge AI technologies to optimize processes and drive innovation.",
        icon: "/icons/ai.svg",
        details: [
          "Custom AI model development and training",
          "Machine learning integration for predictive maintenance",
          "Natural language processing for improved customer interactions",
          "Computer vision applications for quality control and safety",
        ],
      },
      {
        title: "IoT and Smart Systems",
        description: "Interconnected device ecosystems for enhanced data collection and control.",
        icon: "/icons/iot.svg",
        details: [
          "Smart sensor networks for real-time monitoring",
          "Edge computing solutions for faster data processing",
          "Cloud integration for scalable data storage and analysis",
          "Custom dashboards and control interfaces",
        ],
      },
      {
        title: "Blockchain Technology",
        description: "Secure and transparent solutions for supply chain and data management.",
        icon: "/icons/blockchain.svg",
        details: [
          "Smart contract development and implementation",
          "Decentralized application (DApp) creation",
          "Supply chain tracking and verification systems",
          "Secure digital identity management",
        ],
      },
    ],
  },
  {
    category: "Mining Projects",
    items: [
      {
        title: "Mine Planning and Design",
        description: "Comprehensive planning and design services for efficient and safe mining operations.",
        icon: "/icons/mine-planning.svg",
        details: [
          "Geological modeling and resource estimation",
          "Open-pit and underground mine design",
          "Production scheduling and optimization",
          "Environmental impact assessment and mitigation planning",
        ],
      },
      {
        title: "Mining Process Optimization",
        description: "Advanced techniques to improve mineral extraction and processing efficiency.",
        icon: "/icons/process-optimization.svg",
        details: [
          "Mineral processing flowsheet development",
          "Equipment selection and optimization",
          "Automation and control system implementation",
          "Energy efficiency and cost reduction strategies",
        ],
      },
      {
        title: "Mine Rehabilitation",
        description: "Sustainable solutions for mine closure and land reclamation.",
        icon: "/icons/rehabilitation.svg",
        details: [
          "Post-mining land use planning",
          "Soil and water remediation techniques",
          "Ecosystem restoration and biodiversity enhancement",
          "Long-term monitoring and maintenance programs",
        ],
      },
    ],
  },
]

export default function ExploreServicesPage() {
  const [selectedService, setSelectedService] = useState(null)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", contactForm)
    alert("Thank you for your interest. We will get back to you soon!")
    setContactForm({ name: "", email: "", message: "" })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Explore Our Services
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Discover how FMK Global Holdings can empower your business with cutting-edge solutions in engineering,
          technology, and mining.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              {category.items.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  className="bg-white rounded-lg shadow-md p-6 mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => setSelectedService(service)}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ delay: categoryIndex * 0.1 + serviceIndex * 0.05 }}
                >
                  <div className="flex items-center mb-2">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-semibold mb-4">{selectedService.title}</h2>
              <p className="text-gray-600 mb-4">{selectedService.description}</p>
              <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside mb-4">
                {selectedService.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <Button onClick={() => setSelectedService(null)}>Close</Button>
            </div>
          </motion.div>
        )}

        <motion.div
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Us for More Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input type="text" id="name" name="name" value={contactForm.name} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

