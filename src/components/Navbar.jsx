import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='navbarbg bg-amber-500 p-3 h-14 flex justify-between border-blue-700 border-4 items-center'>
    <section>
      <h2>frfrfr</h2>
      </section>

      <section className='flex flex-row justify-end h-13.75 gap-4 items-center'>
     
        <a href="#"  className="relative inline-block text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-purple-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Home</a>
        <a href="#" className="relative inline-block text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-purple-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Sobre mi</a>
        <a href="#" className="relative inline-block text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-purple-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Proyectos</a>
        <a href="#" className="relative inline-block text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-purple-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Tecnologias</a>
        <a href="#" className="relative inline-block text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-purple-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Contacto</a>
      </section>

    </nav>
    
    </>
  )
}

export default Navbar