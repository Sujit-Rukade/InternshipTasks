import React, { useEffect, useState } from "react";


export default function Offer() {
    const [timeLeft, setTimeLeft] = useState(600);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(interval); // Clear interval when timer reaches zero
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures effect runs only once on component mount

    const formatTime = (time)=> {
        const minutes = Math.floor(time/60);
        const seconds = time%60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; 
    }

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center bg-orange-300 px-4 py-3">
            <button className="bg-orange-500 rounded-full text-black px-4 py-2 my-2 md:my-0 md:mx-5 font-light">One-Time Offer</button>
            <p className="text-center my-2 md:my-0 md:mx-5">Your AI StoryBoarding Bundle Discount Expires in: {formatTime(timeLeft)}</p>
            <button className="bg-pink-500 px-4 py-1 rounded-lg">Claim Discount</button>
            </div>
        </>
    )
}