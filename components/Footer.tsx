"use client"
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className=" contactMe  flex flex-col justify-center h-120 lg:h-180 max-w-[900px] mx-5 lg:mx-10">
                    <h1 className='textSlideUp uppercase text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold '>Let's create
                        <span className='text-stroke text-transparent'> something great </span>
                        together</h1>
                    <Link href="/contact" className='textSlideUp uppercase w-max text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-5 hover:tracking-[.25em] hover:font-bold duration-400'>contact me</Link>
                </div>
                <div className="mainFooter flex flex-col md:flex-row md:justify-between items-center h-60 md:h-100 bg-zinc-900">
                    <div className="logo ml-10">
                        <h1 className="text-white mt-5 md:mt-0 text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-wide bg-zinc-900 rounded">
                            RONISH
                        </h1>
                        <span className=''>© 2025 Ronish Maharjan. All rights reserved.</span>
                    </div>
                    <div className="navlinks uppercase m-10">
                        <Link href="/" className='text-neutral-400 font-medium hover:text-white transition duration-300 lg:m-3'>home</Link>
                        <Link href="/projects" className='text-neutral-400 font-medium hover:text-white transition duration-300 lg:m-3'>projects</Link>
                        <Link href="/about" className='text-neutral-400 font-medium hover:text-white transition duration-300 lg:m-3'>about me</Link>
                        <Link href="/contact" className='text-neutral-400 font-medium hover:text-white transition duration-300 lg:ml-3'>contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
