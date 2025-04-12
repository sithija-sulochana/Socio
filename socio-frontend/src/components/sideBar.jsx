"use client"
import { useState, useEffect } from "react"
import { Home, Flame, Globe, PlusCircle, Bookmark, Settings, User, ChevronDown, MessageSquare, Bell, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

function SideBar() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Full sidebar content
  const SidebarContent = () => (
    <>
      {/* Create Post Button */}
      <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white mb-6">
        <PlusCircle className="h-4 w-4 mr-2" />
        Create Post
      </Button>

      <Separator className="bg-gray-800 my-4" />

      {/* Feeds */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-2">FEEDS</h3>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <Flame className="h-4 w-4 mr-2" />
            Popular
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <Globe className="h-4 w-4 mr-2" />
            All
          </Button>
        </div>
      </div>

      <Separator className="bg-gray-800 my-4" />

      {/* Communities */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-2">YOUR COMMUNITIES</h3>
        <Collapsible className="w-full">
          <CollapsibleTrigger className="flex items-center w-full text-sm py-1 px-2 rounded hover:bg-gray-800">
            <ChevronDown className="h-4 w-4 mr-1" />
            <span>Show Communities</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 mt-1">
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span>
              r/programming
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
              r/webdev
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
              r/reactjs
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="w-4 h-4 rounded-full bg-purple-500 mr-2"></span>
              r/nextjs
            </Button>
            <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
              <span className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></span>
              r/tailwindcss
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <Separator className="bg-gray-800 my-4" />

      {/* Other */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-2">OTHER</h3>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <MessageSquare className="h-4 w-4 mr-2" />
            Messages
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <Bookmark className="h-4 w-4 mr-2" />
            Saved
          </Button>
        </div>
      </div>

      <div className="mt-auto">
        <Separator className="bg-gray-800 my-4" />

        {/* User Profile */}
        <div className="flex items-center space-x-3 mb-4 p-2 rounded hover:bg-gray-800 cursor-pointer">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">username123</p>
            <p className="text-xs text-gray-400">1.2k followers</p>
          </div>
        </div>

        <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </div>
    </>
  )

  // Desktop sidebar
  if (!isMobile) {
    return (
      <aside className="h-screen w-64 bg-black text-white p-4 flex flex-col overflow-y-auto">
        <SidebarContent />
      </aside>
    )
  }

  // Mobile bottom navigation with slide-up full menu
  return (
    <>
      {/* Main content area gets proper padding-bottom to account for the bottom nav */}
      <div className="pb-16"></div>

      {/* Fixed bottom navigation bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around items-center h-16 px-2 z-40">
        <Button variant="ghost" size="icon" className="text-white">
          <Home className="h-6 w-6" />
        </Button>
        
        <Button variant="ghost" size="icon" className="text-white">
          <Flame className="h-6 w-6" />
        </Button>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="rounded-full bg-gray-700 hover:bg-gray-600 text-white">
              <PlusCircle className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] bg-black text-white border-t border-gray-800 rounded-t-xl">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
            </div>
            <div className="overflow-y-auto h-full pb-safe">
              <SidebarContent />
            </div>
          </SheetContent>
        </Sheet>
        
        <Button variant="ghost" size="icon" className="text-white">
          <Bell className="h-6 w-6" />
        </Button>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] bg-black text-white border-l border-gray-800">
            <div className="h-full overflow-y-auto">
              <SidebarContent />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  )
}

export default SideBar
