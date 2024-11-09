'use client'

import { useState, useEffect, useRef } from 'react'
import { BarChart3, Users, Database, Shield, Moon, Activity } from "lucide-react"

export default function Component() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect()
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const component = componentRef.current
    if (component) {
      component.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (component) {
        component.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <div ref={componentRef} className="min-h-screen bg-black text-white px-4 py-12 md:px-6 lg:px-8 relative overflow-hidden">
      <div 
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255, 140, 50, 0.15), transparent 80%)`,
        }}
      />
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mt-10 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Your Marketing needs at one place
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Imagine Google with 100 more features. That's Quite Good. Even we don't like it.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 pt-8">
          {/* Feature 1 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-[2px]  ">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                <Activity className="w-6 h-6 text-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-20 blur-md" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">Amazing Analytics you will never ever use.</h2>
            <p className="text-gray-400">
              Just like any other analytics tool, you will never use all the features. But we have them all just in case you
              needed some of them.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-[2px]  ">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                <BarChart3 className="w-6 h-6 text-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-20 blur-md" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">Charts, graphs and everything at your fingertips</h2>
            <p className="text-gray-400">
              Bar graphs, Pie Charts, Line graphs, Area graphs, you name it. We have it. And if we don't, we will add it.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-[2px]  ">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                <Users className="w-6 h-6 text-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-20 blur-md" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">Create teams. Invite your friends and families.</h2>
            <p className="text-gray-400">
              Creation of teams is a breeze. Invite your friends so that they can bang their head against a pie chart.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-[2px]  ">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                <Database className="w-6 h-6 text-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-20 blur-md" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">Self host your analytics. Own your mistakes</h2>
            <p className="text-gray-400">
              With our analytics, you can self host incase you don't wish to pay us or see us grow to a billion dollar company.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-[2px]  ">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                <Shield className="w-6 h-6 text-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-20 blur-md" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">We don't track you. We don't sell your data.</h2>
            <p className="text-gray-400">
              Lol! We don't even have a database. We are just a bunch of guys who are trying to make a living. wink wink.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-[2px]  ">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                <Moon className="w-6 h-6 text-orange-500" />
                <div className="absolute inset-0 bg-orange-500 opacity-20 blur-md" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">Lastly, we have support for dark mode. Yay!</h2>
            <p className="text-gray-400">
              Dark mode is as necessary to a developer as a cup of coffee. We have both. We won't give you coffee though.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}