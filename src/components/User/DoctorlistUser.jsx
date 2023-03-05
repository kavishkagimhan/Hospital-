import React, { useState, useEffect } from 'react'
import doctorDataService from '../../Services/DoctorService';
import PuffLoader from "react-spinners/PuffLoader";



const DoctorlistUser = () => {

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    useEffect(() => {
        getDoctors();
    }, []);


    const getDoctors = async () => {
        const data = await doctorDataService.getAllDoctor();
        setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <div className='h-[100vh] w-[90%]'>
            <h1 className='mt-6 text-3xl font-semibold text-center text-green-500'>Avalable Doctors</h1>
            {
                loading ?
                    <div className='flex justify-center mt-20'>
                        <PuffLoader color="rgba(54, 215, 183, 1)"
                            cssOverride={{}}
                            loading
                            size={76}
                            speedMultiplier={2} />
                    </div>

                    :
                    <table class="w-[1000px] p-2  mt-14 ml-[300px] mx-auto">
                        <thead className='items-center justify-between p-2 bg-green-700'>
                            <tr className='p-1' >
                                <th className='p-4 text-2xl text-white'>Name</th>
                                <th className='p-4 text-2xl text-white'>NIC</th>
                                <th className='p-4 text-2xl text-white'>Register Number</th>
                                <th className='p-4 text-2xl text-white'>Specialization</th>
                                <th className='p-4 text-2xl text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {doctors.map((doc, index) => {
                                return (
                                    <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-green-500 hover:bg-green-200'>
                                        <td className='px-4 py-2 text-left'>{doc.name}</td>
                                        <td className='px-4 py-2 text-left'>{doc.nic}</td>
                                        <td className='px-4 py-2 text-left'>{doc.registerno}</td>
                                        <td className='px-4 py-2 text-left'>{doc.specialization}</td>
                                        <td>
                                            <button className='px-3 py-1 text-white bg-red-600 rounded-lg hover:bg-red-500'>Book</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            }

        </div>
    )
}

export default DoctorlistUser