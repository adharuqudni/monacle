"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { toast } from "@/hooks/use-toast"
import { CheckCircle2 } from "lucide-react"

// ✅ Schema validasi
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
})

export function LeadsFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  })

  // ✅ Submit ke Formspree
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xjkwvbrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast({
          title: "Form submitted successfully",
          description: "We'll get back to you soon!",
        })
      } else {
        throw new Error(data?.error || "Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      className="relative w-full py-12 md:py-24 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg/6.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-blue-200 md:text-xl">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="w-full max-w-md mx-auto mt-8">
            {isSuccess ? (
              <Card className="border-blue-500 bg-black/50 backdrop-blur-sm text-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <CheckCircle2 className="h-12 w-12 text-blue-400" />
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p className="text-center text-blue-200">
                      Your information has been submitted successfully. We'll contact you shortly.
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Submit Another Response
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-blue-500 bg-black/50 backdrop-blur-sm text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Contact Information</CardTitle>
                  <CardDescription className="text-blue-200">
                    Please provide your details below
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="bg-black/30 border-blue-700 text-white placeholder:text-blue-300"
                              />
                            </FormControl>
                            <FormMessage className="text-blue-300" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your.email@example.com"
                                type="email"
                                {...field}
                                className="bg-black/30 border-blue-700 text-white placeholder:text-blue-300"
                              />
                            </FormControl>
                            <FormMessage className="text-blue-300" />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your phone number"
                                  {...field}
                                  className="bg-black/30 border-blue-700 text-white placeholder:text-blue-300"
                                />
                              </FormControl>
                              <FormMessage className="text-blue-300" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Company (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your company"
                                  {...field}
                                  className="bg-black/30 border-blue-700 text-white placeholder:text-blue-300"
                                />
                              </FormControl>
                              <FormMessage className="text-blue-300" />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project or inquiry"
                                {...field}
                                className="bg-black/30 border-blue-700 text-white placeholder:text-blue-300 min-h-[100px]"
                              />
                            </FormControl>
                            <FormMessage className="text-blue-300" />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
                <CardFooter className="border-t border-blue-800/30 flex justify-center">
                  <p className="text-sm text-blue-300">
                    We respect your privacy and will never share your information.
                  </p>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
