"use client"

import React from 'react'
import Nav from '../components/Nav'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import Footer from '../components/Footer'
import ScrollTrigger from 'gsap/dist/ScrollTrigger' 


gsap.registerPlugin(ScrollTrigger)
const projectsPage = () => {
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
}, []);


    const img1 = useRef<HTMLImageElement>(null);
    const img2 = useRef<HTMLImageElement>(null);
    const img3 = useRef<HTMLImageElement>(null);

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

    useEffect(() => {
        if (!isMounted) return;
        const workgrids = document.querySelectorAll(".workgrid");
        workgrids.forEach((grid) => {
            gsap.from(grid, {
                y: 200,
                opacity: 0,
                duration: 1.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: grid,
                    start: "top 60%",
                    toggleActions: "play none none none",
                },
            });
        });
    }, [isMounted]);

    return (
        <>
            <Nav />
            <div className="works">
                <h1 className='textSlideUp uppercase text-6xl font-bold mt-40 ml-10 '>My
                    <span className='text-stroke text-transparent'> Projects</span>
                </h1>
                <div className="workgrid workgrid1 flex my-20 pr-20 ">
                    <div className="workimage1 w-[1800px] mx-10 duration-1000" ref={img1}>
                        <Image
                            src="/workimage.jpg"
                            alt="Hero Portrait"
                            width={4000}
                            height={4000}
                            className=" w-full h-[450px] rounded-xl object-cover "
                        />
                    </div>
                    <div className="workdesc1 flex flex-col">
                        <div className="desc">
                            <h1 className='uppercase text-4xl font-bold mt-10'>E-commerce Website</h1>
                            <h2 className='my-5 text-neutral-400 font-semibold'>Website development</h2>
                            <p className='text-neutral-400 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut error at facilis ex incidunt consequatur nisi expedita tempore ipsum. Architecto impedit eaque minima dolorem! Deleniti molestias cumque earum distinctio nesciunt.</p>
                        </div>
                        <div className="button1 mt-auto">
                            <button className='uppercase font-medium p-5 items-end bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-1000'
                                onMouseEnter={() => img1.current?.classList.add('scale-80', 'grayscale')}
                                onMouseLeave={() => img1.current?.classList.remove('scale-80', 'grayscale')}
                            >view project</button>              </div>
                    </div>
                </div>
                <div className="workgrid workgrid2 flex my-20 pr-20">
                    <div className="workimage2 w-[1800px] mx-10 duration-1000" ref={img2}>
                        <Image
                            src="/workimage.jpg"
                            alt="Hero Portrait"
                            width={4000}
                            height={4000}
                            className=" w-full h-[450px] rounded-xl object-cover "
                        />
                    </div>
                    <div className="workdesc2 flex flex-col">
                        <div className="desc">
                            <h1 className='uppercase text-4xl font-bold mt-10'>E-commerce Website</h1>
                            <h2 className='my-5 text-neutral-400 font-semibold'>Website development</h2>
                            <p className='text-neutral-400 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut error at facilis ex incidunt consequatur nisi expedita tempore ipsum. Architecto impedit eaque minima dolorem! Deleniti molestias cumque earum distinctio nesciunt.</p>
                        </div>
                        <div className="button2 mt-auto">
                            <button className='uppercase font-medium p-5 items-end bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-1000'
                                onMouseEnter={() => img2.current?.classList.add('scale-80', 'grayscale')}
                                onMouseLeave={() => img2.current?.classList.remove('scale-80', 'grayscale')}
                            >view project</button>              </div>
                    </div>
                </div>
                <div className="workgrid workgrid3 flex my-20 pr-20">
                    <div className="workimage3 w-[1800px] mx-10 duration-1000" ref={img3}>
                        <Image
                            src="/workimage.jpg"
                            alt="Hero Portrait"
                            width={4000}
                            height={4000}
                            className=" w-full h-[450px] rounded-xl object-cover "
                        />
                    </div>
                    <div className="workdesc3 flex flex-col">
                        <div className="desc">
                            <h1 className='uppercase text-4xl font-bold mt-10'>E-commerce Website</h1>
                            <h2 className='my-5 text-neutral-400 font-semibold'>Website development</h2>
                            <p className='text-neutral-400 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut error at facilis ex incidunt consequatur nisi expedita tempore ipsum. Architecto impedit eaque minima dolorem! Deleniti molestias cumque earum distinctio nesciunt.</p>
                        </div>
                        <div className="button3 mt-auto">
                            <button className='uppercase font-medium p-5 items-end bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-1000'
                                onMouseEnter={() => img3.current?.classList.add('scale-80', 'grayscale')}
                                onMouseLeave={() => img3.current?.classList.remove('scale-80', 'grayscale')}
                            >view project</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default projectsPage
