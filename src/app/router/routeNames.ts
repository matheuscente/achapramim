export const Routes = {
    home: {
        name: "Home",
        path: ""
    },
    cep: {
        name: "CEPSearch",
        path: "/search/cep"
    },
    ddd: {
        name: "DDDSearch",
        path: "/search/ddd"
    },
    notFound: {
        name: "NotFound",
        path: "/:pathMatch(.*)*"
    },
    about: {
        name: "About",
        path: "/about"
    },
    homeLayout: {
        name: "HomeLayout",
        path: "/"
    }
} as const