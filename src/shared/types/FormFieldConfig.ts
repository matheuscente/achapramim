import type { BaseInputProps } from "@/shared/types";

//tem as mesmas propriedades de BaseInputProps com um campo FIELD, que é uma chave do tipo genérico passado
interface FormFieldConfig<T extends { data: {} }>
    extends BaseInputProps {
    field: keyof T["data"]
}

export type {
    FormFieldConfig
}