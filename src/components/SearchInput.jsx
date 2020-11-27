import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchInput = ({ handleAction }) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    handleAction();
  }

  const handleInputChange  = (e) => {
    setValue(e.target.value);
    handleAction(e.target.value);
  }

  return (
    <Search
      placeholder="Enter name to search"
      onSearch={handleSearch}
      onChange={handleInputChange}
      value={value}
    />
  )
}

export default SearchInput
