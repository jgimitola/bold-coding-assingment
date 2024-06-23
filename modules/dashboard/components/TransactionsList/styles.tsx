import styled from 'styled-components';

import cl from '@/shared/lib/cl';
import rem from '@/shared/lib/rem';

const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100% - var(--captionHeight));

  border: 1px solid ${cl('blue')};
  border-radius: 8px;

  color: ${cl('blue')};
  font-weight: 500;
`;

const ListItem = styled.li``;

const List = styled.ol`
  padding: 0;
  list-style-type: none;

  ${ListItem}:not(:last-of-type) {
    margin-block-end: 8px;
  }
`;

const Caption = styled.span`
  position: sticky;
  top: 0;

  display: block;

  font-size: ${rem(18)};
  color: ${cl('white')};
  font-weight: 500;
  line-height: 1;

  margin-block-end: 4px;

  padding: 16px;
  padding-block: 8px;

  border-start-start-radius: 8px;
  border-start-end-radius: 8px;

  background: ${cl('blue')};
  background: linear-gradient(90deg, ${cl('blue')} 0%, ${cl('red')} 100%);
`;

const Container = styled.section`
  --captionHeight: calc(${rem(18)} + 2 * 8px + 4px);

  height: 100%;

  overflow-y: auto;
`;

const ListStyles = {
  NoData,
  ListItem,
  List,
  Caption,
  Container,
};

export default ListStyles;
