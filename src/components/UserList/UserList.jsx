import { useState, useEffect } from 'react';
import {
  getUsers,
  increaseUserFollowers,
  decreaseUserFollowers,
} from 'services/api';
import UserListItem from 'components/UserListItem/UserListItem';
import LoadMore from 'components/Buttons/LoadMore';
import { List, Item } from './UserList.styled';

export default function UserList({ selectedOption }) {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(3);
  const [followedUsersIds, setFollowedUsersIds] = useState(
    JSON.parse(localStorage.getItem('followedUsersIds')) || []
  );
  const [selectedUsers, setSelectedUsers] = useState([]);

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

  useEffect(() => {
    if (selectedOption === 'all') {
      setSelectedUsers(users);
    } else if (selectedOption === 'following') {
      const filteredUsers = users.filter(user =>
        followedUsersIds.includes(user.id)
      );
      setSelectedUsers(filteredUsers);
    } else if (selectedOption === 'follow') {
      const filteredUsers = users.filter(
        user => !followedUsersIds.includes(user.id)
      );
      setSelectedUsers(filteredUsers);
    }
  }, [selectedOption, users, followedUsersIds]);

  const visibleUsers = selectedUsers.slice(0, index);

  function loadMore() {
    setIndex(index + 3);
  }

  function followUser(user) {
    const updatedFollowedUsers = [...followedUsersIds, user.id];
    setFollowedUsersIds(updatedFollowedUsers);
    localStorage.setItem(
      'followedUsersIds',
      JSON.stringify(updatedFollowedUsers)
    );
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
    const updatedFollowedUsers = followedUsersIds.filter(id => id !== user.id);
    setFollowedUsersIds(updatedFollowedUsers);
    localStorage.setItem(
      'followedUsersIds',
      JSON.stringify(updatedFollowedUsers)
    );
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
      <List>
        {visibleUsers.map(user => (
          <Item key={user.id}>
            <UserListItem
              user={user}
              follow={followUser}
              unfollow={unfollowUser}
              followedUsers={followedUsersIds}
            />
          </Item>
        ))}
      </List>
      {visibleUsers.length < selectedUsers.length && (
        <LoadMore onClick={loadMore} />
      )}
    </>
  );
}
