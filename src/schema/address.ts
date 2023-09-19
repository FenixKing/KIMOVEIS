import { z } from 'zod'

const addressSchema = z.object({
    id: z.number().positive(),
    street: z.string().max(45),
    zipCode:  z.string().max(8),
    number: z.string().nullable().default(null),
    city: z.string().max(20),
    state: z.string().max(2),
})

const addressCreate = addressSchema.omit({ id: true })
const realEstateRead = addressCreate.array()

export { addressSchema, addressCreate, realEstateRead}