'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Component() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const brands = [
    {
      title: 'Quite Good',
      description: 'At MediaX, we specialize in Out-of-Home (OOH) advertising, delivering innovative campaigns that captivate audiences and leave a lasting impression. Through strategic placements and creative concepts.',
      image: '/1-01.png'
    },
    {
      title: 'Candy Birds',
      description: 'DigitalX Pro delivers cutting-edge digital marketing solutions that transform businesses. Our data-driven approach ensures maximum impact and measurable results across all platforms.',
      image: '/placeholder.svg?height=200&width=400'
    }
  ]

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveCard(null)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveCard(activeCard === index ? null : index)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-zinc-100 to-white p-4 sm:p-8 md:p-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center my-5">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Brands
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Delve deep into the world of our clients and discover the stories that inspire us.
          </p>
        </div>
      <div ref={containerRef} className="relative w-full max-w-6xl h-[500px] sm:h-[600px] md:h-[700px] flex justify-center items-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`absolute transition-all duration-500 ease-in-out cursor-pointer
              ${activeCard === null ? 'w-[calc(50%-1rem)]' : activeCard === index ? 'w-[60%] z-20' : 'w-[40%] z-10'}
              ${isAnimating ? 'pointer-events-none' : ''}
              ${
                activeCard === null
                  ? index === 0 ? 'left-0' : 'right-0'
                  : activeCard === index
                  ? 'left-1/2 -translate-x-1/2 translate-y-[-5%]'
                  : index === 0 ? 'left-0 translate-y-[5%]' : 'right-0 translate-y-[5%]'
              }
            `}
          >
            <Card className={`w-full h-[400px] sm:h-[500px] md:h-[550px] shadow-xl border-0 flex flex-col transform transition-all duration-500 ease-in-out group
              ${activeCard === index ? 'bg-black text-white scale-105' : activeCard !== null ? 'opacity-50 scale-95' : 'hover:bg-black hover:text-white hover:scale-[1.02]'}`}>
              <CardHeader className="p-0">
                <div className="h-32 sm:h-40 md:h-48 w-full overflow-hidden">
                  <img
                    src={brand.image}
                    alt={`${brand.title} background`}
                    className="w-full h-full object-fit p-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold p-4 sm:p-6 group-hover:text-white transition-colors duration-500">
                  {brand.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between text-xl">
                <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-500
                  ${activeCard === index ? 'text-gray-300' : 'text-muted-foreground group-hover:text-gray-300'}`}>
                  {brand.description}
                </p>
                <button
                  className="text-white items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2 mb-4 flex"
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