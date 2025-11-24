"use client";

import React, { useRef, useEffect, useState } from 'react'
import Nav from './components/Nav'
import Image from 'next/image'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { FaGripLines } from 'react-icons/fa'
import Footer from './components/Footer';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const techRef1 = useRef<HTMLHeadingElement>(null);
  const techRef2 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!techRef1.current) return;

    gsap.to(techRef1.current, {
      x: "-50%", // Move left by half (one full set)
      ease: "none",
      scrollTrigger: {
        trigger: techRef1.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Slight smoothing
      },
    });
  }, []);

  useEffect(() => {
    if (!techRef2.current) return;
    gsap.set(techRef2.current, { x: "-50%" });
    gsap.to(techRef2.current, {
      x: "0%", // Move right (starting from -50%)
      ease: "none",
      scrollTrigger: {
        trigger: techRef2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
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
          trigger: element,  // Each element triggers its own animation
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
          trigger: grid,        // Each grid triggers its own animation
          start: "top 60%",     // When THIS grid enters viewport
          toggleActions: "play none none none",
        },
      });
    });
  }, [isMounted]);

  const scaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scaleRef.current) return;
    gsap.set(scaleRef.current, {
      scale: 1,
      transformOrigin: "center center"
    });

    gsap.to(scaleRef.current, {
      scale: 1.7,
      ease: "none",
      scrollTrigger: {
        trigger: scaleRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  const img1 = useRef<HTMLImageElement>(null);
  const img2 = useRef<HTMLImageElement>(null);
  const img3 = useRef<HTMLImageElement>(null);

  return (
    <>
      <section className="hero-section relative w-full h-screen bg-black overflow-hidden">
        <Nav />

        <div className="absolute inset-0 flex justify-center items-center">

          <div ref={scaleRef} className="w-[540px] max-w-full absolute z-5">
            <Image
              src="/ronish12.jpg"
              alt="Hero Portrait"
              width={4000}
              height={4000}
              className=" w-full h-auto "
            />
          </div>
          <div className="relative flex justify-center items-center w-full">

            <h1 className="absolute uppercase text-white text-8xl font-bold z-1">
              Web Developer
              {/* <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "a Student"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
            </h1>

            <h1 className="absolute hero-text uppercase text-white text-8xl font-bold z-10">
              Web Developer

              {/* <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "a Student"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />             */}
            </h1>
          </div>
        </div>

      </section>

      <section className=''>
        <div className="about textSlideUp w-200 mx-10 my-40 font-bold">
          <h1 className='text-6xl uppercase tracking-normal'
          >Hi, i'm a passionate
            <span className='text-stroke text-transparent'> web developer </span>
            from patan,
            <span className='text-stroke text-transparent'> lalitpur </span>

          </h1>
        </div>
      </section>

      <section className="uppercase  overflow-hidden">
        <div className='space-y-10'>
          <h1 ref={techRef1} className='text-6xl font-bold whitespace-nowrap flex my-10'>
            <span>
              Node /
              <span className='text-stroke text-transparent'> React </span>
              / HTML /
              <span className='text-stroke text-transparent'> CSS </span>
              / Javascript /
              <span className='text-stroke text-transparent'> Next </span>
              / Nest /
              <span className='text-stroke text-transparent'> Git </span>
              / Github /
              <span className='text-stroke text-transparent '> Typescript </span>
            </span>
            <span>
              HTML /
              <span className='text-stroke text-transparent'> CSS </span>
              / Javascript /
              <span className='text-stroke text-transparent'> React </span>
              / Next /
              <span className='text-stroke text-transparent'> Node </span>
              / Nest /
              <span className='text-stroke text-transparent'> Git </span>
              / Github /
              <span className='text-stroke text-transparent'> Typescript </span>
            </span>
          </h1>
          <h1 ref={techRef2} className='text-6xl font-bold whitespace-nowrap'>
            <span>
              HTML /
              <span className='text-stroke text-transparent'> CSS </span>
              / Javascript /
              <span className='text-stroke text-transparent'> React </span>
              / Next /
              <span className='text-stroke text-transparent'> Node </span>
              / Nest /
              <span className='text-stroke text-transparent'> Git </span>
              / Github /
              <span className='text-stroke text-transparent'> Typescript </span>
            </span>
            <span>
              HTML /
              <span className='text-stroke text-transparent'> CSS </span>
              / Javascript /
              <span className='text-stroke text-transparent'> React </span>
              / Next /
              <span className='text-stroke text-transparent'> Node </span>
              / Nest /
              <span className='text-stroke text-transparent'> Git </span>
              / Github /
              <span className='text-stroke text-transparent'> Typescript </span>
            </span>

          </h1>
        </div>
      </section>
      <section className="educationAndExperience flex">
        <div className='Experience w-1/2 ml-10 mt-30 '>
          <h1 className='flex justify-center uppercase text-4xl font-bold textSlideUp'>Experience</h1>
          <div className="ExpGrid workgrid flex flex-col bg-zinc-900 p-5 my-5 rounded-lg w-full h-[140px]">
            <h1 className=' uppercase font-bold'>Internship</h1>
            <span className='text-neutral-400 font-medium '>2025-current</span>
            <span className='text-neutral-400 font-medium'>Next In Tech Pvt Ltd, Tahachal, Kathmandu</span>
          </div>
        </div>
        <div className="education w-1/2 mx-10 my-30">
          <h1 className='flex justify-center uppercase text-4xl font-bold textSlideUp text-stroke text-transparent'>Education</h1>
          <div className="eduGrid workgrid flex flex-col bg-zinc-900 p-5 my-5 rounded-lg w-full h-[140px]">
            <h1 className=' uppercase font-bold'>SEE</h1>
            <span className='text-neutral-400 font-medium '>2019</span>
            <span className='text-neutral-400 font-medium'>Milestone School, Lagankhel, Lalitpur</span>
          </div>
          <div className="eduGrid workgrid flex flex-col bg-zinc-900 p-5 my-5 rounded-lg w-full h-[140px]">
            <h1 className=' uppercase font-bold'>+2</h1>
            <span className='text-neutral-400 font-medium'>2019-2021</span>
            <span className='text-neutral-400 font-medium'>Nightingale College, Kupondole, Lalitpur</span>
          </div>
          <div className="eduGrid workgrid flex flex-col bg-zinc-900 p-5 my-5 rounded-lg w-full h-[140px]">
            <h1 className=' uppercase font-bold'>Bachelors in Computer Application</h1>
            <span className='text-neutral-400 font-medium'>2021-current</span>
            <span className='text-neutral-400 font-medium'>Nagarjuna College of Information Technology, Sankhamul, Lalitpur</span>
          </div>
        </div>
      </section>
      <section className='projects'>
        <div className="works">
          <h1 className='textSlideUp uppercase text-6xl font-bold mt-40 ml-10 '>some of
            <span className='text-stroke text-transparent'> my works</span>
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
                <p className='text-neutral-400 font-medium my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut error at facilis ex incidunt consequatur nisi expedita tempore ipsum. Architecto impedit eaque minima dolorem! Deleniti molestias cumque earum distinctio nesciunt.</p>
                <span className='techStack text-neutral-400 font-medium'>Tech Stack: Nextjs, Nodejs, Tailwind CSS</span>
              </div>
              <div className="button1 mt-auto">
                <button className='uppercase font-medium p-5 items-end cursor-pointer bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-1000'
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
                <p className='text-neutral-400 font-medium my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut error at facilis ex incidunt consequatur nisi expedita tempore ipsum. Architecto impedit eaque minima dolorem! Deleniti molestias cumque earum distinctio nesciunt.</p>
                <span className='techStack text-neutral-400 font-medium'>Tech Stack: Nextjs, Nodejs, Tailwind CSS</span>
              </div>
              <div className="button2 mt-auto">
                <button className='uppercase font-medium p-5 cursor-pointer items-end bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-1000'
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
                <p className='text-neutral-400 font-medium my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut error at facilis ex incidunt consequatur nisi expedita tempore ipsum. Architecto impedit eaque minima dolorem! Deleniti molestias cumque earum distinctio nesciunt.</p>
                <span className='techStack text-neutral-400 font-medium'>Tech Stack: Nextjs, Nodejs, Tailwind CSS</span>
              </div>
              <div className="button3 mt-auto">
                <button className='uppercase font-medium p-5 cursor-pointer items-end bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-1000'
                  onMouseEnter={() => img3.current?.classList.add('scale-80', 'grayscale')}
                  onMouseLeave={() => img3.current?.classList.remove('scale-80', 'grayscale')}
                >view project</button>
              </div>
            </div>
          </div>
        </div>
        <div className="allProjectButton flex justify-center textSlideUp">
          <Link href="/projects">
            <button className='uppercase font-medium p-5 cursor-pointer items-end bg-transparent border border-white hover:bg-white hover:text-black transition-all duration-1000'>view all project</button>
          </Link>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default HomePage