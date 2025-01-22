"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
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

const testimonials = [
  {
    name: "John Smith",
    company: "TechCorp Industries",
    quote:
      "FMK Global Holdings delivered an innovative AI solution that transformed our manufacturing process, resulting in a 30% increase in efficiency.",
    image: "/testimonials/john-smith.jpg",
  },
  {
    name: "Sarah Johnson",
    company: "GreenBuild Construction",
    quote:
      "The sustainable engineering expertise provided by FMK helped us achieve LEED Platinum certification for our latest project, setting a new standard in green building.",
    image: "/testimonials/sarah-johnson.jpg",
  },
  {
    name: "Michael Chen",
    company: "MineX Operations",
    quote:
      "FMK's mine planning and optimization services have been instrumental in improving our operational efficiency and reducing environmental impact.",
    image: "/testimonials/michael-chen.jpg",
  },
]

const faqs = [
  {
    question: "What industries does FMK Global Holdings serve?",
    answer:
      "FMK Global Holdings serves a wide range of industries, including but not limited to engineering, construction, mining, technology, and sustainable development. Our expertise spans across various sectors, allowing us to provide comprehensive solutions for diverse client needs.",
  },
  {
    question: "How does FMK ensure the quality of its services?",
    answer:
      "We maintain high-quality standards through rigorous quality assurance processes, continuous training of our staff, and adherence to international standards and best practices. We also employ cutting-edge technologies and methodologies to ensure the best outcomes for our clients.",
  },
  {
    question: "Can FMK handle projects of any scale?",
    answer:
      "Yes, FMK Global Holdings has the capacity and expertise to handle projects of various scales, from small local initiatives to large-scale international projects. Our team is equipped to adapt our services to meet the specific requirements of each project, regardless of its size or complexity.",
  },
  {
    question: "How does FMK incorporate sustainability into its services?",
    answer:
      "Sustainability is a core principle in all our services. We integrate environmentally friendly practices, energy-efficient solutions, and sustainable materials in our engineering and mining projects. Our tech innovations also focus on optimizing resource use and reducing environmental impact.",
  },
  {
    question: "What support does FMK provide after project completion?",
    answer:
      "FMK offers comprehensive post-project support, including maintenance services, performance monitoring, and continuous optimization. We remain committed to our clients' success beyond the project completion, ensuring long-term value and sustainability of our solutions.",
  },
]

export default function ServicesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Engineering and innovation"
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
            Innovative Solutions, Unmatched Expertise
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Empowering industries through cutting-edge engineering, tech innovation, and sustainable mining practices
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Our Expertise
          </h2>
          {services.map((category, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">{category.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, serviceIndex) => {
                  const [ref, inView] = useInView({
                    triggerOnce: true,
                    threshold: 0.1,
                  })

                  return (
                    <motion.div
                      key={serviceIndex}
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={fadeIn}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() => setSelectedService(service)}
                    >
                      <div className="p-6">
                        <Image
                          src={service.icon || "/placeholder.svg"}
                          alt={service.title}
                          width={64}
                          height={64}
                          className="mb-4"
                        />
                        <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <Button className="w-full">Learn More</Button>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
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

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-all duration-300 ease-in-out"
                animate={{ x: `-${activeTestimonial * 100}%` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-2xl mx-auto text-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mx-auto mb-4"
                      />
                      <p className="text-lg mb-4">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-2 ${activeTestimonial === index ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
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

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                />
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
                  rows={4}
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

