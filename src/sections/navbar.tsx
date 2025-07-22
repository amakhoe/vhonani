import Image from "next/image";
import logo from '@/assets/logo_monochromatic.png'


export const Navbar = () => {
      const NavLinks = [
          {id:1, label: "Home", href:"#"},
          {id:2,label: "sobre", href:"#"},
          {id:3, label: "servicos", href:"#"},
          {id:4, label: "conctatos", href:"#"}
      ];

      return (
      <div className="transition-all duration-200 h-[12vh] z-[100] fixed overflow-hidden w-full top-0 backdrop-blur-sm">
        <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
          {/*logo */}
          <div className="text-white font-semibold text-2xl sm:text-3xl">
                Vhonani
          </div>
          {/*logo */}
          <div className="lg:flex items-center space-x-10 hidden">
              {NavLinks.map((link) => (
                <div className="text-white font-medium transition-all duration-200 cursor-pointer" key={link.id}>
                  <p>{link.label}</p>
                  </div>
              ))}
          </div>
          {/*hamburguer */}
          <div>
            <button className="text-[#00040f]  border-b-[1.5px] p-2 border-white bg-white rounded-md">fale conosco</button>
          </div>
        </div>
      </div>
    )
}