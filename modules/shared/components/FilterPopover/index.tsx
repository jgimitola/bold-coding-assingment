import { type ReactNode } from 'react';

import { Cross1Icon } from '@radix-ui/react-icons';

import PopoverClose from '../PopoverClose';
import PopoverContent from '../PopoverContent';
import PopoverStyles from './styles';

export interface FilterPopoverProps {
  children: ReactNode;
}

const FilterPopover = (props: FilterPopoverProps) => {
  const { children } = props;

  return (
    <PopoverContent>
      <PopoverClose>
        <Cross1Icon />
      </PopoverClose>

      <PopoverStyles.Title>FILTRAR</PopoverStyles.Title>

      <PopoverStyles.Container>{children}</PopoverStyles.Container>
    </PopoverContent>
  );
};

export default FilterPopover;
