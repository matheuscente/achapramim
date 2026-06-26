import type z from "zod"
import type { dddSchema } from "../schemas/ddd.schema"

type DDDValidation = z.infer<typeof dddSchema>

export type {
    DDDValidation
}