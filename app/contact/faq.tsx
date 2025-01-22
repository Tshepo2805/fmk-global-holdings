"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "lucide-react"

const faqData = [
  {
    question: "What industries does FMK Global Holdings serve?",
    answer:
      "FMK Global Holdings serves a wide range of industries, including engineering, technology, mining, and sustainable development across Africa.",
  },
  {
    question: "How can I apply for the FMK Accelerator Program?",
    answer:
      "You can apply for our Accelerator Program through the dedicated page on our website. Look for the 'Apply Now' button on our Accelerator page.",
  },
  {
    question: "Does FMK Global Holdings offer internship opportunities?",
    answer:
      "Yes, we offer internship opportunities for students and recent graduates. Please check our Careers page for current openings.",
  },
  {
    question: "How can I partner with FMK Global Holdings?",
    answer:
      "We're always open to partnerships that align with our mission. Please reach out to us through this contact form or email us at partnerships@fmkglobalholdings.com.",
  },
  {
    question: "What is FMK Global Holdings' approach to sustainability?",
    answer:
      "Sustainability is at the core of our operations. We integrate eco-friendly practices in all our projects and actively seek innovative solutions to environmental challenges.",
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <motion.div key={index} className="border border-gray-200 rounded-lg overflow-hidden" initial={false}>
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150 ease-in-out"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="font-medium">{item.question}</span>
            <ChevronDownIcon
              className={`w-5 h-5 transition-transform duration-200 ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="p-4 bg-gray-50">
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

