import React from 'react';

export const Contact = () => {
    return (
        <div className='py-16 pt-12 bg-[#EAEEFE]'>
           <div className='container'>
            <div className='bg-gradient-to-r from-emerald-400 to-sky-400 text-gray-600 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0'>
                <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
                    <div>
                        <h2 className='font-serif md:text-3xl text-2xl'>Vamos criar algo incrivel juntos</h2>
                        <p className='text-sm md:text-base mt-2'>Ready to bring your next project to life? Vamos criar conectar e desenvolver  solucoes praticas</p>
                    </div>
                    <button className='text-white border border-gray-900
                     bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2'>
                        <span className='font-semibold'>
                            Ligue nos
                            </span>
                    </button>
                </div>
            </div>
            </div> 
        </div>
    );
}
;