import { useAsync } from "@/shared/composables/UseAsync"
import { searchCepService } from "../services/cepService"
import { computed, ref } from "vue"
import type { SearchType } from "@/shared/types"
import type { SearchData } from "../types/types"

const useCep = () => {
    //dados da api que vem de useAsync
    const cepAsync = useAsync(searchCepService.withCep)
    const addressAsync = useAsync(searchCepService.withAddress)

    //guarda o tipo de busca atual
    const currentSearchType = ref<SearchType>("C")


    //quem define a fonte dos dados é currentSearchType, que representa a busca atual e é setada nos search
    
    //loading para tela de carregamento
    const loading = computed(() => {
        return currentSearchType.value === "C" ? cepAsync.loading.value : addressAsync.loading.value
    })

    //erros retornados
    const errors = computed(() => {
        return currentSearchType.value === "C" ? cepAsync.error.value : addressAsync.error.value
    })

    //useAsync retorna data null em caso de erro
    const returnData = computed(() => {
        if(currentSearchType.value === "C") {
            return cepAsync.data.value ? [cepAsync.data.value] : []
        }

        return addressAsync.data.value ? addressAsync.data.value : []
    })

    const search = async (data: SearchData) => {
        //define tipo da busca atual, para sempre usar os dados atualizados
        currentSearchType.value = data.searchType

        if(data.searchType  === "C") await cepAsync.execute(data.data)
        else {
            await addressAsync.execute(data)}
    }

    //limpa os erros para nova pesquisa
    const clearErrors = () => {
        cepAsync.error.value = null
        addressAsync.error.value = null
    }

    const clearData = () => {
        cepAsync.data.value = null
        addressAsync.data.value = null
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
    useCep
}
