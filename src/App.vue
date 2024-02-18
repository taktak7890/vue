<script setup lang="tsx">
import Bord from './components/bord.vue';

const KeyDownOverrideList: KeyboardEvent['key'][] = [
    'F1'
]
window.addEventListener('keydown', (e) => {
    if (KeyDownOverrideList.includes(e.key)) {
        e.preventDefault()
    }
})
</script>

<template>
    <div>
        <Bord :x="15" :y="15" />
    </div>
</template>

<style scoped></style>
