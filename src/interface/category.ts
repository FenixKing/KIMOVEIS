import { categorySchema as schema} from "../schema"
import { z } from "zod"
import { DeepPartial } from "typeorm"
import { Category } from "../entities"

export type TCategoryCreate = z.infer<typeof schema.categoryCreate>

export type TCategoryRead = Array<Category>

export type TCategoryUpdate = DeepPartial<Category>