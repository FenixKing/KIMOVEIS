import { realEstateSchema as schema } from "../schema"
import { z } from "zod"
import { DeepPartial } from "typeorm"
import { RealEstate } from "../entities"

export type TRealEstateCreate = z.infer<typeof schema.realEstateCreate>

export type TRealEstateReturn = z.infer<typeof schema.realEstateReturn>

export type TRealEstateRead = Array<RealEstate>

export type TRealEstateUpdate = DeepPartial<RealEstate>