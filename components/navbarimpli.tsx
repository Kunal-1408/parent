"use client"

import React, { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export default function Navbar({ className }: { className?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const menuItems = [
    { href: "#features", label: "Explore" },
    { href: "#testimonials", label: "Testimonials" },
    
    { href: "#blogs", label: "Blogs" },
  ]

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50", className)}>
      <div className="container flex items-center justify-center py-4">
        <nav className="flex items-center gap-8 px-8 py-3 bg-zinc-900 rounded-full relative">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-8 rounded bg-orange-500 flex items-center justify-center">
              <ChevronDown className="size-5 text-white" />
            </div>
            <span className="text-white font-medium text-lg">Quite Good</span>
          </Link>
          
          <div className="flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-white/90 hover:text-white transition-colors duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {hoveredIndex !== null && (
            <div
              className="absolute bottom-2 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: `${hoveredIndex * 120 + 200}px`,
                width: '60px',
              }}
            />
          )}
        </nav>
      </div>
    </div>
  )
}