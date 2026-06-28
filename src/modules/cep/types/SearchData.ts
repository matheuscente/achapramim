import type { AddressValidation } from './AddressValidation'
import type { CepValidation } from './CepValidation'

type SearchData =
  | {
      searchType: 'C'
      data: CepValidation["data"]["cep"]
    }
  | {
      searchType: 'A'
      data: AddressValidation["data"]
    }

export type{
    SearchData
}