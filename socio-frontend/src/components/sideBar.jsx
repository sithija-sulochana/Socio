"use client"
import {
  Home,
  Flame,
  Globe,
  PlusCircle,
  Bookmark,
  Settings,
  User,
  ChevronDown,
  MessageSquare,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function SideBar() {
  return (
    <aside className="h-screen w-64 bg-black text-white p-4 flex flex-col overflow-y-auto">
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
            <p className="text-xs text-gray-400">1.2k karma</p>
          </div>
        </div>

        <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </div>
    </aside>
  )
}

export default SideBar

