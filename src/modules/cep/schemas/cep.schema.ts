import z from "zod";
import { errorMessages } from "./errorMessages";

const cepSchema = z.object({
    data: z.object({
        cep: z.string().regex(/^\d{8}$/, errorMessages.cep.length)
    })
})

export {
    cepSchema
}