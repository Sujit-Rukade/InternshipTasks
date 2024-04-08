import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Popup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [frameSize, setFrameSize] = useState('');
  const [isAssistantEnabled, setIsAssistantEnabled] = useState(false);

  const handleToggle = () => {
    setIsAssistantEnabled(!isAssistantEnabled);
  }

  const handleCreateStoryboard = () => {
    if (name.trim() !== '' && frameSize.trim() !== '') {
      alert('New Storyboard is created!!!')
      onClose();
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full md:max-w-md">
        <button className="absolute top-4 right-0 md:right-4 p-2" onClick={onClose}>
          <RxCross2 className='size-5 bg-gray-300 m-2' />
        </button>
        <h2 className="text-lg md:text-2xl font-bold mb-4">New Storyboard</h2>
        <p className="text-sm md:text-base">Storyboard Name</p>
        <input
          type="text"
          placeholder="e.g. Default Project Storyboard"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500 text-sm md:text-base"
          value={name}


          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500 text-sm md:text-base"
          value={frameSize}
          onChange={(e) => setFrameSize(e.target.value)}
        >
          <option value="">Select Frame Size</option>
          <option value="Landscape">Landscape (16:9)</option>
          <option value="Standard">Standard (4:3)</option>
          <option value="Ultra-Wide">Ultra-Wide (21:9)</option>
          <option value="Traditional">Traditional (3:2)</option>
          <option value="Square">Square (1:1)</option>
        </select>
        <div className='flex justify-around'>
          <div className='flex items-center'>

            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-500 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-blue-500 dark:checked:bg-slate-500 dark:checked:after:bg-blue-500"
              type="checkbox"
              role="switch"
              id="flexSwitchChecked"
              checked={isAssistantEnabled}
              onChange={handleToggle} />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="flexSwitchChecked"
            >AI Assitant</label>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-sm md:text-base"
            onClick={handleCreateStoryboard}
          >
            Create Storyboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;