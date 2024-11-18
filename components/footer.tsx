import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-12">
      <div className="max-w-4xl mx-auto py-12 px-4 border-t-2 border-neutral-200">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2">
            {/* <div className="h-8 w-8 my-5 rounded-md bg-blue-500" /> */}
            {/* <Image src="/AV Social-01.jpg" alt="logo" width={40} height={40} className="rounded-md" /> */}
            <span className="text-xl font-bold">Adsversify Marketing Private Limited.</span>
          </div>
          {/* <nav className="flex gap-6">
            <Link className="text-sm hover:text-blue-500 transition-colors" href="#">
              Features
            </Link>
            <Link className="text-sm hover:text-blue-500 transition-colors" href="#">
              Testimonials
            </Link>
            <Link className="text-sm hover:text-blue-500 transition-colors" href="#">
              Pricing
            </Link>
            <Link className="text-sm hover:text-blue-500 transition-colors" href="#">
              Blogs
            </Link>
          </nav> */}
          {/* <div className="flex my-5 gap-4">
            <Link className="text-zinc-500 hover:text-blue-500 transition-colors" href="#">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="text-zinc-500 hover:text-blue-500 transition-colors" href="#">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link className="text-zinc-500 hover:text-blue-500 transition-colors" href="#">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div> */}
          <p className="text-xs text-zinc-500">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}