
const errorMessages = {
    cep: {
        length: "O cep deve possuir 8 dígitos! (somente números)"
    },

    address: {
        street: {
            minLength: "A rua deve possuir pelo menos 3 dígitos!",
            maxLength: "A rua deve possuir no máximo 50 dígitos!"
        },

        city: {
            minLength: "A cidade deve possuir pelo menos 3 dígitos!",
            maxLength: "A cidade deve possuir no máximo 50 dígitos!"
        },

        state: {
            length: "o estado deve possuir 2 dígitos! (somente letras)",
        }
    }
}

export {
    errorMessages
}