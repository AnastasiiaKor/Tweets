import { Link } from 'react-router-dom';
import { Text } from './Home.styled';
export default function Home() {
  return (
    <div>
      <Text>Welcome to Tweets.app</Text>
      <Text>
        If you want to see other users press <Link to="tweets">here</Link>
      </Text>
    </div>
  );
}
