import { NavLink } from 'react-router-dom';
import UserList from 'components/UserList/UserList';
function Tweets({ users }) {
  return (
    <>
      <NavLink to="/">&larr; Go back</NavLink>
      <p> This is tweets</p>
      <UserList />
    </>
  );
}
export default Tweets;
