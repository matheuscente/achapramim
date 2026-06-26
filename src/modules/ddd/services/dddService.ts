import { HttpError } from "@/shared/utils/errors/httpError.error"
import cepHttp from "@/shared/services/http/cep"
import type { DddApiResponse } from "../types/dddApiResponse"
import { HttpStatus } from "@/shared/services/http/HttpStatus"

const errorsName = {
    badRequestError: "BadRequestError",
    notFoundError: "NotFoundError",
    internalError: "InternalError"
}

const searchDddService = {
    async searchDDD(ddd: string): Promise<DddApiResponse> {
        const { data } = await cepHttp.get<DddApiResponse>(`/${ddd}`)

        if ("name" in data) {
            switch (data.name) {
                case errorsName.badRequestError:
                    throw new HttpError(HttpStatus.BAD_REQUEST_ERROR, data.message)

                case errorsName.notFoundError:
                    throw new HttpError(HttpStatus.NOT_FOUND, data.message)

                case errorsName.internalError:
                    throw new HttpError(HttpStatus.INTERNAL_ERROR, data.message)
            }
        }
        return data
    }
}

export {
    searchDddService
}
