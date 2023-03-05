import React, { useState, useEffect } from 'react';
import Image from '../../Image/scn.png'
import { AiOutlineUser, AiFillCreditCard, AiOutlineFieldNumber, AiOutlinePhone } from "react-icons/ai";
import doctorDataService from '../../../Services/DoctorService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import AdminSide from '../AdminSide';


const EditDoctors = () => {

    const [name, setName] = useState("")
    const [nic, setNic] = useState("")
    const [specialization, setSpecialization] = useState("")
    const [registerno, setRegisterno] = useState("")
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        SetValues(id);
    }, [])

    const SetValues = async(id) => {
        const data = await doctorDataService.getDoctor(id);
        console.log(data);
    }

    const EditButton = async (e) => {

        if (name === "") {
            toast.error('Name is required!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (nic === "") {
            toast.error('NIC is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (specialization === "") {
            toast.error('Specialization is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (registerno === "") {
            toast.error('Register Number is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            await doctorDataService.addDoctor({
                name, nic, registerno, specialization
            });
            navigate("/admin/doctor-list");
            toast.success('Added Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <div className='flex'>
            <div className='w-[20%]'>
                <AdminSide/>
            </div>
            <div className='h-[70vh] justify-center w-[80%] '>
            <div className='w-[800px] h-[80vh] bg-gray-100 mx-auto mt-20 flex rounded-xl shadow-xl justify-between'>
                <div className='w-[50%] ml-[60px] mt-[100px]'>
                    <h2 className='mb-4 text-4xl font-semibold text-black'>Edit Doctor</h2>
                    <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Doctor Name'
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <p className='text-xl'><AiOutlineUser /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Doctor NIC'
                            name="nic"
                            onChange={(e) => setNic(e.target.value)}
                            value={nic}
                        />
                        <p className='text-xl'><AiFillCreditCard /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Register Number'
                            name="registerno"
                            onChange={(e) => setRegisterno(e.target.value)}
                            value={registerno}
                        />
                        <p className='text-xl'><AiOutlineFieldNumber /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Doctor Specialization'
                            name="specialization"
                            onChange={(e) => setSpecialization(e.target.value)}
                            value={specialization}
                        />
                        <p className='text-xl'><AiOutlinePhone /></p>
                    </div>
                    <button className='bg-green-400 text-white px-6 py-1 rounded-lg text-xl hover:text-green-500 hover:bg-white mt-[20px]' onClick={EditButton}>
                        Edit Doctor
                    </button>
                </div>
                <div className='mt-32 ml-6 '>
                    <img className='w-[80%]' src={Image} alt="" />
                </div>
            </div>
        </div>
        </div>
       
    )
}

export default EditDoctors