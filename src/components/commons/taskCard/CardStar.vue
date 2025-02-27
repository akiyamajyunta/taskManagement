<template>
    <div >                
        <v-icon 
        v-for="n in props.forTasks[0].star" :key="n"
        icon="mdi-star"
        color="yellow"
        class="mx-1"
        :style="{fontSize: CardSize * 0.5 +'%'}"  
        >
        </v-icon>
    </div>   


</template>


<script setup lang="ts">
import { CardSize } from '@/scripts/input';
import type { Task } from '@/scripts/types';
const props = defineProps<{
    forTasks:Task[]}>();


</script>
<style scoped>




</style>