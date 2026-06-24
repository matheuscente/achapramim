import router from "@/app/router"
import type { RouteName } from "../types/types"

export const goPage = (routeName: RouteName) => {
    router.push({
        name: routeName
    })
}