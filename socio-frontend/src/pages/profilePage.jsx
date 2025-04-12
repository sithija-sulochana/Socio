"use client"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Camera, Heart, MessageCircle, MoreHorizontal, Share2, UserPlus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function ProfilePage() {
  return (
    <div className="p-0 m-0 bg-gray-100 min-h-screen">
      {/* Cover Photo Section */}
      <div className="relative">
        <div className="w-full h-[300px] object-cover bg-gradient-to-r from-gray-400 to-gray-600"></div>
        <Button className="absolute bottom-4 right-6 bg-black/70 hover:bg-black/90 text-white">
          <Camera className="mr-2 h-4 w-4" /> Add Cover Photo
        </Button>
      </div>

      {/* Profile Header Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-[75px]">
        <div className="relative flex flex-col sm:flex-row items-start sm:items-end pb-4">
          {/* Profile Picture */}
          <div className="relative z-10">
            <Avatar className="w-[150px] h-[150px] border-4 border-white shadow-md">
              <AvatarImage src="/placeholder.svg?height=150&width=150" alt="Profile" />
              {/* This is the avetar/cover page */}
              <AvatarFallback className="text-4xl">            </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-2 right-2 bg-black/70 hover:bg-black/90 text-white rounded-full h-8 w-8"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 pt-4 sm:pt-0 sm:pb-2 sm:pl-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                {/* This is user name/petnames */}
                <h1 className="text-2xl font-bold text-gray-900"> </h1>
                <p className="text-gray-600">   </p>
              </div>
              <div className="flex space-x-2 mt-4 sm:mt-0">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <UserPlus className="mr-2 h-4 w-4" /> Follow
                </Button>
                <Button variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" /> Message
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bio and Stats */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
            {/* user description */}
         
          <p className="text-gray-700">
            {/* This is the description */}
            {/* //!paste the description here */}


          </p>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            
            {/* //! this is the country and city details */}
            <span>📍 New York, NY</span>
            <span className="mx-2">•</span>
            {/* //! another social media or links */}
            <span>🔗 instagram.com/johndoe</span>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t">
            <div className="text-center">
                {/* //! Birthday of user */}
              <div className="text-xl font-bold"></div>
              {/* //! number of posts */}
              <div className="text-gray-500 text-sm">Posts</div>
            </div>
            <div className="text-center">
                {/* //! Followers */}
              <div className="text-xl font-bold"></div>
              <div className="text-gray-500 text-sm">Followers</div>
            </div>
            <div className="text-center">
                {/* //! Following */}
              <div className="text-xl font-bold"></div>
              <div className="text-gray-500 text-sm">Following</div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="posts" className="mt-6">
          <TabsList className="w-full bg-white rounded-lg shadow-sm mb-6">
            <TabsTrigger value="posts" className="flex-1">
              Posts
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex-1">
              Photos
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex-1">
              Videos
            </TabsTrigger>
            <TabsTrigger value="about" className="flex-1">
              About
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-4">
            {/* Post 1 */}
            <Card>
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-gray-500">2 hours ago</div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-700">
                      Just visited the most amazing coffee shop in Brooklyn! The atmosphere was incredible and the
                      coffee was even better. ☕️ #CoffeeAddict #Brooklyn
                    </p>
                  </div>
                </div>
                <div className="bg-gray-200 h-[300px] w-full flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Post image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                        <Heart className="h-4 w-4" /> 124
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                        <MessageCircle className="h-4 w-4" /> 32
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                        <Share2 className="h-4 w-4" /> Share
                      </Button>
                    </div>
                    <Badge variant="outline" className="text-blue-600">
                      Coffee
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Post 2 */}
            <Card>
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-gray-500">Yesterday</div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-700">
                      Working on some new photography techniques. What do you think of this composition? Looking for
                      honest feedback!
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-gray-200 h-[200px] flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Post image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-200 h-[200px] flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=200&width=300"
                      alt="Post image 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                        <Heart className="h-4 w-4" /> //! count of hear react
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                        <MessageCircle className="h-4 w-4" /> //! count of comments
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                        <Share2 className="h-4 w-4" /> //! share this video
                      </Button>
                    </div>
                    <Badge variant="outline" className="text-blue-600">
                      Photography
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* <TabsContent value="photos" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Photo Albums</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="relative group overflow-hidden rounded-lg">
                      <img
                        src={`/placeholder.svg?height=150&width=150&text=Photo+${item}`}
                        alt={`Photo ${item}`}
                        className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}

          <TabsContent value="videos">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <p className="text-gray-500">No videos uploaded yet</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
            {/* user information */}
          <TabsContent value="about">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">About</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Bio</h4>
                    <p className="mt-1">
                      //! here is the description
                    </p>
                  </div>

                  <Separator />
                 

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Basic Information</h4>
                    <dl className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Birthday</dt>
                        <dd className="text-sm font-medium"></dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Gender</dt>
                        <dd className="text-sm font-medium"></dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Location</dt>
                        <dd className="text-sm font-medium"></dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Joined</dt>
                        <dd className="text-sm font-medium"></dd>
                      </div>
                    </dl>
                  </div>

                  <Separator />

                  {/* user contact details */}

                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Contact Information</h4>
                    <dl className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Email</dt>
                        <dd className="text-sm font-medium">john.doe@example.com</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-gray-600">Website</dt>
                        <dd className="text-sm font-medium text-blue-600">www.johndoephotography.com</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ProfilePage
