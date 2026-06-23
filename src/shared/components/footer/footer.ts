import type { IconItemProps } from "@/shared/types/types";
import linkedinIcon from "@/assets/images/linkedin.svg"
import githubIcon from "@/assets/images/github.svg"


export const linkedinIconConfig: IconItemProps = {
    href: "https://www.linkedin.com/in/vicente-dos-santos-b48805196/",
    src: linkedinIcon,
    width: 98,
    height: 96,
    alt: "logo do linkedin",
    ariaLabel: "botão redirecionando para o linkedin do autor do site",
    target: "_blank"
}

export const githubIconConfig: IconItemProps = {
    href: "https://github.com/matheuscente",
    src: githubIcon,
    width: 98,
    height: 96,
    alt: "logo do github",
    ariaLabel: "botão redirecionando para o github do autor do site",
    target: "_blank"
}