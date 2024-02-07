<script setup lang="ts">
import { ref } from 'vue'
import Tile from './Tile.vue'

defineProps({
    msg: String,
})

const count = ref({ a: 1, b: 2 })

const tile: boolean[][] = [];
for (let i = 0; i < 10; i++) {
    tile.push([])
    for (let j = 0; j < 10; j++) {
        tile[i].push(false);
    }
}
</script>

<template>
    <h1>{{ msg }}</h1>

    <div class="card">
        <button type="button" @click="count.a++">count is {{ { count } }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
        <div id="app">
            <table style="border-collapse: collapse;">
                <tr v-for="(i, index_i) in tile">
                    <td v-for="(j, index_j) in i">
                        <Tile :tile_key="`${index_j}_${index_i}`" v-if="'a'"></Tile>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
        starter
    </p>
    <p>
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
