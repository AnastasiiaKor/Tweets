import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      <p>Welcome to Tweets.app</p>
      <p>
        If you want to see other users press <Link to="tweets">here</Link>
      </p>
    </div>
  );
}
