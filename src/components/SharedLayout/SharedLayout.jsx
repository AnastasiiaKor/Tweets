import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function SharedLayout() {
  return (
    <div>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/tweets">Tweets</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default SharedLayout;
