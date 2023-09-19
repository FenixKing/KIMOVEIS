import { z } from 'zod'
import { addressCreate, addressSchema } from './address'
import { categoryCreate, categorySchema } from './category'

const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(() => false),
    value:  z.union([z.number(), z.string()]),
    size: z.number().int().positive(),
    createdAt:  z.string(),
    updatedAt: z.string(),
    address: addressSchema,
    categoryId: z.number().positive(),
})

const realEstateCreate = realEstateSchema.omit({
    id: true, createdAt: true, updatedAt: true
}).extend({
    address: addressCreate
})

const realEstateReturn = realEstateSchema.omit({ categoryId: true }).extend({
    address: addressSchema,
    category: categorySchema
})

const realEstateRead = realEstateSchema.omit({ categoryId: true }).extend({
    address: addressSchema,
    category: categorySchema
})

export { realEstateSchema, realEstateCreate, realEstateRead, realEstateReturn }