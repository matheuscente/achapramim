import type { BaseInputProps } from "@/shared/types/types";
import type { AddressValidation, CepValidation, FormFieldConfig } from "@/modules/cep/types/types";

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