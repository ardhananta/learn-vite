import React from 'react'
import { ReactTyped } from "react-typed";

function Section() {
  return (
    <>
    <div className="flex justify-end h-screen bg-slate-800">
        <div className='w-[75%] text-white p-10'>
            {/* Type js */}
            <h1 className='text-2xl font-bold pb-2'>
                Hello I'm <span>
                <ReactTyped
                strings={[
                  "Ardhananta Ibanez",
                  "Front-end Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className='text-blue-500'
                >
                </ReactTyped>
                </span>
            </h1>
            {/* Status */}
            <a href="" className='text-gray-400 text-lg'>Student | Programmer</a>
        </div>
    </div>
    </>
  )
}

export default Section;