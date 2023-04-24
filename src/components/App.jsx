import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from 'pages/Home/Home';
import SharedLayout from './SharedLayout/SharedLayout';

const Tweets = lazy(() => import('../pages/Tweets'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
    </Routes>
  );
}
