import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube, BsFillTelephoneInboundFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-[#0f172a] h-[30vh] text-gray-100 mt-14'>
      <div className='max-w-[80%] mx-auto flex justify-between items-center '>
        <div className='py-4'>
          <ul className='text-lg px-4 py-2'>
            <li>
              <a className='hover:text-white' href="">About</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Services</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Appoinment</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Medicine</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className='py-4'>
          <ul className='text-lg px-4 py-2'>
            <li>
              <a className='hover:text-white' href="">About</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Services</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Appoinment</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Medicine</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='flex gap-6 items-center'>
          <p className='text-2xl hover:text-green-300 cursor-pointer'><BsFacebook/></p>
          <p className='text-2xl hover:text-green-300 cursor-pointer'><BsTwitter/></p>
          <p className='text-2xl hover:text-green-300 cursor-pointer'><BsYoutube/></p>
          <p className='text-2xl hover:text-green-300 cursor-pointer'><BsFillTelephoneInboundFill/></p>
        </div>
      </div>
    </div >
  )
}

export default Footer