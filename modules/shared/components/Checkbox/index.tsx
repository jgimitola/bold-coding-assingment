import { type ComponentProps } from 'react';

import CheckboxStyles from './styles';

type CheckboxProps = ComponentProps<typeof CheckboxStyles.CheckboxRoot>;

const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxStyles.CheckboxRoot {...props}>
      <CheckboxStyles.CheckboxIndicator>
        <CheckboxStyles.Fill />
      </CheckboxStyles.CheckboxIndicator>
    </CheckboxStyles.CheckboxRoot>
  );
};

export default Checkbox;
