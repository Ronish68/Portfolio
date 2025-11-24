"use client"

import React from 'react'
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)
const contactPage = () => {
     const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
      setIsMounted(true);
    }, []);
    
     useEffect(() => {
        if (!isMounted) return;
        const textElements = document.querySelectorAll(".textSlideUp");
        textElements.forEach((element) => {
            gsap.from(element, {
                y: 150,
                opacity: 0,
                duration: 1.4,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        });
    }, [isMounted]);
    
    return (
        <>
            <Nav />
            <div className=" contactMe flex mb-30 textSlideUp">
                <div className='w-1/2 pt-32 m-10'>
                    <h1 className='textSlideUp uppercase text-6xl font-bold ' >Let's make something
                        <span className='text-stroke text-transparent'> awesome. </span>
                    </h1>
                    <p className='my-5 '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque iste sint, laudantium vero facilis sequi. Incidunt recusandae vel vero odio, nihil, repudiandae accusantium porro est iste nam tempora cumque quas.
                    </p>
                </div>
                <div className="formArea w-1/2 pt-38 mr-10">
                    <form action="">
                        <input className='p-5 m-2 border w-full' type="text" placeholder='Enter your name' />
                        <input className='p-5 m-2 border w-full' type="text" placeholder='Enter your email' />
                        <textarea className="p-5 h-48 m-2 border w-full" name="message" id="message" placeholder='Enter your message'></textarea>
                        <input className='uppercase bg-white text-black font-medium w-full p-4 m-2 hover:bg-transparent hover:text-white hover:border transition-all duration-800' type='submit' value="Submit"/>
                    </form>
                </div>
            </div>
            <div className="mainFooter flex justify-between items-center h-100 bg-zinc-900">
                <div className="logo ml-10">
                    <h1 className="text-white   text-7xl font-bold tracking-wide bg-zinc-900 rounded">
                        RONISH
                    </h1>
                    <span className=''>© 2025 Ronish Maharjan. All rights reserved.</span>
                </div>
                <div className="navlinks uppercase m-10">
                    <Link href="/" className='text-neutral-400 font-medium hover:text-white transition duration-300 m-3'>home</Link>
                    <Link href="/projects" className='text-neutral-400 font-medium hover:text-white transition duration-300 m-3'>projects</Link>
                    <Link href="/about" className='text-neutral-400 font-medium hover:text-white transition duration-300 m-3'>about me</Link>
                    <Link href="/contact" className='text-neutral-400 font-medium hover:text-white transition duration-300 m-3'>contact</Link>
                </div>
            </div>
        </>
    )
}

export default contactPage
