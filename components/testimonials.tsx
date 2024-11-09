import { Card } from "@/components/ui/card"
import Image from "next/image"

interface Testimonial {
  content: string
  author: {
    name: string
    title: string
    avatar: string
  }
  gridArea: string
}

export default function Component() {
  const testimonials: Testimonial[] = [
    {
      content: "This is my application so I'll only say good things about it. It's the piece of crap. Although it took me so much time and energy to build. I'm proud of it.",
      author: {
        name: "Manu Arora",
        title: "Senior Meme Officer",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      gridArea: "1 / 1 / 2 / 2"
    },
    {
      content: "What did you get done this week? stop with this application and start fixing the search damnit.",
      author: {
        name: "Elon Must",
        title: "Twiteer CEO, Developer, Writer, Memer, etc",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      gridArea: "1 / 2 / 2 / 3"
    },
    {
      content: "Tried to incorporate in project mayhem but it didn't work. I don't know why. I'm not a developer. I'm a salesman. I sell soap. Also this platform is hella expensive.",
      author: {
        name: "Tyler Durden",
        title: "Project Mayhem Coordinator",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      gridArea: "1 / 3 / 3 / 4"
    },
    {
      content: "Backed by Wayne enterprises, Foxtrot is the best platform any business can ever imagine. Worth every penny.",
      author: {
        name: "Alfred J. Pennyworth",
        title: "MD at Wayne Enterprises",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      gridArea: "2 / 1 / 4 / 2"
    },
    {
      content: "Harry Potter, the boy who bought Foxtrot Analytics. He is stronger than me now. Highly recommended.",
      author: {
        name: "Lord Voldemort",
        title: "Head boy at Slytherin House",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      gridArea: "2 / 2 / 3 / 3"
    },
    {
      content: "I am groot. I am groot. I am groot, I am groot. I AM GROOOOOT!",
      author: {
        name: "Groot",
        title: "Groot at Groot Industries",
        avatar: "/placeholder.svg?height=40&width=40"
      },
      gridArea: "3 / 2 / 4 / 4"
    }
  ]

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 pb-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            See what our clients say about us
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our very own wall of love. Or complaints. Whatever you want to call it.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(200px,auto)]">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="flex flex-col p-6 bg-white dark:bg-gray-800 shadow-lg"
              style={{ gridArea: testimonial.gridArea }}
            >
              <div className="flex-1">
                <p className="text-[20px] leading-relaxed font-medium">
                  {testimonial.content}
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Image
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <div className="text-sm font-medium">{testimonial.author.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.author.title}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}