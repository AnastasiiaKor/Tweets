import axios from 'axios';

axios.defaults.baseURL = 'https://6444295a90738aa7c0807feb.mockapi.io/';

export async function getUsers() {
  const response = await axios('tweets-app');
  return response.data;
}

export async function increaseUserFollowers(user) {
  const response = await axios.put(`tweets-app/${user.id}`, {
    name: user.name,
    avatar: user.avatar,
    followers: user.followers + 1,
    tweets: user.tweets,
  });
  return response.data;
}

export async function decreaseUserFollowers(user) {
  const response = await axios.put(`tweets-app/${user.id}`, {
    name: user.name,
    avatar: user.avatar,
    followers: user.followers - 1,
    tweets: user.tweets,
  });
  return response.data;
}
