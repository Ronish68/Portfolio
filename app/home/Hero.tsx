import React from 'react'
import Image from 'next/image'
import Nav from '@/components/Nav'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const HeroSection = () => {
    const scaleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scaleRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(scaleRef.current, {
                scale: 1,
                transformOrigin: "center center"
            });

            // Mobile
            const mm = gsap.matchMedia();

            mm.add("(max-width: 639px)", () => {
                gsap.to(scaleRef.current, {
                    scale: 1.3,
                    ease: "none",
                    scrollTrigger: {
                        trigger: scaleRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            });

            // Tablet
            mm.add("(min-width: 640px) and (max-width: 1023px)", () => {
                gsap.to(scaleRef.current, {
                    scale: 1.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: scaleRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            });

            // Desktop
            mm.add("(min-width: 1024px)", () => {
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
            });
        });

        return () => ctx.revert();
    }, []);
    return (
        <>
            <section className="hero-section relative w-full h-screen bg-black overflow-hidden">
                
                <div className="absolute inset-0 flex justify-center items-center">
                    <div ref={scaleRef} className="w-[340px] sm:w-[420px] md:w-[500px] lg:w-[540px] max-w-full absolute z-5">
                        <Image
                            src="/ronish12.jpg"
                            alt="Hero Portrait"
                            width={720}
                            height={480}
                            className=" w-full h-auto "
                        />
                    </div>
                    <div className="relative flex justify-center items-center w-full">

                        <h1 className="absolute uppercase text-white font-bold z-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
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

                        <h1 className="absolute hero-text uppercase text-white font-bold z-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
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
        </>
    )
}

export default HeroSection