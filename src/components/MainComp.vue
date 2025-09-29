<script setup lang="ts">
import SceneInstruction from './SceneInstruction.vue'
import SceneMain1 from './SceneMain1.vue'
import SceneMain2 from './SceneMain2.vue'
import SceneWinSilver from './SceneWinSilver.vue'
import SceneWinGold from './SceneWinGold.vue'
import PrzegranaSilver from './PrzegranaSilver.vue'
import PrzegranaGold from './PrzegranaGold.vue'
import  {useMainCompStore} from '../stores/mainCompStore'

const store=useMainCompStore()
</script>

<template>
    <main>
        <div>
            <SceneInstruction v-if="store.ifInstruction" />
            <SceneMain1 v-if="store.ifMain1"/>
            <SceneMain2 v-if="store.ifMain2"/>
            <SceneWinSilver v-if="store.ifWinSilver"/>
            <SceneWinGold v-if="store.ifWinGold"/>
            <PrzegranaSilver v-if="store.ifPrzegranaSilver"/>
            <PrzegranaGold v-if="store.ifPrzegranaGold"/>
        </div>
    </main>
</template>

<style scoped></style>