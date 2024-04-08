import React from 'react';
import SearchBox from './Searchbox';
import MyComponent from '../MyComponent';
import QuickStart from './QuickStart';
import { FaCircleUser } from "react-icons/fa6";

export default function Navbar() {
    return (
        <>
            <div className='bg-white py-3'>
                <div className='flex flex-col md:flex-row items-center px-4 md:px-8 justify-between'>
                    <div className='flex items-center mb-4 md:mb-0'>
                        <img src="/logo.png" alt="img" className='w-14 rounded-full mr-4 md:mr-5' />
                        <p className='font-bold text-2xl md:text-3xl'>Project Dashboard</p>
                    </div>
                    <div className='flex items-center justify-center md:justify-end'>
                        <div className='flex mr-3'><MyComponent /></div>
                        <div className='flex mr-3'><QuickStart /></div>
                        <FaCircleUser className='flex size-10 items-center mr-3 cursor-pointer' />
                    </div>
                </div>
            </div>
        </>
    )
}