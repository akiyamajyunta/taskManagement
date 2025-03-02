<template>
    <v-card class="taskType flex justify-center mt-n1"
            :color="colors[colorTheme].cardTypeBackGrand"  
    >
        <p class="text-center">{{ props.taskType}}</p>
            <taskCardMaine  :taskType="props.taskType" />    
    </v-card>
</template>
<script setup lang="ts">
import { colors,colorTheme } from '@/scripts/record';
import taskCardMaine from './taskCard/CardMain.vue';

const props = defineProps<{taskType:string}>();

</script>
<style scoped>

.taskType{
width: 30%;
height: 90%;
overflow: auto;  
top:100px;
margin:1%;
}

@media (max-width: 1020px) {
    .taskType{
        width: 48%;
        margin: auto;
        
        }
}
@media (max-width: 580px) {
    .taskType{
        width: 90%;
        margin: auto;

        }
}


</style>

