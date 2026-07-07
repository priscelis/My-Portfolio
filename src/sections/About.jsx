import React from 'react'

function About() {
  /* Creo que tengo una idea, que las hojas cambien de sentido cada vez que la pagina se reinicie, mientras tantos, seran estaticas */
  return (
    <>
    <main className='w-full h-190 bg-secundario p-20 flex flex-row'>
      <section className='w-1/3 h-full  relative '>
        <img src="src/components/UI/hoja-cae.png" alt="hoja1" className='absolute top-[0%] left-[2%] w-30 rotate-20'/>

        <img src="src/components/UI/las-hojas-de.png" alt="hoja2" className='absolute top-[5%] left-[35%] w-18 rotate-15'/>

        <img src="src/components/UI/hoja-de-roble.png" alt="hoja3" className='absolute top-[25%] left-[40%] w-20 rotate-80'/>

        <img src="src/components/UI/disenar-un-sitio-web.png" alt="hoja4" className='absolute top-[60%] left-[35%] w-20 rotate-45'/>

        <img src="src/components/UI/hojas-de-otono.png" alt="hoja5" className='absolute top-[16%] left-[55%] w-14 rotate-45'/>

         <img src="src/components/UI/hoja-cae.png" alt="hoja1" className='absolute top-[40%] left-[50%] w-40 rotate-180'/>

         <img src="src/components/UI/las-hojas-de.png" alt="hoja2" className='absolute top-[25%] left-[70%] w-25 rotate-160'/>

         <img src="src/components/UI/hojas-de-otono.png" alt="hoja5" className='absolute top-[40%] left-[23%] w-18 rotate-220'/>

         <img src="src/components/UI/hoja-de-roble.png" alt="hoja3" className='absolute top-[58%] left-[10%] w-26 rotate-20'/>

         <img src="src/components/UI/disenar-un-sitio-web.png" alt="hoja4" className='absolute top-[30%] left-[10%] w-15 rotate-180'/>

        <img src="src/components/UI/plantar-un-arbol.png" alt="flor" className='absolute top-[90%] left-[30%] w-25 rotate-180'/>

        <img src="src/components/UI/hoja-cae.png" alt="hoja1" className='absolute top-[80%] left-[67%] w-20 rotate-80'/>
      
      <img src="src/components/UI/hoja-de-roble.png" alt="hoja3" className='absolute top-[70%] left-[55%] w-16 rotate-180'/>

      <img src="src/components/UI/hojas-de-otono.png" alt="hoja5" className='absolute top-[80%] left-[2%] w-12 rotate-22'/>

       <img src="src/components/UI/plantar-un-arbol.png" alt="flor" className='absolute top-[5%] left-[70%] w-16 rotate-90'/>

       <img src="src/components/UI/hoja-de-roble.png" alt="hoja3" className='absolute top-[78%] left-[30%] w-16 rotate-0'/>
      </section>

      <section className='w-2/3 h-full p-5 '>
        <h1 className='text-6xl text-center underline underline-offset-0.5 decoration-3'>Sobre mi</h1>
        <br />
        <p className='text-2xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis quas libero natus pariatur itaque voluptatum enim molestias beatae incidunt tenetur, ipsam ipsa temporibus deleniti error officia perspiciatis molestiae ex.</p>
        <br />
        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque tenetur eligendi minima error rem, commodi blanditiis illum praesentium, magnam voluptatibus ex nisi perspiciatis cupiditate odit, soluta consequuntur nemo vitae.</p>
      </section>

    </main>
    
    </>
  )
}

export default About