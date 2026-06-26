import { z } from "zod"
import { errorMessages } from "./errorMessages"

const dddSchema = z.object({
    data: z.object({
        ddd: z.string().regex(/^\d{2}$/, errorMessages.ddd.length)
    })
})

export {
    dddSchema
}