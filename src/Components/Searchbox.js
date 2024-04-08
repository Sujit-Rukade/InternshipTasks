import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBox = ({searchFunction})=>{
    const [query, setQuery] = useState('');

    // Function to handle input change
    const  handleChange = (e) => {
        setQuery(e.target.value);
    };

    // Function to handle search trigger
    const handleSearch = () =>{
        searchFunction(query);
    };

    // Debounce function to delay search trigger
    const debounce = (func, delay) =>{
        let  timer;
        return function(...args){
            clearTimeout(timer);
            timer = setTimeout( () => func.apply(this, args),delay);
        }
    }
    
    const debouncedSearch = debounce(handleSearch,1000);
    // Trigger search when querry changes
    useEffect(()=>{
        debouncedSearch();
        return ()=> clearTimeout(debouncedSearch);
    },[query]);

    return (
        <>
            <div className="flex">
                <div className="border border-solid border-gray-400 flex rounded-sm">
                    <FaMagnifyingGlass className="m-3 text-gray-400" />
                    <input type='text' placeholder='&#xf002; Search my StoryBoards' value={query} onChange={handleChange} className=" p-[6px]" />
                </div>
            </div>
        </>
    );
};

export default SearchBox;



// Write code to use fontawesome icons as placeholde

