import { authSchema as schema } from "../schema"
import { z } from "zod"

export type TAuth = z.infer<typeof schema.authSchema>