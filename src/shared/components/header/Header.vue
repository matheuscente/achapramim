<template>
    <header class="header-conteiner">
        <div class="logo-conteiner">
            <RouterLink :to="logoProps.href">
                <img class="header-logo" :src="logoProps.src" :alt="logoProps.alt" :width="logoProps.width"
                    :height="logoProps.height">
            </RouterLink>
        </div>
        <nav aria-label="navegação primaria">
            <ul class="header-list">
                <MenuItem v-bind="headerProps.cep" />
                <MenuItem v-bind="headerProps.ddd" />
                <MenuItem v-bind="headerProps.about" />
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import MenuItem from '@/shared/components/MenuItem/MenuItem.vue';
import { headerProps, logoProps } from '@/shared/components/header/headerConfig';

</script>

<style scoped>
.header-conteiner {
    background-color: var(--cor0);
    box-sizing: border-box;
    height: 100px;
    padding: 15px 30px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    border-bottom: 3px solid var(--cor7);
    box-shadow: 3px 3px 1em var(--cor3);
}

.logo-conteiner {
    max-width: 150px;
    cursor: pointer;
}


.header-logo {
    max-width: 100%;
    height: inherit;
    display: block;
}


.header-list {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: 3rem;
}


@media (max-width: 900px) {
    .header-conteiner {
        margin-bottom: 3rem;
    }
}
</style>