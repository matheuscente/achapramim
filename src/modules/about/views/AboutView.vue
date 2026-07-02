<template>
    <div class="content">
        <h1 class="font-principal">Quem sou eu?</h1>
        <div class="description">
            <p class="font-paragrafo sobre-paragrafo">
                Meu nome é <strong>Vicente Matheus</strong> e moro no interior do Paraná. Atualmente estou cursando o
                quinto
                semestre em Engenharia de Software na Unicesumar. Além disso, estou me aventurando no desenvolvendo
                front-end.
            </p>

            <p class="font-paragrafo sobre-paragrafo"">
            Neste projeto, resolvi botar em prática todo meu conhecimento adquirido até agora, com foco principal no
            JavaScript.
        </p>

        <p class=" font-paragrafo sobre-paragrafo"">
                A parte de busca endereço pelo DDD não foi completada pois não encontrei uma API que disponibilizasse os
                dados para consumo.
            </p>

            <p class="font-paragrafo sobre-paragrafo"">
            Tenho vontade de me aventurar em um freelance e adquirir mais conhecimento prático na profissão.
        </p>

        <p class=" font-paragrafo sobre-paragrafo"">
                <strong>Que tal entrar em contato para conversarmos?</strong>
            </p>

        </div>

        <div class="font-paragrafo external-itens">
            <ExternalList :itens="contactAboutItens" />
            <a class="portifolio" href="https://matheuscente.github.io/curriculo/" target="_blank" aria-label="portifolio para o autor do site">portfólio</a>

        </div>

        <div class="btn-conteiner" >
            <BaseButton type="button" @action="handleBack">
            VOLTAR
        </BaseButton>

        </div>
        

    </div>
</template>

<script setup lang="ts">
import { contactAboutItens } from '@/shared/configs/contacts';
import BaseButton from '@/shared/components/BaseButton/BaseButton.vue';
import ExternalList from '@/shared/components/ExternalList/ExternalList.vue';
import { goPage } from '@/shared/utils/goPage';

const handleBack = () => {
    goPage("Home")
}

</script>

<style scoped>
.description {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 70ch;
    margin-top: 1.5rem;
}

.external-itens {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
}

.external-itens ul {
    padding-left: 0;
}

.portifolio {
    color: currentColor;
    border: 3px solid currentColor;
    padding: 15px;
    border-radius: 4px;
    background-color: var(--cor0);
    line-height: 0;
    flex-shrink: 0;
    width: fit-content;
    height: fit-content;
}

.portifolio:hover {
    background-color: var(--cor2);
}

.btn-conteiner {
    display: flex;
    justify-content: center;
    margin-top: .5rem;
}

@media(max-width: 400px) {
    .external-itens {
        flex-direction: column;
        margin-bottom: 1rem;
    }
}

</style>
