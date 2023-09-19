import { z } from 'zod'

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().max(120).email(),
    admin: z.boolean().optional().default(false),
    password: z.string().max(120),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    deletedAt: z.string().optional().nullable()
})

const usersCreate = userSchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true})
const usersNotPass = userSchema.omit({ password: true })
const usersUpdate = userSchema.partial().omit({password: true, id: true })
const usersRead = usersNotPass.array()

export { userSchema, usersCreate, usersRead, usersUpdate, usersNotPass }