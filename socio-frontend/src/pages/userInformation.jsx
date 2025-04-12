"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function UserInfoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      businessEmail: "",
      bio: "",
      location: "",
      website: "https://",
      instagram: "",
      twitter: "",
      facebook: "",
    },
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(values)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
        <div className="mb-8 text-center">
          <div className="flex items-center space-x-2 justify-center">
            <img
              src="https://img.icons8.com/?size=100&id=12771&format=png&color=000000"
              alt="Logo"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2 font-bold text-[40px]">Create Your Profile</h1>
          <p className="text-gray-600">Share your story with the world</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Doe" 
                        {...field} 
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[90%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Username</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="@johndoe" 
                        {...field}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[40%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                      />
                    </FormControl>
                    <FormDescription className="text-gray-500">
                      This will be your public display name
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-gray-700">Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal border-gray-300",
                              !field.value && "text-gray-400"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          className="rounded-lg border border-gray-300"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          {...field}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[80%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Business Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="business@example.com" 
                          {...field}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[80%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself"
                        className="resize-none min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[80%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Location</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="City, Country" 
                          {...field}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[80%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Website</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://your-website.com" 
                          {...field}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[80%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900">Social Media</h3>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="instagram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Instagram Handle</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="@username" 
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[80%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="twitter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Twitter Handle</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="@username" 
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[80%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="facebook"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Facebook Username</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="username" 
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-[80%] rounded-xl h-[2.5rem] shadow-sm bg-white placeholder:text-gray-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-lg font-semibold transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              {isSubmitting ? "Creating your profile..." : "Create Profile"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
