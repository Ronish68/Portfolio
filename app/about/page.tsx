"use client"
import React from 'react'
import Nav from '../components/Nav'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const aboutPage = () => {
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
            <div className='about pt-28 md:pt-38 mx-10 flex flex-col lg:flex-row'>
                <div className="aboutimage w-[390px] md:w-[540px] max-w-full ">
                    <Image
                        src="/ronish12.jpg"
                        alt="Hero Portrait"
                        width={4000}
                        height={4000}
                        className=" w-full h-auto rounded-lg"
                    />
                </div>
                <div className="aboutdesc md:w-1/2 md:mx-20 my-10">
                    <h1 className='uppercase font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl'>Hi, i am <span className='text-stroke text-transparent'>Ronish</span></h1>
                    <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, facilis quas minima praesentium quasi deserunt! Dolorem saepe magni perferendis, incidunt quia dicta delectus debitis maxime veniam, beatae aliquam sapiente fugiat!
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore optio exercitationem repellat ducimus unde illum dolores odit doloremque natus hic laudantium autem eos, animi, id quam, aspernatur ex saepe commodi.
                    </p>
                    <div>
                        <h1 className='uppercase text-4xl mt-5 font-bold'>Experience</h1>
                        <div>
                            <p className='border-b border-zinc-500 py-5'>2025-current | Web development intern at Next In Tech Pvt Ltd</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default aboutPage
