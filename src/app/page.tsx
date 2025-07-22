
import Feature from "@/sections/Features";
import { Footer } from "@/sections/Footer";

import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Navbar } from "@/sections/navbar";
import {Contact} from '@/sections/contact'
import { ProductShowcase } from "@/sections/ProductShowcase";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <LogoTicker />
 
    <Contact/>
    <Footer/>
    
    </>
  );
}
