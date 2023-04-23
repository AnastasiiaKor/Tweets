import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import UserList from 'components/UserList/UserList';
import Dropdown from 'components/Dropdown/Dropdown';
function Tweets() {
  const [selectedOption, setSelectedOption] = useState('all');

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };
  return (
    <>
      <NavLink to="/">&larr; Go back</NavLink>
      <p> This is tweets</p>
      <Dropdown onChange={handleChange} />
      <UserList selectedOption={selectedOption} />
    </>
  );
}
export default Tweets;
