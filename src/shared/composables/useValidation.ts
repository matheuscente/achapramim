import { ref } from "vue";
import type { ZodType } from "zod";
import type { $ZodIssue } from "zod/v4/core";
import type { ErrorType } from "../types";

const useValidation = <T extends ErrorType<T>>(schema: ZodType) => {
    const errors = ref<ErrorType<T>>({})

    const validate = (data: unknown): {data: T} | null => {
        errors.value = {}

        const result = schema.safeParse(data)

        if (!result.success) {
            errors.value = mapErrors(result.error.issues)
            return null
        }

        return result.data as { data: T }
    }

    const mapErrors = (issues: $ZodIssue[]) => {
        const mappedErrors: ErrorType<T> = {}

        issues.forEach(issue => {
            const key = issue.path.at(-1) as string
            mappedErrors[key as keyof T] = issue.message
        })

        return mappedErrors
    }

    return {
        errors,
        validate
    }
}

export {
    useValidation
}