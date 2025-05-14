"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setMessage("Please enter your email address")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setMessage("Thank you for subscribing! Check your inbox for updates.")
      setEmail("")
    }, 1500)
  }

  return (
    <section id="newsletter" className="py-12">
      <Card className="max-w-3xl mx-auto border-2 border-purple-100">
        <CardHeader className="text-center">
          <div className="mx-auto bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <Bell className="w-6 h-6" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Stay Updated on AI Innovations</CardTitle>
          <CardDescription className="text-gray-600 max-w-lg mx-auto">
            Subscribe to our newsletter to receive the latest updates on new AI tools, exclusive tutorials, and special
            offers.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          {status === "success" && (
            <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <p>{message}</p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{message}</p>
            </div>
          )}
        </CardContent>

        <CardFooter className="text-center text-sm text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </CardFooter>
      </Card>
    </section>
  )
}
