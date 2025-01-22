"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // For demonstration, we'll randomly succeed or fail
    if (Math.random() > 0.5) {
      setFormStatus("success")
    } else {
      setFormStatus("error")
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <Input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <Input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <Input type="text" id="subject" name="subject" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <Textarea id="message" name="message" rows={4} required />
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white"
        disabled={formStatus === "submitting"}
      >
        {formStatus === "submitting" ? "Sending..." : "Send Message"}
      </Button>
      {formStatus === "success" && (
        <motion.p className="text-green-600 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Your message has been sent successfully!
        </motion.p>
      )}
      {formStatus === "error" && (
        <motion.p className="text-red-600 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          There was an error sending your message. Please try again.
        </motion.p>
      )}
    </motion.form>
  )
}

