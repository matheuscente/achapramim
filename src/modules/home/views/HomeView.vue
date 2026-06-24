<template>
    <SelectModule :button="cepConfigs.button" :route-name="cepConfigs.routeName">
        <template #title>
            BUSCA CEP
        </template>
        <template #description>
            Neste serviço, poderá procurar um cep pelo endereço ou procurar um endereço pelo cep.
        </template>
    </SelectModule>

    <SelectModule :button="dddConfigs.button" :route-name="dddConfigs.routeName">
        <template #title>
            BUSCA DDD
        </template>

        <template #description>
            Neste serviço, poderá procurar uma cidade pelo DDD.
        </template>
    </SelectModule>
</template>

<script setup lang="ts">
import SelectModule from '../components/SelectModule.vue';
import { dddConfigs, cepConfigs } from '../configs/homeConfig.ts';

</script>