<script setup lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { Maths } from '../common/common'

interface Props {
    tileKey: string,
    percent: number,
    openFlg: Boolean,
}
const props = defineProps<Props>()

const hitFlg = ref(false)
watch(() => props.openFlg, () => {
    if (props.openFlg) {
        if (Maths.generateRandomBoolean(props.percent)) {
            hitFlg.value = true
        }
    } else {
        hitFlg.value = false;
    }
})

</script>


<template>
    <div :id="`tile_${tileKey}`"
        v-bind:class="['tile', ...(openFlg === false || percent === 0 ? [] : hitFlg ? ['tile-black'] : ['tile-white'])]">
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