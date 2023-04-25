import { ReactComponent as Logotype } from '../images/Logo.svg';
import styled from '@emotion/styled';

const StyledLogo = styled(Logotype)`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;
export default function Logo() {
  return <StyledLogo />;
}
