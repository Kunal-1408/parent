import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            OUR COMPANIES
          </h1>
          <Link href="#" className="text-orange-600 hover:text-orange-700">
            <ArrowRight className="h-8 w-8" />
            <span className="sr-only">View all companies</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group border border-gray-200 rounded-lg overflow-hidden transition-colors hover:bg-black">
            <div className="bg-black p-8">
              <Image
                src="/placeholder.svg?height=48&width=200"
                alt="MediaX OOH Logo"
                className="h-12 w-auto"
                width={200}
                height={48}
              />
            </div>
            <div className="p-6 group-hover:text-white">
              <h2 className="text-2xl font-bold mb-4">MediaX OOH:</h2>
              <p className="text-gray-600 group-hover:text-gray-300 mb-6">
                At MediaX, we specialize in Out-of-Home (OOH) advertising, delivering innovative campaigns that captivate audiences and leave a lasting impression. Through strategic placements and creative concepts.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-orange-600 group-hover:text-orange-400"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="group border border-gray-200 rounded-lg overflow-hidden transition-colors hover:bg-black">
            <div className="bg-gradient-to-b from-emerald-400 to-emerald-600 p-8">
              <div className="h-12 flex items-center justify-center text-yellow-300 text-xl font-bold">
                HAPPENING IN
              </div>
            </div>
            <div className="p-6 group-hover:text-white">
              <h2 className="text-2xl font-bold mb-4">Happening In:</h2>
              <p className="text-gray-600 group-hover:text-gray-300 mb-6">
                Happening in offers a premier city and entertainment guide featuring carefully selected recommendations for exploring your city, uncovering hidden gems, and staying informed with the latest buzz.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-orange-600 group-hover:text-orange-400"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}