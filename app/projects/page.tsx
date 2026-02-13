"use client"

import React from 'react'
import Nav from '@/components/Nav'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import Footer from '@/components/Footer'
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
        <h1 className='textSlideUp uppercase text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-40 ml-10 '>My
          <span className='text-stroke text-transparent'> Projects</span>
        </h1>
        <div className="workgrid workgrid1 flex flex-col lg:flex-row my-20 lg:pr-20 ">
          <div className="workimage1 w-auto lg:w-1/2 mx-5 md:mx-10 duration-1000" ref={img1}>
            <Image
              src="/images/pahelo-batti.jpg"
              alt="Hero Portrait"
              width={1800}
              height={450}
              className=" w-full h-[300px] md:h-[450px] rounded-xl object-cover "
            />
          </div>
          <div className="workdesc1 lg:w-1/2 flex flex-col">
            <div className="desc mx-5 md:mx-10 lg:mx-0">
              <h1 className='uppercase text-3xl sm:text-4xl font-bold mt-10'>Pahelo Batti Webpage</h1>
              <h2 className='my-2 md:my-5 lg:my-5 text-neutral-400 font-semibold'>Frontend development</h2>
              <p className='text-neutral-400 font-medium my-2 md:my-5 lg:my-5'>Developed an interactive webpage featuring a unique, modern layout and intuitive user experience. The project focuses on smooth transitions and responsive interactions to create a seamless browsing flow. Emphasis was placed on visual aesthetics, performance, and engaging UI elements to deliver a polished and immersive digital experience.</p>
              <span className='techStack text-neutral-400 font-medium'>Tech Stack: Javascript, Nextjs, Tailwind CSS, Framer Motion</span>
            </div>
            <div className="button1 mt-auto">
              <button className='uppercase font-medium p-3 mx-5 md:mx-10 lg-mx-0 md:my-5 my-2 lg:my-0 lg:mx-0 lg:p-5 items-end cursor-pointer bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-1000'
                onMouseEnter={() => img1.current?.classList.add('scale-80', 'grayscale')}
                onMouseLeave={() => img1.current?.classList.remove('scale-80', 'grayscale')}
              >view project</button>              </div>
          </div>
        </div>
        <div className="workgrid workgrid2 flex flex-col lg:flex-row my-20 lg:pr-20 ">
          <div className="workimage2 w-auto lg:w-1/2 mx-5 md:mx-10 duration-1000" ref={img2}>
            <Image
              src="/images/cms.jpg"
              alt="Hero Portrait"
              width={1800}
              height={450}
              className=" w-full h-[300px] md:h-[450px] rounded-xl object-cover "
            />
          </div>
          <div className="workdesc2 lg:w-1/2 flex flex-col">
            <div className="desc mx-5 md:mx-10 lg:mx-0">
              <h1 className='uppercase text-3xl sm:text-4xl font-bold mt-10'>Sesame Dashboard</h1>
              <h2 className='my-2 md:my-5 lg:my-5 text-neutral-400 font-semibold'>Backend development</h2>
              <p className='text-neutral-400 font-medium my-2 md:my-5 lg:my-5'>A role-based dashboard system that delivers different features and access levels depending on the user’s role. I built the core logic for authentication, authorization, and data management to ensure secure and efficient operations. The system supports personalized user experiences, structured permissions, and scalable functionality across multiple user types.</p>
              <span className='techStack text-neutral-400 font-medium'>Tech Stack: Nestjs, Postgres</span>
            </div>
            <div className="button2 mt-auto">
              <button className='uppercase font-medium p-3 mx-5 md:mx-10 lg-mx-0 md:my-5 my-2 lg:my-0 lg:mx-0 lg:p-5 items-end cursor-pointer bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-1000'
                onMouseEnter={() => img2.current?.classList.add('scale-80', 'grayscale')}
                onMouseLeave={() => img2.current?.classList.remove('scale-80', 'grayscale')}
              >view project</button>              </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default projectsPage
