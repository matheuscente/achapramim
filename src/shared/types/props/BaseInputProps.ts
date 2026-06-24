import type { ErrorType } from "../types";

export interface BaseInputProps {
    id: string,
    label: string,
    type: string,
    placeholder: string,
    disabled?: boolean,
    readOnly?: boolean,
    required?: boolean,
    error?: string,
    field: string
}