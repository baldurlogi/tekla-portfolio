import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Bridal from './pages/Bridal';
import About from './pages/About';
import Blog from './pages/Blog';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-[#f8f0e4] text-neutral-800'>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center text-3xl uppercase">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/bridal' element={<Bridal />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
