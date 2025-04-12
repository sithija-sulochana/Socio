import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-64 rounded-lg border-none bg-gray-500 px-4 py-2 text-white placeholder-blue-200 shadow-inner transition-all duration-200 ease-in-out focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:bg-gray-400 rounded-[30px] ml-[10px] text-white",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Input.displayName = "Input"

export { Input }
