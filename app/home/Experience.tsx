import React from 'react'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ExperienceSection = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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

    return (
        <>
            <section className="educationAndExperience-section flex flex-col md:flex-row gap-10 px-6 sm:px-10 py-20">
                <div className='Experience w-full md:w-1/2 md:ml-10 md:mt-30 '>
                    <h1 className='flex justify-center uppercase text-3xl sm:text-4xl font-bold textSlideUp'>Experience</h1>
                    <div className="ExpGrid workgrid flex flex-col bg-zinc-900 p-5 my-5 rounded-lg w-full min-h-[140px]">
                        <h1 className=' uppercase font-bold'>Internship</h1>
                        <span className='text-neutral-400 font-medium '>2025-current</span>
                        <span className='text-neutral-400 font-medium'>Next In Tech Pvt Ltd, Tahachal, Kathmandu</span>
                    </div>
                </div>
                <div className="education w-full md:w-1/2 md:mx-10 md:my-30">
                    <h1 className='flex justify-center uppercase text-3xl sm:text-4xl font-bold textSlideUp text-stroke text-transparent'>Education</h1>
                    <div className="eduGrid workgrid flex flex-col bg-zinc-900 p-5 my-5 rounded-lg w-full min-h-[140px]">
                        <h1 className=' uppercase font-bold'>SEE</h1>
                        <span className='text-neutral-400 font-medium '>2019</span>
                        <span className='text-neutral-400 font-medium'>Milestone School, Lagankhel, Lalitpur</span>
                    </div>
                    <div className="eduGrid workgrid flex flex-col bg-zinc-900 p-5 my-5 rounded-lg w-full min-h-[140px]">
                        <h1 className=' uppercase font-bold'>+2</h1>
                        <span className='text-neutral-400 font-medium'>2019-2021</span>
                        <span className='text-neutral-400 font-medium'>Nightingale College, Kupondole, Lalitpur</span>
                    </div>
                    <div className="eduGrid workgrid flex flex-col bg-zinc-900 p-5 my-5 rounded-lg w-full min-h-[140px]">
                        <h1 className=' uppercase font-bold'>Bachelors in Computer Application</h1>
                        <span className='text-neutral-400 font-medium'>2021-current</span>
                        <span className='text-neutral-400 font-medium'>Nagarjuna College of Information Technology, Sankhamul, Lalitpur</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExperienceSection