import type { BaseRadioProps } from "@/shared/types";

const radioConfig: BaseRadioProps = {
    name: "Cep",
    legend: "Bucar por",
    options: [
        {
            label: "cep",
            value: "C"
        },
        {
            label: "endereço",
            value: "A"
        }
    ]
}

export {
    radioConfig
}