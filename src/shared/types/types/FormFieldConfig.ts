import type { BaseInputProps } from "@/shared/types/types";

interface FormFieldConfig<T extends {}>
    extends Omit<BaseInputProps, "field"> {
    field: keyof T
}

export type {
    FormFieldConfig
}