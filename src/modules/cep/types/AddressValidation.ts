import type z from "zod";
import type { addressSchema } from "../schemas/address.schema";

type AddressValidation = z.infer<typeof addressSchema>

export type {
    AddressValidation
}