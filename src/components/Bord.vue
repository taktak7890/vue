<script setup lang="ts">
import { reactive, ref, shallowRef, triggerRef } from 'vue'
import Tile from './Tile.vue'

interface Props {
    x: number,
    y: number,
}
const props = defineProps<Props>()
const openStatus = ref(false)

const tile = ref<number[][]>([]);

for (let i = 0; i < props.x; i++) {
    tile.value.push([])
    for (let j = 0; j < props.y; j++) {
        tile.value[i].push(0);
    }
}

const reset = () => {
    if (!window.confirm('reset?')) {
        return;
    }
    tile.value.forEach(e => e.forEach((e2, i) => e2 = 0));
    Counter.reset();
    openStatus.value = false;
}

const changeStatus = () => {
    openStatus.value = !openStatus.value;
}

class Counter {
    private static i = 0;
    private static percentLiist = [10, 70, 30, 90] as const;
    static getPercent() {

        return (this.i === this.percentLiist.length) ? this.percentLiist[0] : this.percentLiist[this.i];
    }
    static getNext() {
        if (this.i === this.percentLiist.length) {
            this.reset();
        }
        return this.percentLiist[this.i++];
    }
    static setPrev() {
        if (this.i === 0) {
            this.i = this.percentLiist.length - 1;
        } else {
            this.i--;
        }
    }
    static reset() {
        this.i = 0;
    }
}

const onClick_tile = (index_i: number, index_j: number) => {
    if (tile.value[index_i][index_j] > 0) {
        tile.value[index_i][index_j] = 0;
        Counter.setPrev();
        return;
    }
    tile.value[index_i][index_j] = Counter.getNext()
}
</script>

<template>
    <div class="card">
        <div style="font-weight: bold;"><span>next:{{ Counter.getPercent() }}</span></div>
        <button type="button" @click="changeStatus">{{ openStatus ? '閉じる' : '開く' }}</button>
        <table style="border-collapse: collapse;">
            <tr v-for="(i, index_i) in tile">
                <td v-for="(j, index_j) in i" @click="() => onClick_tile(index_i, index_j)">
                    <Tile :tile-key="`${index_j}_${index_i}`" :percent="tile[index_i][index_j]" :is-open="openStatus">
                    </Tile>
                </td>
            </tr>
        </table>
        <button type="button" @click="reset">reset</button>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
