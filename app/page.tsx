import Cardsa from "@/components/cardsection";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonials";
import Brand from "@/components/brands";
import Link from "next/link";

export default function Component() {
  return (
    <main className="relative min-h-full bg-white dark:bg-zinc-600 items-center">
      <div>
          <Hero/>
      </div>

      <div>
        <Cardsa/>
      </div>

      <div>
          <Testimonial/>

      </div>
      <div>
        <Brand/>
      </div>
      <div className="bg-zinc-800 rounded-2xl p-8 mb-8 text-center shadow-lg max-w-7xl my-12 mx-auto">
          <h2 className="text-2xl py-8 font-bold tracking-tighter text-white sm:text-3xl mb-3">
            So what are you waiting for?
          </h2>
          <p className="text-zinc-300 mb-5 max-w-lg mx-auto text-lg">
            We are here to help you with your business. Get in touch with us and we will get back to you as soon as possible.
          </p>
          <Link
           className="text-white items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2  mb-4"
            href="#"
          >
            Contact Us
          </Link>
        </div>
      


    </main>
  );
}