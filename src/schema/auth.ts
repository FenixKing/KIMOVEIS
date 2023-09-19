import { z } from 'zod'

const authSchema = z.object({
    email: z.string().max(45),
    password: z.string().max(120)
})

export { authSchema }