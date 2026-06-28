import type { AddressValidation, CepValidation } from "@/modules/cep/types/types";
import type { FormFieldConfig } from "@/shared/types";

//formCepConfig para passar as informações pro formulario
//tipo passado no generico deve conter apenas os campos a serem validados (que fazem parte da camada de dados)

const formCepConfig: FormFieldConfig<CepValidation> = {
    id: "cep",
    label: "CEP",
    type: "string",
    placeholder: "86430000",
    field: "cep"
}

const formAddressConfig: FormFieldConfig<AddressValidation>[] = [
    {
        id: "street",
        label: "Rua",
        type: "text",
        placeholder: "rua das graças",
        field: "street"
    },

    {
        id: "city",
        label: "Cidade",
        type: "text",
        placeholder: "Blumenau",
        field: "city"
    },

    {
        id: "state",
        label: "Estado",
        type: "text",
        placeholder: "SC",
        field: "state"
    }
]


export {
    formCepConfig,
    formAddressConfig
}