import { NavLink, Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

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
        <Outlet />
      </div>
      {/* <Suspense
        fallback={
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
      >
       
      </Suspense> */}
    </div>
  );
}

export default SharedLayout;
