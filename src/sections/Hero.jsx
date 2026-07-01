function Hero() {
  return (
    <>
    <main className=" w-full h-190 flex justify-center items-center">

      <section className="border-6 w-350 h-130 rounded-[50px] bg-fondo  border-borde flex justify-between items-center p-16">
       <div className="flex flex-col">
        <h1 className="text-6xl font-fraunces text-text">Hola, soy</h1>
        <h1 className="text-6xl font-fraunces text-text">Priscelis Codrington</h1>
        <h2 className="text-6xl underline underline-offset-0.5 text-text font-crimson decoration-3"> Desarrolladora Junior</h2>
        <br />
         <div className="flex flex-row gap-4">
          <img src="src/components/UI/github.png" alt="" className="h-15"/>
          <img src="src/components/UI/linkedin.png" alt="" className="h-15"/>
         </div>
          </div>

          <div className="border-amber-700 border-4 h-100 rounded-full w-100 bg-blue-900 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1686454116831-05e1bbe04ee7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover w-full h-full"/>
          </div>
      </section>
    
    </main>
    </>
  )
}

export default Hero