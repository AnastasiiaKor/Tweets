export default function UserListItem({
  user,
  follow,
  unfollow,
  followedUsers,
}) {
  return (
    <>
      <div>
        <img src={user.avatar} alt={user.name} />
      </div>
      <p>{user.name}</p>
      <p>{user.tweets} Tweets</p>
      <p> {user.followers.toLocaleString('en-US')} Followers</p>
      {followedUsers.includes(user.id) ? (
        <button type="button" onClick={() => unfollow(user)}>
          Following
        </button>
      ) : (
        <button type="button" onClick={() => follow(user)}>
          Follow
        </button>
      )}
    </>
  );
}
