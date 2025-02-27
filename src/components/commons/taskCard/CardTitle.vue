<template>
    <v-card class="mt-0 ml-1 relative"
            :color="colors[colorTheme].backGrand"
            :style="{width: CardSize * 0.7 +'px',height: CardSize * 0.1 +'px'}">
        <v-card-title 
            class="titleField mt-1"  
            :style="{fontSize: CardSize * 0.35 +'%'}"  
            >{{ props.forTasks[0].title }}
        </v-card-title>
    </v-card>
</template>


<script setup lang="ts">
import { colors ,colorTheme }from '@/scripts/record';
import { CardSize } from '@/scripts/input';
import type  { Task } from '@/scripts/types';
const props = defineProps<{
    forTasks:Task[]}>();



</script>
<style scoped>




</style>