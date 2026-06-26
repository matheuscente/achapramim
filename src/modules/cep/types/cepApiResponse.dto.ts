type CepApiResponse = {
    localidade: string,
    estado: string,
    uf: string,
    ddd: string,
    logradouro: string
    cep: string
}
    |
{
    erro: true
}

export type {
    CepApiResponse
}

