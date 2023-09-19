import { z } from 'zod'
const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number(),
    userId: z.number(),
})

const scheduleCreate = scheduleSchema.omit({ id: true, userId: true})
const scheduleRead = scheduleSchema.array()

export { scheduleSchema, scheduleCreate, scheduleRead }