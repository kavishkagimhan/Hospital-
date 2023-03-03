import React from 'react';
import Image from '../Image/scn.png'
import { AiOutlineUser, AiFillCreditCard, AiOutlineHome, AiOutlinePhone, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Appoinment = () => {
    return (
        <div className='h-[100vh] justify-center  '>
             <Link to='/admin/add-doctors'><button className='px-4 py-2 mt-10 ml-8 bg-green-500 border hover:bg-white hover:border-2-green-500'>Doctor List</button></Link>
            <div className='w-[800px] h-[80vh] bg-gray-100 mx-auto mt-20 flex rounded-xl shadow-xl justify-between'>
                <div className='w-[50%] ml-[60px] mt-[100px]'>
                    <h2 className='mb-4 text-4xl font-semibold text-black'>Appoinment</h2>
                    <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Name' />
                        <p className='text-xl'><AiOutlineUser /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your NIC' />
                        <p className='text-xl'><AiFillCreditCard /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Address' />
                        <p className='text-xl'><AiOutlineHome /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Contact Number' />
                        <p className='text-xl'><AiOutlinePhone /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="date" placeholder='Select Booking Date' />
                        
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Doctor Name' />
                        <p className='text-xl'><AiOutlineUserAdd/></p>
                    </div>
                    <button className='bg-green-400 text-white px-6 py-1 rounded-lg text-xl hover:text-green-500 hover:bg-white mt-[20px]'>
                        Submit
                    </button>
                </div>
                <div className='mt-32 ml-6 '>
                    <img className='w-[80%]' src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Appoinment