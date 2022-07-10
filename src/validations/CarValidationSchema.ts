import { z } from 'zod';

const carValidationSchema = z.object({
  model: z
    .string({
      required_error: 'Model is required',
      invalid_type_error: 'Model must be a string',
    })
    .min(3, { message: 'Model must be at least 3 characters long' }),
  year: z
    .number({
      required_error: 'Year is required',
      invalid_type_error: 'Year must be a number',
    })
    .gte(1900, { message: 'Year must be greater than or equal 1900' })
    .lte(2022, { message: 'Year must be less than or equal 2022' }),
  color: z
    .string({
      required_error: 'Color is required',
      invalid_type_error: 'Color must be a string',
    })
    .min(3, { message: 'Color must be at least 3 characters long' }),
  status: z
    .boolean({
      invalid_type_error: 'Status must be a boolean',
    })
    .optional(),
  buyValue: z
    .number({
      required_error: 'Buy value is required',
      invalid_type_error: 'Buy value must be a number',
    })
    .int({ message: 'Buy value must be an integer number' }),
  doorsQty: z
    .number({
      required_error: 'Doors quantity is required',
      invalid_type_error: 'Doors quantity must be a number',
    })
    .gte(2, { message: 'Doors quantity must be greater than or equal 2' })
    .lte(4, { message: 'Doors quantity must be less than or equal 4' }),
  seatsQty: z
    .number({
      required_error: 'Seats quantity is required',
      invalid_type_error: 'Seats quantity must be a number',
    })
    .gte(2, { message: 'Seats quantity must be greater than or equal 2' })
    .lte(7, { message: 'Seats quantity must be less than or equal 7' }),
});

export default carValidationSchema;
