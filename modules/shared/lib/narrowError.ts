import { isAxiosError, type AxiosError } from 'axios';

import type { ErrorApiResponse } from '../types';

const narrowError = (error: unknown): ErrorApiResponse => {
  if (isAxiosError(error)) {
    const err = error as AxiosError<ErrorApiResponse>;

    if (!err.response)
      return { error: true, message: 'Error en conexión', errorObject: error };

    return err.response.data;
  }

  if (
    error &&
    typeof error === 'object' &&
    'type' in error &&
    error.type === 'zod-error'
  ) {
    console.error(
      'Type error: API response does not match the defined schema.',
      error
    );

    return { error: true, message: 'Error de tipado', errorObject: error };
  }

  return { error: true, message: 'Error desconocido', errorObject: error };
};

export default narrowError;
