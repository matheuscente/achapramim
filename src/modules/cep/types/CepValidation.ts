import type z from "zod";
import type { cepSchema } from "../schemas/cep.schema";

type CepValidation = z.infer<typeof cepSchema>

export type {
    CepValidation
}