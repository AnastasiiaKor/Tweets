import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 30px;
  gap: calc((100% - 3 * 380px) / 2);
  row-gap: 40px;
`;

export const Item = styled.li`
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
