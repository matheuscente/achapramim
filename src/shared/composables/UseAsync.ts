import { ref } from "vue"


//recebe um metodo que recebe um tipo generico e retorna uma promessa de outro tipo
const useAsync = <T, P>(fn: (param: P) => Promise<T>) => {

    const data = ref<T | null>(null)
    const loading = ref<boolean>(false)
    const error = ref<string | null>()

    //função que executa o metodo passado
    const execute = async (param: P) => {
        loading.value = true
        //seta erro para true caso ja exista 
        error.value = null
        data.value = null

        try {
            data.value = await fn(param)
        }

        catch (e) {
            error.value = e instanceof Error ? e.message : "Erro inesperado"
        }

        finally {
            loading.value = false
        }
    }

    return {
        data,
        error,
        loading,
        execute
    }
}

export {

    useAsync
}