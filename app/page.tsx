'use client'
import Nav from '@/components/Nav'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Footer from '@/components/Footer';
import Hero from './home/Hero';
import About from './home/About';
import Experience from './home/Experience';
import Projects from './home/Projects';

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />

    </>
  )
}

export default HomePage