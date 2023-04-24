import React, { useState } from 'react';
import { FlexContainer, Text, StyledSelect } from './Dropdown.styled';

const options = [
  { value: 'all', label: 'all' },
  { value: 'follow', label: 'follow' },
  { value: 'following', label: 'following' },
];

const defaultOption = { value: 'all', label: 'all' };

const Dropdown = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    onChange(selectedOption.value);
  };

  return (
    <FlexContainer>
      <Text>Show </Text>
      <StyledSelect
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </FlexContainer>
  );
};

export default Dropdown;
