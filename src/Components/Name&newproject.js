import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";
import Popup from "./Popup";

export default function NameNewProject() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            <div className="flex flex-row mx-4 md:mx-16 justify-between my-6 md:my-14">
                <div className="flex items-center mb-4 md:mb-0">
                    <FaCircleUser className='text-black size-10 mr-2 md:mr-3 cursor-pointer' />
                    <p className="font-bold text-lg md:text-2xl">Adam Copper Team</p>
                </div>
                <div className="md:mt-0 md:ml-4">
                    <button className="bg-black text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg" onClick={handleOpenPopup}>New Project</button>
                    {isPopupOpen && <Popup onClose={handleClosePopup} />}
                </div>
            </div>
        </>
    )
}