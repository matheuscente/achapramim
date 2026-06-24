import type { FormFieldConfig } from "@/shared/types/types";
import type { DDDValidation } from "@/modules/ddd/types/types";

const dddFormConfig: FormFieldConfig<DDDValidation> = {
    field: "ddd",
    id: "ddd",
    label: "DDD",
    type: "text",
    placeholder: "43"
}

export {
    dddFormConfig
}