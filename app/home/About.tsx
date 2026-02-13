import React from 'react'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const AboutSection = () => {
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
                    trigger: element,  // Each element triggers its own animation
                    start: "top 80%",
                    toggleActions: "play none none none",

                },
            });
        });
    }, [isMounted]);

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
    return (
        <>
            <section className='about-section'>
                <div className="about textSlideUp w-full max-w-[800px] mx-5 sm:mx-10 my-10 md:my-40 font-bold">
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-normal'
                    >Hi, i'm a passionate
                        <span className='text-stroke text-transparent'> web developer </span>
                        from patan,
                        <span className='text-stroke text-transparent'> lalitpur </span>

                    </h1>
                </div>
            </section>

            <section className="stack-section uppercase  overflow-hidden">
                <div className='space-y-10'>
                    <h1 ref={techRef1} className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap flex my-10'>
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
                    <h1 ref={techRef2} className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap'>
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
        </>
    )
}

export default AboutSection