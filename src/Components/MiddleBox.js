import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import NewCard from "./NewCard";
import Card from "./Card";
import Popup from "./Popup";
import { useState } from "react";

export default function MiddleBox() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            <div className="bg-white mx-4 md:mx-16 py-4 md:py-8 rounded-xl">
                <div className="flex flex-row mx-4 md:mx-10 pb-4 md:pb-8">
                    <FaRegFolderOpen className="text-black size-10 mr-2 md:mr-4 mb-4 md:mb-0" />
                    <div className="flex flex-col">
                        <p className="text-base md:text-lg font-medium">Default Project</p>
                        <p className="text-xs md:text-sm text-gray-600">1 storyboard</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                    <Card />
                    <button className="py-2 px-4 md:py-3 md:px-6 rounded-lg mb-4 md:mb-0" onClick={handleOpenPopup}><NewCard /></button>
                    {isPopupOpen && <Popup onClose={handleClosePopup} />}
                </div>
            </div>
        </>
    )
}