"use client"
import product from "@/assets/product-image.png"
import tubo from "@/assets/tube.png"
import piramede from "@/assets/pyramid.png"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Projectos = [
{
  nome: "Kudziva",
  ano: "2022",
  titulo: "Sistema de ensino",
  results: [
   { title: "melhorou aprendizado em 90%"},
   { title: "melhorou aprendizado em 90%"},
   { title: "melhorou aprendizado em 90%"}
  ],
  links: "google.com",
  image: product,
},
{
  nome: "Kudziva",
  ano: "2022",
  titulo: "Sistema de ensino",
  results: [
   { title: "melhorou aprendizado em 90%"},
   { title: "melhorou aprendizado em 90%"},
   { title: "melhorou aprendizado em 90%"}
  ],
  links: "google.com",
  image: product,
},
{
  nome: "Kudziva",
  ano: "2022",
  titulo: "Sistema de ensino",
  results: [
   { title: "melhorou aprendizado em 90%"},
   { title: "melhorou aprendizado em 90%"},
   { title: "melhorou aprendizado em 90%"}
  ],
  links: "google.com",
  image: product,
},
{
  nome: "Kudziva",
  ano: "2022",
  titulo: "Sistema de ensino",
  results: [
   { title: "melhorou aprendizado em 90%"},
   { title: "melhorou aprendizado em 90%"},
   { title: "melhorou aprendizado em 90%"}
  ],
  links: "google.com",
  image: product,
},
]
export const ProductShowcase = () => {

  return (
    <div className="py-24 text-white">
      <div className="container">
        <div className="flex justify-center text-white">
      <p className="uppercase font-semibold tracking-widest text-center text-white">Resultados em Mundo Real</p>
      </div>
      <h2 className="text-3xl md:text-5xl text-center mt-6 font-serif ">Featured Projects</h2>
      <p className="text-center mt-4 md:text-lg max-w-md mx-auto">Veja como nossos sistemas impactam o mundo das tics</p>
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {Projectos.map((link) => (
            <div key={link.titulo} className="relative z-0 overflow-hidden bg-gray-800
            after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2
            after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20
            px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="pb-16">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex
              gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{link.nome}</span>
                <span>&bull;</span>
                <span>{link.ano}</span>
                </div>
                <h3 className="text-2xl font-serif mt-2 md:mt-5 md:text-4xl">
                  {link.titulo}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                <ul className="flex gap-4 flex-col mt-4">
                  {link.results.map((resultado) => (
                    <li className="flex gap-2 text-sm text-white/50">{resultado.title}</li>
                  ))}
                  </ul>
                  <a href={link.links}>
                    <button className="bg-white text-gray-950 h-12 w-full
                     md:w-auto px-6 rounded-xl
                    font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        Aprecie o nossos projectos
                    </button>
                  </a>
                 </div>
                  <div className="relative">
                  <Image src={link.image} alt={link.titulo}
                   className="mt-8 -mb-4 md:-mb-0 lg:-mb-0
                   lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
            </div>
             </div>
            </div>
          ))}
        </div>
    </div>
 </div> 
  )
};

        