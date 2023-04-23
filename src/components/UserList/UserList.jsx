import { useState, useEffect } from 'react';
import {
  getUsers,
  increaseUserFollowers,
  decreaseUserFollowers,
} from 'services/api';
import UserListItem from 'components/UserListItem/UserListItem';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(3);
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followedUsers')) || []
  );

  useEffect(() => {
    async function fetch() {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  const visibleUsers = users.slice(0, index);

  function loadMore() {
    setIndex(index + 3);
  }

  function followUser(user) {
    const updatedFollowedUsers = [...followedUsers, user.id];
    setFollowedUsers(updatedFollowedUsers);
    localStorage.setItem('followedUsers', JSON.stringify(updatedFollowedUsers));
    async function increase(user) {
      try {
        const updatedUser = await increaseUserFollowers(user);
        const idToUpdate = updatedUser.id;
        const newProps = { followers: updatedUser.followers };
        updateUser(idToUpdate, newProps);
      } catch (error) {
        console.log(error);
      }
    }
    increase(user);
  }

  function unfollowUser(user) {
    const updatedFollowedUsers = followedUsers.filter(id => id !== user.id);
    setFollowedUsers(updatedFollowedUsers);
    localStorage.setItem('followedUsers', JSON.stringify(updatedFollowedUsers));
    async function decrease(user) {
      try {
        const updatedUser = await decreaseUserFollowers(user);
        const idToUpdate = updatedUser.id;
        const newProps = { followers: updatedUser.followers };
        updateUser(idToUpdate, newProps);
      } catch (error) {
        console.log(error);
      }
    }
    decrease(user);
  }

  function updateUser(id, newProps) {
    setUsers(users => {
      return users.map(user => {
        if (user.id === id) {
          return { ...user, ...newProps };
        } else {
          return user;
        }
      });
    });
  }

  return (
    <>
      <ul>
        {visibleUsers.map(user => (
          <li key={user.id}>
            <UserListItem
              user={user}
              follow={followUser}
              unfollow={unfollowUser}
              followedUsers={followedUsers}
            />
          </li>
        ))}
      </ul>
      {visibleUsers.length < users.length && (
        <button type="button" onClick={loadMore}>
          Load more
        </button>
      )}
    </>
  );
}
