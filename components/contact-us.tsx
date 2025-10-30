"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "sonner"

// ✅ Zod schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactUs() {
  const [loading, setLoading] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    try {
      setLoading(true)
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.fullName,
          email: values.email,
          message: values.message,
        }),
      })

      if (!res.ok) {
        throw new Error("Something went wrong, please try again.")
      }

      toast.success("Thank you, we received your message!")
      form.reset()
    } catch (e: any) {
      toast.error(e.message || "Failed to send message.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="px-4 py-12 relative liquid-glass"
    >
      <div className="container max-w-2xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-center text-white">
          Contact Us
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="border-blue-300 focus-visible:ring-blue-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                        className="border-blue-300 focus-visible:ring-blue-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message..."
                      rows={5}
                      {...field}
                      className="border-blue-300 focus-visible:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Button */}
            <div className="flex items-center justify-center mb-8">
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white w-64 rounded cursor-pointer"
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}
