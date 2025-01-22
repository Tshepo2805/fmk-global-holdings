import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "./contact-form"
import { FAQ } from "./faq"
import { SocialIcon } from "react-social-icons"
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="FMK Global Holdings Logo" width={32} height={32} />
            <span className="font-bold">FMK Global Holdings</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/accelerator" className="text-sm font-medium hover:underline underline-offset-4">
              Accelerator
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="FMK Global Holdings Office"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-orange-500/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            We're here to answer your questions and help you innovate
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
              Send Us a Message
            </h2>
            <ContactForm />
          </section>

          {/* Contact Information Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MailIcon className="text-blue-600" />
                <span>info@fmkglobalholdings.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="text-blue-600" />
                <span>+267 123 4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPinIcon className="text-blue-600" />
                <span>123 Innovation Drive, Gaborone, Botswana</span>
              </div>
              <div className="flex items-center space-x-4">
                <ClockIcon className="text-blue-600" />
                <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
              </div>
            </div>

            {/* Office Locations */}
            <h3 className="text-2xl font-bold mt-8 mb-4">Our Offices</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Gaborone (HQ)</h4>
                <p>123 Innovation Drive, Gaborone, Botswana</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Nairobi</h4>
                <p>456 Tech Avenue, Nairobi, Kenya</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Lagos</h4>
                <p>789 Startup Street, Lagos, Nigeria</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Johannesburg</h4>
                <p>101 Engineer Road, Johannesburg, South Africa</p>
              </div>
            </div>

            {/* Social Media Integration */}
            <h3 className="text-2xl font-bold mt-8 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialIcon url="https://twitter.com/fmkglobalholdings" bgColor="#1DA1F2" />
              <SocialIcon url="https://www.linkedin.com/company/fmkglobalholdings" bgColor="#0A66C2" />
              <SocialIcon url="https://www.facebook.com/fmkglobalholdings" bgColor="#1877F2" />
              <SocialIcon url="https://www.instagram.com/fmkglobalholdings" bgColor="#E4405F" />
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-600">
            Ready to Innovate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of engineering and technology in Africa.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/services">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                Explore Our Services
              </button>
            </Link>
            <Link href="/accelerator">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300">
                Join Our Accelerator
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

