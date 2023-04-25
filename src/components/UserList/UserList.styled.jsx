import styled from '@emotion/styled';
import CoverImg from '../../images/back-1x.png';
import CoverImgX2 from '../../images/back-2x.png';

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 30px;
  gap: 20px;
`;

export const Item = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 36px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  &:before {
    content: '';
    background-image: url(${CoverImg});
    background-repeat: no-repeat;
    background-position: top;
    width: 308px;
    height: 168px;
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    &:before {
      background-image: url(${CoverImgX2});
    }
  }
`;
