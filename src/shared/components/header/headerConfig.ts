import type { IconItemProps, MenuItemProps } from "@/shared/types/index"
import logo from "@/assets/images/logo.png"

export const headerProps: {
    cep: MenuItemProps,
    ddd: MenuItemProps,
    about: MenuItemProps
} = {
    cep: {
        label: "Busca cep",
        to: "/search/cep"
    },
    ddd: {
        label: "Busca DDD",
        to: "/search/ddd"
    },
    about: {
        label: "Sobre Nós",
        to: '/about'
    }
}

export const logoProps: IconItemProps = {
    href: "/",
    src: logo,
    width: 600,
    height: 300,
    alt: "logo do site",
    ariaLabel: "Logo do site que ao clicar vai para a pagina inicial"
}