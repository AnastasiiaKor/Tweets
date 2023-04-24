import FollowButton from 'components/Buttons/FollowButton';
import FollowingButton from 'components/Buttons/FollowingButton';
import { Text, Flex, Image } from './UserListItem.styled';
export default function UserListItem({
  user,
  follow,
  unfollow,
  followedUsers,
}) {
  return (
    <>
      <Image src={user.avatar} alt={user.name} />

      <Flex>
        <Text>{user.tweets} Tweets</Text>
        <Text> {user.followers.toLocaleString('en-US')} Followers</Text>
      </Flex>
      {followedUsers.includes(user.id) ? (
        <FollowingButton type="button" onClick={unfollow} user={user} />
      ) : (
        <FollowButton type="button" onClick={follow} user={user} />
      )}
    </>
  );
}
