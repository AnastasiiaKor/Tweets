export default function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <div>
            <img src={user.avatar} alt={user.name} />
          </div>
          <p>{user.name}</p>
          <p>{user.tweets} Tweets</p>
          <p> {user.followers} Followers</p>
          <button type="button">Follow</button>
        </li>
      ))}
    </ul>
  );
}
