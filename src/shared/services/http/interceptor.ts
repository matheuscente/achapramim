import { HttpError } from "@/shared/utils/errors/httpError.error"
import type { AxiosInstance } from "axios"
import axios from "axios"

//função que seta interceptador nas instancias http
const setupIntercepptors = (http: AxiosInstance) => {
    http.interceptors.response.use(
        //se não tiver erro, retorna a response normal
        response => response,
        error => {
            //se não for erro de axios, retorna erro desconhecido
            if (!axios.isAxiosError(error)) {
                return Promise.reject(
                    new HttpError(0, "Erro desconhecido")
                )
            }

            //se nao tiver resposta, retorna erro de servidor
            if (!error.response) {
                return Promise.reject(
                    new HttpError(0, "Não foi possível conectar ao servidor.")
                )
            }

            //se for um erro axios retornado da api, retorna erro http com os dados do erro
            return Promise.reject(
                new HttpError(
                    error.response.status,
                    error.message,
                    error.response.data
                )
            )
        }
    )
}

export {
    setupIntercepptors
}