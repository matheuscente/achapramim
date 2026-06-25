import type { AddressValidation } from "@/modules/cep/types/AddressValidation";

interface CepResultProps extends AddressValidation {
    cep: number,
    DDD: number,
    id: number
}

export type {
    CepResultProps
}