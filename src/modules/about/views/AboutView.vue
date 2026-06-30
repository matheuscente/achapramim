<template>
    <div>
        <h1 class="font-principal">Quem sou eu?</h1>
        <p class="font-paragrafo sobre-paragrafo">
            Meu nome é <strong>Vicente Matheus</strong> e moro no interior do Paraná. Atualmente estou cursando o quinto
            semestre em Engenharia de Software na Unicesumar. Além disso, estou me aventurando no desenvolvendo
            front-end.
        </p>

        <p class="font-paragrafo sobre-paragrafo"">
            Neste projeto, resolvi botar em prática todo meu conhecimento adquirido até agora, com foco principal no
            JavaScript.
        </p>

        <p class="font-paragrafo sobre-paragrafo"">
            A parte de busca endereço pelo DDD não foi completada pois não encontrei uma API que disponibilizasse os
            dados para consumo.
        </p>

        <p class="font-paragrafo sobre-paragrafo"">
            Tenho vontade de me aventurar em um freelance e adquirir mais conhecimento prático na profissão.
        </p>

        <p class="font-paragrafo sobre-paragrafo"">
            <strong>Que tal entrar em contato    para conversarmos?</strong>
        </p>

        <div class="font-paragrafo">
            <ExternalList :itens="contactAboutItens" />
            <a href="https://matheuscente.github.io/curriculo/" target="_blank">portfólio</a>

        </div>


        <BaseButton type="button" @action="handleBack">
            VOLTAR
        </BaseButton>
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
.sobre-paragrafo {
    grid-column: 1;
    margin-bottom: 1.5rem;
    max-width: 50ch;
}
</style>
