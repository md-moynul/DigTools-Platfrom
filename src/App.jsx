import './App.css'
import Hero from './components/Hero/Hero'
import HeroBottoms from './components/Hero/HeroBottoms'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <header className=' shadow-xl'>
        <Navbar />
      </header>
      <Hero/>
        <HeroBottoms/>
      <main className='max-w-7xl mx-auto '>
        
      </main>
    </>
  )
}

export default App
