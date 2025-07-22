"use client"
import Image from "next/image";
import echoLogo from "@/assets/logo-echo.png"
import acme from "@/assets/logo-acme.png"
import quantom from "@/assets/logo-quantum.png"
import apexLogo from "@/assets/logo-apex.png"
import pulse from "@/assets/logo-pulse.png"
import celestial from "@/assets/logo-celestial.png"

import {motion} from 'framer-motion'
import { useEffect, useRef } from "react";
export const LogoTicker = () => {
  const stats = [
    {title: "Inovador", desc: "Criados apartir dos problemas existem, melhorados atraves do estudo"},
    {title: "Sustentavel", desc: "Criados apartir dos problemas existem, melhorados atraves do estudo"},
    {title: "Inclusivo", desc: "Criados apartir dos problemas existem, melhorados atraves do estudo"}
  ];

  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
        if(!border.current) return;
        const borderRect = border.current?.getBoundingClientRect();
        const offsetX = e.x - borderRect.x;
        const offsetY = e.y - borderRect.y;
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
        window.removeEventListener('mousemove', updateMousePosition);
    }
  }, [])
  return (
    <div className="bg-[#EAEEFE]">
      <div className="container">
    <section id="features" className="relative block px-6 py-10 md:py-20 md:px-10 ">


        <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-gray-700 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Porque Vhonani Tech
            </span>
            <h2
                className="block w-full bg-gradient-to-b from-black to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                Desenvolvemos solucoes a medida
            </h2>
            <p
                className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-800">
                Somos uma startup inclusiva, que tem como foco o desenvolvimento de equipamento de suporte audiovisual, para pessoas com deficiencia.
            </p>
        </div>
    </section>
<div className="mt-16 flex flex-col gap-4">
  {stats.map((title,desc) => (
    <div key={title} className="border border-white/30 px-5 py-10 text-center">
      <h3>{title}</h3>
      </div>
  ))}
  </div>
   {/*<div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b z12"/> */} 
    {/* <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full z13"/>*/}    
</div>
</div>
  )
};
