import styled from '@emotion/styled';

const Button = styled.button`
  width: 196px;
  padding: 14px 28px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  transition: scale 250ms ease;

  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

export default function FollowButton({ onClick, user }) {
  return (
    <Button type="button" onClick={() => onClick(user)}>
      Follow
    </Button>
  );
}
