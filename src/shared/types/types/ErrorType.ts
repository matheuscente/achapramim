

/*
este tipo recebe um item generico
record cria um objeto com os tipos especificados, neste caso, com as chaves do generico passado e o valor string para cada chave
partial pega o objeto criado e transforma em proproedades opcionais

exemplo:
interface pessoa {
    nome: string,
    idade: number
}

const pessoa: ErrorType<pessoa> = {
    nome?: "pode ter nome e é opcional",
    idade?: "pode ter idade, porem vira string e é opcional"
}

*/

export type ErrorType<T> = Partial<Record<keyof T, string>>