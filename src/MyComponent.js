import React from 'react';
import SearchBox from '../src/Components/Searchbox';


const MyComponent = () => {
  // Dummy search function
  const performSearch = (query) => {
    console.log('Searching for:', query);
    // Implement your search logic here, e.g., fetch data from an API
  };

  return (
    <div>
      <SearchBox searchFunction={performSearch} />
    </div>
  );
};

export default MyComponent;
