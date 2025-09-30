<script setup lang="ts">
import { useScene2Store } from '../stores/scene2Store';

const storeSceneMain = useScene2Store();

</script>

<template>
<div class="container-podpowiedz">{{storeSceneMain.podpowiedzTresc}}</div>
</template>

<style scoped>
.container-podpowiedz{
    width: 700px;
    height: 125px;
    border-radius: 39px;
    background-color: #F7C807;
    border: 5px solid #1D5488;
    text-align: center;
    font-size: 36px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    display: grid;
    place-content: center
}
</style>