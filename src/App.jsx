import { useState } from 'react'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'

function App() {
  const [nav, setNav] = useState(false)

  const links = [
    { id: 1, link: 'about' },
    { id: 2, link: 'experience' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ]

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:oluwaseyiayoola97@gmail.com',
    },
  ]

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
