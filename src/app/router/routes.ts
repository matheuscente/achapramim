import type { RouteRecordRaw } from "vue-router";
import HomeLayout from "@/shared/layouts/HomeLayout.vue"
import { Routes } from "./routeNames";

export const routes: RouteRecordRaw[] = [
    {
        name: Routes.home.name,
        path: Routes.home.path,
        component: HomeLayout,
        meta: {
            title: "Acha pra mim!"
        },

        children: [
            {
                name: Routes.cep.name,
                path: Routes.cep.path,
                component: () => import("@/modules/cep/views/CepView.vue"),
                meta: {
                    title: "Busca cep"
                }
            },

            {
                name: Routes.ddd.name,
                path: Routes.ddd.path,
                component: () => import("@/modules/ddd/views/DDDView.vue"),
                meta: {
                    title: "Busca DDD"
                }
            },

            {
                name: Routes.about.name,
                path: Routes.about.path,
                component: () => import("@/modules/about/views/AboutView.vue"),
                meta: {
                    title: "Sobre nós"
                }
            },

            {
                name: Routes.notFound.name,
                path: Routes.notFound.path,
                component: () => import("@/shared/views/NotFoundView.vue"),
                meta: {
                    title: "Página não encontrada!"
                }
            }
        ]
    }
]