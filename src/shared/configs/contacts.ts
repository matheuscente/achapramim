import type { ContactListConfig, IconItemProps } from "@/shared/types";
import linkedinFooterIcon from "@/assets/images/linkedin.svg"
import linkedinAboutIcon from "@/assets/images/linkedin-list.svg"
import githubIcon from "@/assets/images/github.svg"
import emailIcon from "@/assets/images/email.svg"
import whatsappIcon from "@/assets/images/icons8-whatsapp (1).svg"


const contactFooterItens: ContactListConfig[] = [
    {
        href: "https://www.linkedin.com/in/vicente-dos-santos-b48805196/",
        src: linkedinFooterIcon,
        width: 48,
        height: 48,
        alt: "logo do linkedin",
        ariaLabel: "botão redirecionando para o linkedin do autor do site",
        target: "_blank",
        name: "linkedin"
    },
    {
        href: "https://github.com/matheuscente",
        src: githubIcon,
        width: 48,
        height: 48,
        alt: "logo do github",
        ariaLabel: "botão redirecionando para o github do autor do site",
        target: "_blank",
        name: "github"
    }
]

const contactAboutItens: ContactListConfig[] = [
    {
        href: "https://www.linkedin.com/in/vicente-dos-santos-b48805196/",
        src: linkedinAboutIcon,
        width: 98,
        height: 96,
        alt: "logo do linkedin",
        ariaLabel: "botão redirecionando para o linkedin do autor do site",
        target: "_blank",
        name: "linkedin"
    },

    {
        href: "https://wa.me/5543996770521",
        src: whatsappIcon,
        width: 98,
        height: 96,
        alt: "logo do whatsapp",
        ariaLabel: "botão redirecionando para o whatsapp do autor do site",
        target: "_blank",
        name: "whatsapp"
    },

    {
        href: "mailto:matheus31102001@gmail.com",
        src: emailIcon,
        width: 98,
        height: 96,
        alt: "logo do email",
        ariaLabel: "botão redirecionando para o email do autor do site",
        target: "_blank",
        name: "email"
    }
]

export {
    contactAboutItens,
    contactFooterItens
}