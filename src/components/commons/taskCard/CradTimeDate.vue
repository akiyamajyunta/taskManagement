<template>
    <div>
        <v-card-title class="timeFelid  ml-2"  
                        variant="underlined"   
                        :style="{fontSize: CardSize * 0.3 +'%'}"  
                        v-if="props.forTasks[0].dateDisplay">
                        <v-icon 
                            left>mdi-calendar-text
                        </v-icon>
            <a>{{getData(props.forTasks[0].date)}}</a>
        </v-card-title> 
    </div>
    <div>
        <v-card-title class="timeFelid mt-n4 ml-2"  
                        variant="underlined"
                        :style="{fontSize: CardSize * 0.3 +'%'}"    
                        v-if="props.forTasks[0].timeDisplay">
                        <v-icon 
                            left>mdi-clock-time-four-outline
                        </v-icon>
            <a>{{(props.forTasks[0].time)}}</a>
            <a>{{props.forTasks[0].particle}}</a>
        </v-card-title> 
    </div>
</template>


<script setup lang="ts">
import { CardSize, getData } from '@/scripts/input';
import type { Task } from '@/scripts/types';
const props = defineProps<{
    forTasks:Task[]}>();



</script>
<style scoped>




</style>