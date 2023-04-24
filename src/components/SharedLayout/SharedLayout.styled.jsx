import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.header`
  padding: 20px 0px;
  border-bottom: 2px solid #4b2a99;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #ebd8ff;
  font-size: 30px;
  font-weight: 700;
  padding: 5px 10px;

  &.active {
    color: #5cd3a8;
  }
`;
