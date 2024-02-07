<script setup lang="ts">
import { ref } from 'vue';


defineProps({
    tile_key: String,
})
const selected = ref(true)

function onClick(args: MouseEvent) {
    selected.value = !selected.value;
    console.log(selected.value)
}
</script>

<template>
    {{ selected }}
    <div :id="`tile_${tile_key}`" v-bind:class="selected ? 'tile' : 'tile-selected'" @click="onClick">
        <div :style="{ width: '100%', height: '100%' }">10</div>
    </div>
</template>

<style>
.tile {
    background-color: aqua;
    border: 1px black solid;
    width: 2rem;
    height: 2rem;
    margin: 0%;
    padding: 0%;
}

.tile-selected {
    background-color: rgb(255, 0, 191);
    border: 1px black solid;
    width: 2rem;
    height: 2rem;
    margin: 0%;
    padding: 0%;
}

.tile:hover {
    background-color: aquamarine;
}
</style>