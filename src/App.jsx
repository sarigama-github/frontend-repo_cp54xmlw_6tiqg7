import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Catalog from './components/Catalog'
import Footer from './components/Footer'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar onSearch={setSearch} />
      <main className="mt-16">
        <Hero />
        <Features />
        <Catalog search={search} />
      </main>
      <Footer />
    </div>
  )
}

export default App
