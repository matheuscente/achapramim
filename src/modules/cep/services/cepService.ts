import { HttpError } from "@/shared/utils/errors/httpError.error"
import type { CepApiResponse } from "@/modules/cep/types/cepApiResponse.dto"
import cepHttp from "@/shared/services/http/cep"
import { HttpStatus } from "@/shared/services/http/HttpStatus"
import type { AddressValidation } from "@/modules/cep/types/AddressValidation"

const searchCepService = {
    mapData (data: CepApiResponse)  {
        if("localidade" in data) {
            return {
            localidade: data.localidade,
            estado: data.estado,
            uf: data.uf,
            ddd: data.ddd,
            logradouro: data.logradouro,
            cep: data.cep 
    }
        }
    },

    async withCep(cep: string): Promise<CepApiResponse> {
        console.log(import.meta.env.VITE_CEP_URL)
        const { data } = await cepHttp.get<CepApiResponse>(`/${cep}/json`)

        if ("erro" in data) {
            throw new HttpError(
                HttpStatus.NOT_FOUND,
                "nenhum endereço encontrado para esse cep"

            )
        }
        return searchCepService.mapData(data) as CepApiResponse
    },

    async withAddress(address: AddressValidation): Promise<CepApiResponse[]> {
        const { data } = await cepHttp.get<CepApiResponse[]>(`/${address.data.state}/${address.data.city}/${address.data.street}/json`)

        if (data.length === 0) throw new HttpError(
            HttpStatus.NOT_FOUND,
            "nenhum cep encontrado para esse endereço"
        )
        return data.map(searchCepService.mapData) as CepApiResponse[]
    }
}

export {
    searchCepService
}
