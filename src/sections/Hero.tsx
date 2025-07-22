"use client"
import ArrowRight from "@/assets/arrow-right.svg"
import Image from "next/image";
import bg from "@/assets/bg/bg1.jpg"
import b1 from "@/assets/bg/bg1.jpg"
import cogImage from "@/assets/cog.png"
import Cilindro from "@/assets/cylinder.png"
import nodleImage from "@/assets/noodle.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundBeams } from "../components/ui/background-beams"
import { useRef } from "react";
import Pointer from "@/components/pointer";
export const Hero = () => {

  return (
    <section className="w-full h-screen relative">
     {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_40%_at_top_left,#7fbced80,#a6a8a8_16%)] opacity-30"/>*/}
     {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_100%_100%_at_bottom_left,#20a08b,#10b07b_66%)]"/>*/}
         <Image src={b1} className="w-full h-full object-cover" alt="backgoround image"/>
        <div className="absolute mb-2 top-0 my-8 w-full h-full flex flex-col items-center justify-center">  
          <a className="border p1 mb-4 border-white py-1 px-3 gap-3 rounded-lg text-white inline-flex">
            <span className="text-white border-blue-400 rounded-lg border">Vhonani +</span>Inovacao em alta</a>      
            <h1 className="relative z-10 text-6xl md:text-7xl lg:text-8xl tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-[#f2f4f5] text-center t1 font-sans font-medium">
          We design <br/><span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-[#f2f4f5]">the future</span>
        </h1>
        <p className="relative mx-auto my-4 w-full max-w-xl z-10 text-center text-xl mt-6 md:text-sm p1
         lg:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-[#f2f4f5] tracking-tight font-sans font-light">Streamline your operations, boost productivity and embrace, customer satisfaction with our cutting edge Saas platform.</p>
        </div>
      
    </section>
  )
};
