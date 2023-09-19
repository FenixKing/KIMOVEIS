import { userSchema as schema } from "../schema"
import { z } from "zod"
import { DeepPartial } from "typeorm"
import { User } from "../entities"

export type TUsersCreate = z.infer<typeof schema.usersCreate>

export type TUsersPass= z.infer<typeof schema.usersNotPass>

export type TUsersRead = Array<User>

export type TUsersUpdate = DeepPartial<User>