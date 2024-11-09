'use client'

import { useState } from 'react'
import { Building2, Users2, Briefcase, BarChart3 } from 'lucide-react'
import { Card } from '@/components/ui/card'

const partners = [
  {
    title: 'Brand 1',
    subtitle: 'For small teams or startups',
    features: [
      { icon: Building2, text: 'Fortune 500 company' },
      { icon: Users2, text: '10,000+ employees' },
      { icon: Briefcase, text: '25+ years partnership' },
      { icon: BarChart3, text: '$50M+ annual revenue' },
    ],
  },
  {
    title: 'Brand 2',
    subtitle: 'For medium to large teams',
    features: [
      { icon: Building2, text: 'Tech innovator' },
      { icon: Users2, text: '5,000+ employees' },
      { icon: Briefcase, text: '15+ years partnership' },
      { icon: BarChart3, text: '$25M+ annual revenue' },
    ],
  },
  {
    title: 'Brand 3',
    subtitle: 'For large teams or enterprises',
    features: [
      { icon: Building2, text: 'Fast-growing startup' },
      { icon: Users2, text: '1,000+ employees' },
      { icon: Briefcase, text: '5+ years partnership' },
      { icon: BarChart3, text: '$10M+ annual revenue' },
    ],
  },
]

export default function Component() {
  const [selectedCard, setSelectedCard] = useState(1)

  return (
    <div className="px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Our Brands</h2>
        <p className="text-muted-foreground">
          We collaborate with industry leaders to deliver exceptional solutions to our clients.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-stretch">
        {partners.map((partner, index) => (
          <div
            key={partner.title}
            className={`flex-1 transition-all duration-300 ${
              selectedCard === index ? 'lg:scale-105' : 'lg:scale-95'
            }`}
          >
            <Card
              className={`h-full relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer
                ${
                  selectedCard === index
                    ? 'bg-orange-200 shadow-lg border-orange-200'
                    : 'bg-white hover:bg-orange-50 border-transparent hover:border-orange-100'
                }
                min-h-[600px] flex flex-col rounded-3xl`}
              onClick={() => setSelectedCard(index)}
            >
              <div className="pb-8 pt-10 px-6">
                <h3 className="text-2xl font-bold mb-2">{partner.title}</h3>
                <p className="text-sm text-muted-foreground">{partner.subtitle}</p>
              </div>
              <div className="px-6 flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                  {partner.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-100 rounded-full opacity-20" />
                        <feature.icon className="h-5 w-5 text-orange-600 relative z-10" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="text-white inline-flex items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2 w-full mt-8 mb-4"
                >
                  Explore
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}