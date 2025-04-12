"use client"
import { Input } from "@/components/ui/input"
import { Bell, Home, MessageSquare, User } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


function Navigation() {
  return (
    <>
      <nav className="sticky top-0 z-10 bg-black flex items-center justify-between px-4 md:px-8 text-white py-3 shadow-md">
        {/* Left side - Logo */}
        <div className="flex items-inline justify-start">
        <img src="https://img.icons8.com/?size=100&id=12771&format=png&color=000000" alt="" className="w-[50px]" />
          <Link to="/" className="font-bold text-white text-2xl md:text-3xl mt-[5px] mr-3">
       
            Socio
          </Link>
        </div>

        {/* Middle - Search */}
        <div className="hidden md:block max-w-md w-full px-4 mr-[690px]">
          <Input
            placeholder="Search..."
            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-gray-500 mr-[90px] w-[490px]"
          />
        </div>

        {/* Right side - Navigation Icons */}

      </nav>
      <Separator className="bg-gray-400" />
    </>
  )
}

export default Navigation
