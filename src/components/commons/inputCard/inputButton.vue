<template>
    <v-card class="buttonZone" 
                :color="colors[colorTheme].backGrand">
        <v-btn icon="mdi-send" 
                size="x-small" 
                @click="addTask">
        </v-btn>
        <v-btn icon="mdi-calendar-month" 
                size="x-small" 
                @click="CalendarVisible">
        </v-btn>
        <v-btn icon="mdi-clock-time-five-outline" 
                size="x-small" 
                @click="DateVisible">
        </v-btn>
        <v-btn icon="mdi-backspace-outline" 
                size="x-small"  
                @click="reset">
        </v-btn>
    </v-card>
</template>

<script setup lang="ts">
import { reset, task,addTask} from '@/scripts/input';
import { colors ,colorTheme} from '@/scripts/record';

function CalendarVisible(){
    task.value.dateDisplay = !task.value.dateDisplay
}
function DateVisible(){
    task.value.timeDisplay = !task.value.timeDisplay
}


</script>
<style scoped>




</style>

