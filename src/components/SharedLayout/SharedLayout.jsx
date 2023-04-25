import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
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
            <Oval
              height={80}
              width={80}
              color="#4b2a99"
              wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#5736a3 "
              strokeWidth={2}
              strokeWidthSecondary={2}
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
