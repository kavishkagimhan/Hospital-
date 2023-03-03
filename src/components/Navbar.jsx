import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Image/logo.png';


const Navbar = () => {
  return (
    <div className=' bg-white text-green-500 shadow-md'>
      <div className='max-w-[90%] mx-auto flex justify-between items-center'>
        <div className='w-24 flex items-center cursor-pointer'>
          <img src={Logo} alt="rrtr"/>
          <div>
            <Link to='/'><h2 className='text-2xl font-semibold uppercase border-b-2'>Hospital</h2></Link>
            <h3 className='text-md '>Health Service</h3>
          </div>
        </div>
        <div className='flex'>
          <ul className='flex gap-6 text-xl font-semibold px-4 py-2'>
            <li>
            <Link to='about' className='hover:text-green-300'>About</Link>
            </li>
            <li>
              <Link to='services' className='hover:text-green-300'>Services</Link>
            </li>
            <li>
              <a className='hover:text-green-300' href="">Appoinment</a>
            </li>
            <li>
              <a className='hover:text-green-300' href="">Medicine</a>
            </li>
            <li>
              <a className='hover:text-green-300' href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='bg-green-800 hover:bg-white border border-2-green-600 text-white w-30 text-xxl px-4 py-2 hover:text-black rounded-md'>
          <Link to='/login'><button>Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar