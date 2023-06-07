import React from 'react'
import { CiGlobe } from 'react-icons/ci';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
            <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            <div className='flex justify-between gap-4'>
                <select className='text-white bg-gray-800 p-3 pr-4 rounded' id='language' name='language'>
                    <CiGlobe className='fill-white' />
                    <option value="en-IN">English</option>
                    <option value="hi-IN">हिन्दी</option>
                </select>
                <button className='bg-red-600 rounded px-6 py-2 text-white cursor-pointer'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar