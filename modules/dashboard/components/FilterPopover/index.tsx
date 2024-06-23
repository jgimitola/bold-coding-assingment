import { useState, type Dispatch, type SetStateAction } from 'react';

import { Cross1Icon } from '@radix-ui/react-icons';

import { Filters } from '@/transaction/controllers/listTransactions';
import type { TransactionType } from '@/transaction/types';

import useSyncParams from '@/dashboard/hooks/useSyncParams';
import type { DateFilter, ParamsFilters } from '@/dashboard/types';

import Button from '../../../shared/components/Button';
import Checkbox from '../../../shared/components/Checkbox';
import Label from '../../../shared/components/Label';
import PopoverClose from '../../../shared/components/PopoverClose';
import PopoverContent from '../../../shared/components/PopoverContent';

import PopoverStyles from './styles';

const typeOptions: Array<{
  label: string;
  type: TransactionType | null;
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
  dateFilter: DateFilter;
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

const FilterPopover = (props: FilterPopoverProps) => {
  const { dateFilter, filters, setFilters } = props;

  const syncParams = useSyncParams<ParamsFilters>();

  const [type, setType] = useState(filters.type);

  const handleSave = () => {
    syncParams({ dateFilter: dateFilter.type, transactionType: type });

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
