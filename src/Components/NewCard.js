import React from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function NewCard(){
    return(
        <>
            <div className="w-[346px] h-[290px] bg-[#d6d5d5] rounded-lg flex justify-center items-center">
            <CiCirclePlus className="size-20 text-gray-400" />
            </div>
        </>
    )
}