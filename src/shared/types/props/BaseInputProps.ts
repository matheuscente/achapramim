import type { ErrorType } from "../types";

export interface BaseInputProps<T> {
    id: string,
    label: string,
    type: string,
    placeholder: string,
    disabled?: boolean,
    readOnly?: boolean,
    required?: boolean,
    error?: ErrorType<T> | string
}