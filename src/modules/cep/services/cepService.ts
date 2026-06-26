import { HttpError } from "@/shared/utils/errors/httpError.error"
import type { CepApiResponse } from "@/modules/cep/types/cepApiResponse.dto"
import cepHttp from "@/shared/services/http/cep"
import { HttpStatus } from "@/shared/services/http/HttpStatus"
import type { AddressValidation } from "@/modules/cep/types/AddressValidation"

const searchCepService = {
    async withCep(cep: string): Promise<CepApiResponse> {
        const { data } = await cepHttp.get<CepApiResponse>(`/${cep}/json`)

        if ("erro" in data) {
            throw new HttpError(
                HttpStatus.NOT_FOUND,
                "nenhum endereço encontrado para esse cep"

            )
        }

        return data
    },

    async withAddress(address: AddressValidation): Promise<CepApiResponse[]> {
        const { data } = await cepHttp.get<CepApiResponse[]>(`/${address.data.state}/${address.data.city}/${address.data.street}/json`)

        if (data.length === 0) throw new HttpError(
            HttpStatus.NOT_FOUND,
            "nenhum cep encontrado para esse endereço"
        )
        return data
    }
}

export {
    searchCepService
}
