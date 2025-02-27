<template>
    <v-avatar 
    tile
    border="info md"
    class="ml-n3 mt-n2"
    :color="colors[colorTheme].head"  
    :size=" CardSize *0.2 +'px'"
    >
        <v-img
            class="border-thin bg-white"
            :src="photoCollection[props.forTasks[0].action]"
        ></v-img>
    </v-avatar>
</template>


<script setup lang="ts">
import {colors, colorTheme } from '@/scripts/record';
import { CardSize } from '@/scripts/input';
import { photoCollection } from '@/scripts/imgs';
import type { Task } from '@/scripts/types';
const props = defineProps<{
    forTasks:Task[]}>();


</script>
<style scoped>




</style>