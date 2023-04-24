import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: #ebd8ff;
  padding: 10px;
  width: 120px;
  border-radius: 10.3108px;
  border: 1px solid #4b2a99;
  color: #4b2a99;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;

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

export default function LoadMore({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
}
