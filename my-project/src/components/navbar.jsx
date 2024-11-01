import React, { useState } from 'react';
import { MdVerified } from "react-icons/md";
import { BsFillCloudSunFill, BsFillCloudMoonFill, BsSendPlus } from "react-icons/bs";
import { AiOutlineHome  } from "react-icons/ai";
import { GiButterflyFlower } from "react-icons/gi";
import { PiPencilSimpleLine } from "react-icons/pi";
import { GoProjectRoadmap } from "react-icons/go";
import { RiMindMap } from "react-icons/ri";

function Navbar() {
  const [isDayMode, setIsDayMode] = useState(false); // State untuk menentukan mode siang/malam

  const toggleMode = () => {
    setIsDayMode(prevState => !prevState); // Toggle state
  };

  return (
    <div id='background' className={`w-[20%] h-screen p-6 rounded-e-2xl shadow-2xl shadow-black ${isDayMode ? 'bg-slate-300' : 'bg-slate-900 text-white'}`}>
        {/* Responsife dark mode */}
      <div className='flex' onClick={toggleMode} style={{ cursor: 'pointer' }}>
        {isDayMode ? <BsFillCloudMoonFill size={25} /> : <BsFillCloudSunFill size={25} />}
      </div>
      {/* My profile */}
      <div className="flex justify-center">
        <div className="rounded-full shadow-2xl border w-[100px] p-1">
          <img 
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" 
            alt="Deskripsi Gambar" 
            className='rounded-full w-[100px]'
          />
        </div> 
      </div>
      {/* Verivy my name */}
      <div className="flex gap-2 pt-5 items-center justify-center">
        <h1 className='font-sans font-semibold text-xl'>Ardhananta Ibanez</h1> 
        <MdVerified size={20} className='text-sky-500'/>
      </div>
      {/* Instagran name */}
      <div className={`flex justify-center border-b-2 pb-3 ${isDayMode ? 'border-black' : 'border-white'}`}>
        <a href="" className='text-gray-500'>@codeiben</a>
      </div>
      {/* Option */}
      <div className={`flex p-3 gap-5 items-center hover:bg-slate-800 rounded-md duration-300 mt-5 ${isDayMode ? 'hover:bg-slate-500' : 'bg-slate-900 text-white'}`}>
        <AiOutlineHome  size={20} />
        <a href="" className='font-semibold'>Home</a>
      </div>
      <div className={`flex p-3 gap-5 items-center hover:bg-slate-800 rounded-md duration-300 ${isDayMode ? 'hover:bg-slate-500' : 'bg-slate-900 text-white'}`}>
        <GiButterflyFlower size={20} />
        <a href="" className='font-semibold'>About</a>
      </div>
      <div className={`flex p-3 gap-5 items-center hover:bg-slate-800 rounded-md duration-300 ${isDayMode ? 'hover:bg-slate-500' : 'bg-slate-900 text-white'}`}>
        <PiPencilSimpleLine size={20} />
        <a href="" className='font-semibold'>Blog</a>
      </div>
      <div className={`flex p-3 gap-5 items-center hover:bg-slate-800 rounded-md duration-300 ${isDayMode ? 'hover:bg-slate-500' : 'bg-slate-900 text-white'}`}>
        <GoProjectRoadmap size={20} />
        <a href="" className='font-semibold'>Project</a>
      </div>
      <div className={`flex p-3 gap-5 items-center hover:bg-slate-800 rounded-md duration-300 ${isDayMode ? 'hover:bg-slate-500' : 'bg-slate-900 text-white'}`}>
        <RiMindMap  size={20} />
        <a href="" className='font-semibold'>Roadmap</a>
      </div>
      <div className={`flex p-3 gap-5 items-center hover:bg-slate-800 rounded-md duration-300 ${isDayMode ? 'hover:bg-slate-500' : 'bg-slate-900 text-white'}`}>
        <BsSendPlus   size={20} />
        <a href="" className='font-semibold'>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
