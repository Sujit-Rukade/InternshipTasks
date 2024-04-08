import React from "react";

export default function Card(){
    return(
        <>
            <div className="w-[350px] border-2 border-solid border-[#d6d5d5] mx-10 rounded-lg">
            <img src="/card_img.jpg" alt="Card" className="w-[350px] pb-3 bg-white" />
            <p className="font-medium w-[346px] bg-white px-4">AI Character Demo StoryBoard</p>
            <p className="text-xs text-gray-600 w-[346px] pb-2 bg-white px-4">Updated 2 April 2024</p>
            </div>
           
        </>
    )
}