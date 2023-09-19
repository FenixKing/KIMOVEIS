import { addressSchema as schema} from "../schema"
import { z } from "zod"
import { DeepPartial } from "typeorm"
import { Address } from "../entities"

export type TAddressCreate = z.infer<typeof schema.addressCreate>

export type TAddressRead = Array<Address>

export type TAddressUpdate = DeepPartial<Address>