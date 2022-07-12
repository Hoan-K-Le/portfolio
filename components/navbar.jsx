import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Navbar() {
  const [nav, setNavbar] = useState(false) // functionality for navbar

  const handleNavBar = () => {
    setNavbar(!nav)
  }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <Link href="/">Home</Link>
       
        <Link href="/about">About Me</Link> */}
        <Image
          src="https://placekitten.com/300/300"
          alt="placeholder"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppeercase hover:border-b">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppeercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppeercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppeercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppeercase hover:border-b">
                Contacts
              </li>
            </Link>
          </ul>
          {/* adding icons */}
          <div onClick={handleNavBar} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Menu / background overlay */}
      <div
        className={
          nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 bg-[#ecf0f3] ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/firstmatee.png"
                alt="image"
                width="87"
                height="35"
              />
              <div
                onClick={handleNavBar}
                className="rounded-full shadow-xl shadow-gray-500 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Building Hoan's Portfolio to get a juuuurb
              </p>
            </div>
            {/* closing out the menu */}
            <div className="py-4 flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Project</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>

              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#2727aa]">
                  Connect with me!
                </p>
                <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
