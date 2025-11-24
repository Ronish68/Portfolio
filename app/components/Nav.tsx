"use client"

import React, { useState } from 'react'
import { MdMenu, MdClose } from "react-icons/md";
import Link from 'next/link';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>

      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-5 md:px-10 pt-6 z-20">

        <div className='logo'>
          <Link href="/" className="text-white text-2xl sm:text-3xl font-bold tracking-wide bg-zinc-900 rounded">
            RONISH
          </Link>
        </div>
        <div className='text-4xl cursor-pointer' onClick={() => setMenuOpen(true)}>
          <MdMenu />
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black text-white flex flex-col justify-center items-center z-50 transform transition-all duration-600  ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        <MdClose
          className="absolute top-10 right-10 text-4xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <div className="text-6xl flex flex-col space-y-8 text-center">
          <ul>
            <li className='m-10'>
              <Link href="/" className="hover:text-gray-400 cursor-pointer font-bold duration-300">HOME</Link>
            </li>
            <li className='m-10'>
              <Link href="/projects" className="hover:text-gray-400 cursor-pointer font-bold duration-300">PROJECTS</Link>
            </li>
            <li className='m-10'>
              <Link href="/about" className="hover:text-gray-400 cursor-pointer font-bold duration-300">ABOUT</Link>
            </li>
            <li className='m-10'>
              <Link href="/contact" className="hover:text-gray-400 cursor-pointer font-bold duration-300">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav