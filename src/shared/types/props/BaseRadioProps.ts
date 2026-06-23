import type { InputOption } from "@/shared/types/types"

export type BaseRadioProps = {
    name: string,
    legend?: string,
    options: InputOption[]
}