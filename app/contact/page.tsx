"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container-max py-24">
        <div className="max-w-2xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let's talk about how we can work together.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={6}
                className="rounded-xl border-border bg-background text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-2xl py-6 text-base"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </Button>
          </form>

          {/* Divider */}
          <div className="divider" />

          {/* Alternative Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Other Ways to Connect</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Email</h3>
                <a href="mailto:hello@example.com" className="text-lg hover:underline">
                  hello@example.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Social</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:underline">
                    GitHub
                  </a>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:underline">
                    Dribbble
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
