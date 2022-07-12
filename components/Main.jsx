import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Hoans tryna get a jeeerb
          </p>
          <h1 className="py-4 text-gray-700">
            <span className="text-[#5651e5]">Hoan Le</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full-Stack Software Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am an innovative full-stack engineer who brings a new perspective
            to the team when dealing with problem-solving. I find ways to adapt
            when it is needed, and am intellectually curious when conquering
            problems where I lack prior experience. Through my experience, I’ve
            gained skills such as leadership, business strategist, and
            developing products/solutions under pressure.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div
              className="
            rounded-full
            shadow-lg
            shadow-gray-400
            p-6
            cursor-pointer
            hover:scale-125
            ease-in
            duration-500"
            >
              <FaLinkedinIn />
            </div>
            <div
              className="
            rounded-full
            shadow-lg
            shadow-gray-400
            p-6
            cursor-pointer
            hover:scale-125
            ease-in
            duration-500"
            >
              <FaGithub />
            </div>
            <div
              className="
            rounded-full
            shadow-lg
            shadow-gray-400
            p-6
            cursor-pointer
            hover:scale-125
            ease-in
            duration-500"
            >
              <AiOutlineMail />
            </div>
            <div
              className="
            rounded-full
            shadow-lg
            shadow-gray-400
            p-6
            cursor-pointer
            hover:scale-125
            ease-in
            duration-500"
            >
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
