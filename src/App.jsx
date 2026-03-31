import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import HeroBottoms from './components/Hero/HeroBottoms'
import Navbar from './components/Navbar/Navbar'
import PremiumTools from './components/PremiumTools/PremiumTools'
import Steps from './components/Steps/Steps'
import Pricing from './components/Pricing/Pricing'
import Workflow from './components/Workflow/Workflow'
import Footer from './components/Footer/Footer'
const dataPromiseFun = async () => {
  const res = await fetch('/data.json')
  return res.json();
}
const dataPromise = dataPromiseFun();
function App() {
  const [carts, setCarts] = useState([]);


  return (
    <>
      <header className=' shadow-xl sticky top-0 bg-base-100 z-5'>
        <Navbar carts={carts} />
      </header>
      <Hero />
      <HeroBottoms />
      <main className='max-w-7xl mx-auto '>
        <Suspense fallback={
          <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }>
          <PremiumTools carts={carts} setCarts={setCarts} dataPromise={dataPromise} />
        </Suspense>
      </main>
      <section className='bg-[#F9FAFC] w-full'>
        <Steps/>
      </section>
      <Pricing/>
      <Workflow/>
      <Footer/>
  
    </>
  )
}

export default App
