import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchInput = () => {
  const handleSearch = () => {
    console.log('We want to search from here');
  }

  return (
    <div>
      <Search 
        placeholder="Enter name to search"  
        onSearch={handleSearch} 
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchInput
