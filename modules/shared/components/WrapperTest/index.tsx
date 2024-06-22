import styled from 'styled-components';
import TestStyled from '../TestStyled';

const WrapperTest = styled.div`
  height: 100%;
  background-color: red;

  ${TestStyled} {
    border: 1px solid blue;
  }
`;

export default WrapperTest;
