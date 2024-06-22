import styled from 'styled-components';
import TestStyled from '../TestStyled';

const WrapperTest = styled.div`
  background-color: red;

  ${TestStyled} {
    border: 1px solid white;
  }
`;

export default WrapperTest;
