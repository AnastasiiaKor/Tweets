import FollowButton from 'components/Buttons/FollowButton';
import FollowingButton from 'components/Buttons/FollowingButton';
import { Text, Flex, Image, Wrapper } from './UserListItem.styled';
import Logo from 'components/Logo';
export default function UserListItem({
  user,
  follow,
  unfollow,
  followedUsers,
}) {
  return (
    <>
      <Logo />
      <Wrapper>
        <Image src={user.avatar} alt={user.name} />
      </Wrapper>

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
