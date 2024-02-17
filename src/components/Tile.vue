<script setup lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { Maths } from '../common/common'

interface Props {
    tileKey: string,
    percent: number,
    isOpen: Boolean,
}
const props = defineProps<Props>()

const isHit = ref(false)
watch(() => props.isOpen, () => {
    if (props.isOpen) {
        if (Maths.generateRandomBoolean(props.percent)) {
            isHit.value = true
        }
    } else {
        isHit.value = false;
    }
})

</script>


<template>
    <div :id="`tile_${tileKey}`" v-bind:class="((): string[] => {
        if (isOpen) {
            return ['tile', ...(isHit ? ['tile-black'] : ['tile-white'])]
        } else {
            return percent === 0 ? ['tile'] : ['tile', `tile-${percent}`]
        }
    })()
        ">
        <div :style="{ width: '100%', height: '100%' }" v-if="percent > 0">{{ percent }}</div>
    </div>
</template>

<style>
.tile {
    background-color: rgb(0, 128, 85);
    border: 1px black solid;
    width: 2rem;
    height: 2rem;
    margin: 0%;
    padding: 0%;
}

.tile-10 {
    background-color: #F2F2F2;
    color: black;
}

.tile-30 {
    background-color: #D9D9D9;
    color: black;
}

.tile-70 {
    background-color: #4D4D4D;
    color: white;
}

.tile-90 {
    background-color: #262626;
    color: white;
}

.tile-black {
    background-color: black;
}

.tile-white {
    background-color: white;
}

.tile:hover {
    background-color: aquamarine;
}
</style>