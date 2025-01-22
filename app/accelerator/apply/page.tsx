"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AcceleratorApplicationPage() {
  const [formData, setFormData] = useState({
    founderName: "",
    email: "",
    companyName: "",
    website: "",
    industry: "",
    stage: "",
    teamSize: "",
    pitchDeck: null,
    problemStatement: "",
    solution: "",
    traction: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, pitchDeck: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Accelerator Application submitted:", formData)
    // Here you would typically send the application data to your backend
    alert("Application submitted successfully! We will review your application and get back to you soon.")
    setFormData({
      founderName: "",
      email: "",
      companyName: "",
      website: "",
      industry: "",
      stage: "",
      teamSize: "",
      pitchDeck: null,
      problemStatement: "",
      solution: "",
      traction: "",
    })
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
          Apply to FMK Accelerator Program
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Take the first step towards accelerating your startup's growth. Fill out the application below to be
          considered for our next cohort.
        </motion.p>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="founderName" className="block text-sm font-medium text-gray-700 mb-1">
                Founder's Name
              </label>
              <Input
                type="text"
                id="founderName"
                name="founderName"
                value={formData.founderName}
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
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <Input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Company Website
              </label>
              <Input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                Industry
              </label>
              <Select name="industry" onValueChange={(value) => handleSelectChange("industry", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="healthtech">Healthtech</SelectItem>
                  <SelectItem value="edtech">Edtech</SelectItem>
                  <SelectItem value="agritech">Agritech</SelectItem>
                  <SelectItem value="cleantech">Cleantech</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-1">
                Company Stage
              </label>
              <Select name="stage" onValueChange={(value) => handleSelectChange("stage", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your company stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="idea">Idea</SelectItem>
                  <SelectItem value="mvp">MVP</SelectItem>
                  <SelectItem value="early-traction">Early Traction</SelectItem>
                  <SelectItem value="growth">Growth</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">
                Team Size
              </label>
              <Input
                type="number"
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleInputChange}
                required
                min="1"
              />
            </div>
            <div>
              <label htmlFor="pitchDeck" className="block text-sm font-medium text-gray-700 mb-1">
                Pitch Deck (PDF)
              </label>
              <Input type="file" id="pitchDeck" name="pitchDeck" onChange={handleFileChange} accept=".pdf" required />
            </div>
            <div>
              <label htmlFor="problemStatement" className="block text-sm font-medium text-gray-700 mb-1">
                Problem Statement
              </label>
              <Textarea
                id="problemStatement"
                name="problemStatement"
                value={formData.problemStatement}
                onChange={handleInputChange}
                rows={3}
                required
                placeholder="Describe the problem your startup is solving"
              />
            </div>
            <div>
              <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-1">
                Your Solution
              </label>
              <Textarea
                id="solution"
                name="solution"
                value={formData.solution}
                onChange={handleInputChange}
                rows={3}
                required
                placeholder="Explain your solution and how it addresses the problem"
              />
            </div>
            <div>
              <label htmlFor="traction" className="block text-sm font-medium text-gray-700 mb-1">
                Traction
              </label>
              <Textarea
                id="traction"
                name="traction"
                value={formData.traction}
                onChange={handleInputChange}
                rows={3}
                required
                placeholder="Describe your current traction (users, revenue, partnerships, etc.)"
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white">
              Submit Application
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

