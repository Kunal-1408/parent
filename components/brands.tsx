'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Component() {
  const [activeCard, setActiveCard] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const brands = [
    {
      title: 'MediaX OOH',
      description: 'At MediaX, we specialize in Out-of-Home (OOH) advertising, delivering innovative campaigns that captivate audiences and leave a lasting impression. Through strategic placements and creative concepts.',
      image: '/placeholder.svg?height=200&width=400'
    },
    {
      title: 'DigitalX Pro',
      description: 'DigitalX Pro delivers cutting-edge digital marketing solutions that transform businesses. Our data-driven approach ensures maximum impact and measurable results across all platforms.',
      image: '/placeholder.svg?height=200&width=400'
    }
  ]

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  const handleCardClick = (index: number) => {
    if (index !== activeCard && !isAnimating) {
      setIsAnimating(true)
      setActiveCard(index)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gradient-to-b from-zinc-100 to-white">
      <div className="relative w-full h-[600px] flex justify-center items-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`absolute transition-all duration-1000 ease-in-out cursor-pointer
              ${index === activeCard ? 'z-20 scale-100 opacity-100' : 'z-10 scale-90 opacity-70 hover:opacity-90'}
              ${isAnimating ? 'pointer-events-none' : ''}
              ${
                index === 0
                  ? activeCard === 0
                    ? 'left-1/2 -translate-x-[52%]'
                    : 'left-1/2 -translate-x-[110%]'
                  : activeCard === 1
                  ? 'left-1/2 -translate-x-[48%]'
                  : 'left-1/2 translate-x-[10%]'
              }
            `}
          >
            <Card className="w-96 h-[520px] bg-orange-100 hover:bg-black hover:text-white shadow-xl border-0 flex flex-col transform transition-all duration-1000 ease-in-out group">
              <CardHeader className="p-0">
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={brand.image}
                    alt={`${brand.title} background`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <CardTitle className="text-3xl font-bold p-6 group-hover:text-white transition-colors duration-500">
                  {brand.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-6">
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {brand.description}
                </p>
                <button
                  
                  className="w-full mt-4 group-hover:bg-white group-hover:text-black transition-colors duration-500"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}