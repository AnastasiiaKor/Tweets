import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: #ebd8ff;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  text-align: center;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;

  transition: scale 250ms ease;

  &:hover,
  &:focus {
    scale: 1.05;
  }
  &:active {
    color: #ebd8ff;
    background-color: #4b2a99;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;

export default function LoadMore({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
}
