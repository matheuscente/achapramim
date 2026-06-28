import { HttpError } from '@/shared/utils/errors/httpError.error'
import type { DddApiResponse } from '../types/dddApiResponse'
import { HttpStatus } from '@/shared/services/http/HttpStatus'
import dddHttp from '@/shared/services/http/ddd'
import type { DddApiErrorResponse } from '../types/types'

const errorsName = {
  badRequestError: 'DDD_INVALID',
  notFoundError: 'DDD_NOT_FOUND',
  internalError: 'SERVICE_ERROR',
}

const searchDDDService = {

  isApiError(data: unknown): data is DddApiErrorResponse {
    return typeof data === 'object' && data !== null && 'name' in data && 'message' in data
  },
  async searchDDD(ddd: string): Promise<DddApiResponse> {
    try {
      const { data } = await dddHttp.get<DddApiResponse>(`/${ddd}`)
      return data
    } catch (e) {
      if (e instanceof HttpError && searchDDDService.isApiError(e.data)) {
        console.log(e.data)
        switch (e.data.name) {
          case errorsName.badRequestError:
            throw new HttpError(HttpStatus.BAD_REQUEST_ERROR, e.data.message)

          case errorsName.notFoundError:
            throw new HttpError(HttpStatus.NOT_FOUND, e.data.message)

          case errorsName.internalError:
            throw new HttpError(HttpStatus.INTERNAL_ERROR, e.data.message)
        
            default:
                throw new HttpError(0, e.data.message)
        }
      } else {
            throw new HttpError(0, "Erro desconhecido")
      }
    }
  }
}

export { searchDDDService }
