import { useState, type Dispatch, type SetStateAction } from 'react';

import { Cross1Icon } from '@radix-ui/react-icons';

import { Filters } from '@/transaction/controllers/listTransactions';
import type { TransactionData } from '@/transaction/types';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Label from '../Label';
import PopoverClose from '../PopoverClose';
import PopoverContent from '../PopoverContent';

import PopoverStyles from './styles';

const typeOptions: Array<{
  label: string;
  type: TransactionData['type'] | null;
}> = [
  {
    label: 'Cobro con datáfono',
    type: 'DATAPHONE',
  },
  {
    label: 'Cobro con link de pago',
    type: 'LINK',
  },
  {
    label: 'Ver todos',
    type: null,
  },
];

export interface FilterPopoverProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

const FilterPopover = (props: FilterPopoverProps) => {
  const { filters, setFilters } = props;

  const [type, setType] = useState(filters.type);

  const handleSave = () => {
    setFilters((p) => ({ ...p, type }));
  };

  return (
    <PopoverContent>
      <PopoverClose>
        <Cross1Icon />
      </PopoverClose>

      <PopoverStyles.Title>FILTRAR</PopoverStyles.Title>

      <PopoverStyles.Container>
        {typeOptions.map((o) => (
          <Label key={o.label}>
            <Checkbox
              checked={type === o.type}
              onCheckedChange={() => setType(o.type)}
            />
            {o.label}
          </Label>
        ))}

        <Button disabled={type === filters.type} onClick={handleSave}>
          Aplicar
        </Button>
      </PopoverStyles.Container>
    </PopoverContent>
  );
};

export default FilterPopover;
