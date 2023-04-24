import { useState } from 'react';
import ButtonBack from 'components/Buttons/ButtonBack';
import UserList from 'components/UserList/UserList';
import Dropdown from 'components/Dropdown/Dropdown';
function Tweets() {
  const [selectedOption, setSelectedOption] = useState('all');

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };
  return (
    <>
      <ButtonBack />
      <Dropdown onChange={handleChange} />
      <UserList selectedOption={selectedOption} />
    </>
  );
}
export default Tweets;
