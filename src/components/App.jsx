import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import Home from 'pages/Home';
import SharedLayout from './SharedLayout/SharedLayout';
import { getUsers } from 'services/api';
const Tweets = lazy(() => import('../pages/Tweets'));

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const users = await getUsers();
        console.log(users);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets users={users} />} />
      </Route>
    </Routes>
  );
}
