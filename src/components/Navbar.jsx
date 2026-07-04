import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='navbarbg bg-fondo h-20 p-8 flex justify-between border-borde border-b-[2.5px] items-center'>
    <ul>
     <li>
        <h2 className='text-4xl font-normal font-fraunces text-text'>Pris</h2>
      </li> 
      </ul>

      <ul className='flex flex-row justify-end h-13.75 gap-7 items-center'>
     
        {/* <li>
          <a href="#"  className=" font-fraunces text-sm relative inline-block text-[var(--text)] after:content-[''] after:rounded-[40px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-[var(--borde)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Home</a>
          </li> */}
       
       <li> 
        <a href="#" className="text-[18px] relative inline-block after:content-[''] after:rounded-[40px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-borde after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ">Sobre mi
        </a>
        </li>
        <li>
        <a href="#" className="text-[18px] relative inline-block after:content-[''] after:rounded-[40px]  after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-borde after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Proyectos</a>
        </li>
        
        <li>
        <a href="#" className="text-[18px] relative inline-block after:content-[''] after:rounded-[40px] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-borde after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Tecnologias</a>
        </li>

        <li>
        <a href="#" className="text-[18px] relative inline-block after:content-[''] after:absolute after:rounded-[40px] after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-borde after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">Contacto</a>
        </li>
      </ul>

    </nav>
    
    </>
  )
}

export default Navbar