"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const jobOpenings = [
  {
    title: "Senior Software Engineer",
    department: "Technology",
    location: "Gaborone, Botswana",
    type: "Full-time",
    description:
      "We're looking for a Senior Software Engineer to lead our development team in creating innovative solutions for our clients across Africa.",
    responsibilities: [
      "Design and implement scalable software solutions",
      "Lead a team of junior developers",
      "Collaborate with cross-functional teams to define and develop new features",
      "Ensure the performance, quality, and responsiveness of applications",
    ],
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in JavaScript, TypeScript, and React",
      "Experience with cloud technologies (AWS, Azure, or GCP)",
      "Excellent problem-solving and communication skills",
    ],
  },
  {
    title: "Project Manager",
    department: "Engineering",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description:
      "We're seeking an experienced Project Manager to oversee large-scale engineering projects across East Africa.",
    responsibilities: [
      "Plan, execute, and finalize projects according to strict deadlines and within budget",
      "Coordinate with cross-functional teams throughout project lifecycles",
      "Develop comprehensive project plans and monitor progress",
      "Manage relationships with clients and stakeholders",
    ],
    requirements: [
      "7+ years of experience in project management, preferably in engineering or construction",
      "PMP certification",
      "Strong leadership and communication skills",
      "Experience working in East Africa",
    ],
  },
  {
    title: "Business Development Associate",
    department: "Sales",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Join our dynamic sales team to help expand FMK Global Holdings' presence in West Africa.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Develop and maintain relationships with key clients and partners",
      "Prepare and deliver pitches and proposals",
      "Collaborate with technical teams to understand and communicate our solutions",
    ],
    requirements: [
      "3+ years of experience in business development or sales",
      "Strong network in the West African business community",
      "Excellent presentation and negotiation skills",
      "Bachelor's degree in Business, Engineering, or related field",
    ],
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setApplicationData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setApplicationData((prev) => ({ ...prev, resume: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Application submitted:", applicationData)
    // Here you would typically send the application data to your backend
    alert("Application submitted successfully!")
    setApplicationData({ name: "", email: "", resume: null, coverLetter: "" })
    setSelectedJob(null)
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
          Careers at FMK Global Holdings
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Join our team of innovators and make a lasting impact on Africa's technological landscape
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
            <Accordion type="single" collapsible>
              {jobOpenings.map((job, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{job.title}</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      <strong>Department:</strong> {job.department}
                    </p>
                    <p>
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p>
                      <strong>Type:</strong> {job.type}
                    </p>
                    <p className="mt-2">{job.description}</p>
                    <Button className="mt-4" onClick={() => setSelectedJob(job)}>
                      Apply Now
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            {selectedJob ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">Apply for {selectedJob.title}</h2>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                    Resume
                  </label>
                  <Input type="file" id="resume" name="resume" onChange={handleFileChange} required />
                </div>
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white">
                  Submit Application
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
                <p className="mb-4">Select a position from the list to apply.</p>
                <p>
                  Can't find a suitable position? Send us your resume, and we'll contact you when a matching opportunity
                  arises.
                </p>
                <Link href="/careers/general-application">
                  <Button className="mt-4 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
                    Send General Application
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

