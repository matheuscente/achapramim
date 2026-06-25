import z from "zod";
import { errorMessages } from "./errorMessages";

const addressSchema = z.object({
    data: z.object({
        street: z.string()
            .min(3, errorMessages.address.street.minLength)
            .max(50, errorMessages.address.street.maxLength),

        city: z.string()
            .min(3, errorMessages.address.city.minLength)
            .max(50, errorMessages.address.city.maxLength),

        state: z.string()
            .regex(/^[A-Za-z]{2}$/, errorMessages.address.state.length)
    })
})

export {
    addressSchema
}
