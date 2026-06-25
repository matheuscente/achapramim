import type { InputRadioOption } from "@/shared/types"

type BaseRadioProps = {
    name: string,
    legend?: string,
    options: InputRadioOption[]
}

export type {
    BaseRadioProps
}