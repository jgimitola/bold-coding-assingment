import { z, type ZodSchema } from 'zod';

const verifyApiTypeResponse = async (
  schema: ZodSchema,
  data: unknown,
  isPaginated: boolean = false,
) => {
  if (isPaginated) {
    const arraySchema = z.array(schema);

    const result = await arraySchema.safeParseAsync(data);

    if (!result.success) {
      throw { type: 'zod-error', errorObject: result.error };
    }

    return;
  }

  const result = await schema.safeParseAsync(data);

  if (!result.success) {
    throw { type: 'zod-error', errorObject: result.error };
  }

  return;
};

export default verifyApiTypeResponse;
