import axios from 'axios';

axios.defaults.baseURL = 'https://6444295a90738aa7c0807feb.mockapi.io/';

export async function getUsers() {
  const response = await axios('tweets-app');
  return response.data;
}
getUsers();
