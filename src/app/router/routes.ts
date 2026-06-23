import type { RouteRecordRaw } from "vue-router";
import HomeLayout from "@/shared/layouts/HomeLayout.vue"

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: HomeLayout,
        meta: {
            title: "Acha pra mim!"
        },

        children: [
            {
                name: "SearchCep",
                path: "/search/cep",
                component: () => import("@/modules/cep/views/CepView.vue"),
                meta: {
                    title: "Busca cep"
                }
            },

            {
                name: "SearchDDD",
                path: "/search/ddd",
                component: () => import("@/modules/ddd/views/DDDView.vue"),
                meta: {
                    title: "Busca DDD"
                }
            },

            {
                name: "About",
                path: "/about",
                component: () => import("@/modules/about/views/AboutView.vue"),
                meta: {
                    title: "Sobre nós"
                }
            },

            {
                path: "/:pathMatch(.*)*",
                name: "NotFound",
                component: () => import("@/shared/views/NotFoundView.vue"),
                meta: {
                    title: "Página não encontrada!"
                }
            }
        ]
    }
]