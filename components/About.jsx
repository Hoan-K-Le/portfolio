import React from 'react'

export default function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </h1>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">Write a bio about yourself</p>
          <p className="py-2 text-gray-600">Hobbies</p>
          <p className="py-2 text-gray-600">what makes you different</p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            {' '}
            Check out my latest Projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {/* put an image of yourself here */}
          <img
            className="rounded-xl"
            src="https://placekitten.com/200/300"
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  )
}
