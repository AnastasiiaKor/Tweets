import styled from '@emotion/styled';

const Button = styled.button`
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  text-align: center;
  border: none;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: scale 250ms ease;

  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

export default function FollowingButton({ onClick, user }) {
  return (
    <Button type="button" onClick={() => onClick(user)}>
      Following
    </Button>
  );
}
