import { useMemo } from 'react';

import computeDisplayedDate from '../lib/computeDisplayedDate';

interface Props {
  startDate: string;
  endDate: string;
}

const useComputeDisplayedDate = (props: Props) => {
  const { startDate, endDate } = props;

  const formattedDate = useMemo(
    () => computeDisplayedDate(startDate, endDate),
    [startDate, endDate]
  );

  return formattedDate;
};

export default useComputeDisplayedDate;
