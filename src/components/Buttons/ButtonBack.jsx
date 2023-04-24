import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  margin-top: 20px;
  background-color: #ebd8ff;
  border: 1px solid #4b2a99;
  padding: 10px 10px;
  width: 100px;
  border-radius: 10.3108px;
  color: #4b2a99;
  font-weight: 500;
  font-size: 17px;

  &:hover {
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
  &:focus {
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
  &:active {
    color: #ebd8ff;
    background-color: #4b2a99;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;

export default function ButtonBack() {
  return <StyledLink to="/">&larr; Go back</StyledLink>;
}
