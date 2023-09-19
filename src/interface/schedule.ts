import { scheduleSchema as schema } from "../schema"
import { z } from "zod"
import { DeepPartial } from "typeorm"
import { Schedule } from "../entities"

export type TScheduleCreate = z.infer<typeof schema.scheduleCreate>

export type TScheduleRead = Array<Schedule>

export type TScheduleUpdate = DeepPartial<Schedule>