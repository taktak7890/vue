<script setup lang="tsx">
import HelloWorld from './components/HelloWorld.vue';

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
    <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
