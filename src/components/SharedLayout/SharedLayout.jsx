import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Container, Header, List, Link } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <List>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tweets">Tweets</Link>
              </li>
            </List>
          </nav>
        </Container>
      </Header>
      <Container>
        <Suspense
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
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default SharedLayout;
