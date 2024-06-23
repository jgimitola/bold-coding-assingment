import styled from 'styled-components';

import Container from './Container';

const Wrapper = styled.div`
  height: 100%;

  overflow-y: auto;

  ${Container} {
    width: 100%;
  }
`;

export default Wrapper;
