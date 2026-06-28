import { useAsync } from "@/shared/composables/UseAsync"
import { computed } from "vue"
import { searchDDDService } from "../services/dddService"
import type { DDDValidation } from "../types/DddValidation"

const useDDD = () => {
    //dados da api que vem de useAsync
    const dddAsync = useAsync(searchDDDService.searchDDD)

    //loading para tela de carregamento
    const loading = computed(() => dddAsync.loading.value)

    //erros retornados
    const errors = computed(() => dddAsync.error.value
    )

    //useAsync retorna data null em caso de erro
    const returnData = computed(() =>  dddAsync.data.value)

    const search = async (data: DDDValidation) => await dddAsync.execute(data.data.ddd)


    //limpa os erros para nova pesquisa
    const clearErrors = () => {
        dddAsync.error.value = null
    }

    const clearData = () => {
        dddAsync.data.value = null
    }

    return {
        returnData,
        search,
        loading,
        errors,
        clearErrors,
        clearData
    }
}

export {
    useDDD
}
