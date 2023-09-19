import { z } from 'zod'

const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
})



const categoryCreate = categorySchema.omit({ id: true})
const categoryRead = categorySchema.array()

export { categorySchema, categoryCreate, categoryRead }