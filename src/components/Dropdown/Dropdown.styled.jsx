import styled from '@emotion/styled';
import Select from 'react-select';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  color: #4b2a99;
  font-weight: 500;
  font-size: 18px;
`;

export const StyledSelect = styled(Select)`
  width: 200px;
  font-size: 18px;
  color: #4b2a99;
`;
