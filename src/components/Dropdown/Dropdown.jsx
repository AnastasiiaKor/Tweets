import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'all', label: 'all' },
  { value: 'follow', label: 'follow' },
  { value: 'following', label: 'following' },
];

const defaultOption = { value: 'all', label: 'all' };

const Dropdown = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = selectedOption => {
    // console.log(selectedOption.value);
    setSelectedOption(selectedOption);
    onChange(selectedOption.value);
  };

  return (
    <>
      <p>Show </p>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </>
  );
};

export default Dropdown;
