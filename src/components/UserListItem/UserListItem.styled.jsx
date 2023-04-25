import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;

    top: 50%;
    left: -142px;
    height: 8px;
    width: 200px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -142px;
    height: 8px;
    width: 200px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Image = styled.img`
  display: block;
  position: relative;
  z-index: 999;
  object-fit: contain;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 26px 0;
`;
export const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
