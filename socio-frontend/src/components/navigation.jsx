"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Bell, Home, Menu, MessageSquare, Search, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom"; // Import Link from React Router for navigation

function Navigation() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-10 bg-black flex items-center justify-between px-4 md:px-8 text-white py-3 shadow-md">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/?size=100&id=12771&format=png&color=000000"
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <Link to="/" className="font-bold text-white text-xl md:text-2xl lg:text-3xl">
            Socio
          </Link>
        </div>

        {/* Middle - Search (hidden on mobile, visible on md and up) */}
        <div className="hidden md:block flex-1 max-w-md mx-4 lg:mx-8">
          <Input
            placeholder="Search..."
            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-gray-500 w-full"
          />
        </div>

        {/* Mobile Search Icon (visible on mobile only) */}
        <div className="md:hidden flex items-center">
          {isSearchVisible ? (
            <div className="absolute inset-x-0 top-0 bg-black p-3 flex items-center z-20">
              <Input
                placeholder="Search..."
                className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-gray-500 flex-1 mr-2"
                autoFocus
              />
              <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsSearchVisible(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-gray-800"
              onClick={() => setIsSearchVisible(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Right side - Navigation Icons (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-1 md:space-x-3">
          <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" asChild>
            <Link to="/home">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" asChild>
            <Link to="/notifications">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" asChild>
            <Link to="/messages">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" asChild>
            <Link to="/profile">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu (visible on mobile only) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white border-gray-800">
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/home" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/notifications" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </Link>
                <Link to="/messages" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800">
                  <MessageSquare className="h-5 w-5" />
                  <span>Messages</span>
                </Link>
                <Link to="/profile" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <Separator className="bg-gray-400" />
    </>
  );
}

export default Navigation;
