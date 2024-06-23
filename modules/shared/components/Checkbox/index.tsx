import { type ComponentProps } from 'react';

import * as RCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

type CheckboxProps = ComponentProps<typeof RCheckbox.Root>;

const Checkbox = (props: CheckboxProps) => {
  return (
    <RCheckbox.Root {...props}>
      <RCheckbox.Indicator>
        <CheckIcon />
      </RCheckbox.Indicator>
    </RCheckbox.Root>
  );
};

export default Checkbox;
