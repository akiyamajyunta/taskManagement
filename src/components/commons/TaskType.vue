<template>
    <v-card class="taskType flex justify-center"
            :color="colors[colorTheme].cardTypeBackGrand"  
    >
        <p class="text-center">{{ props.taskType}}</p>
            <taskCardMaine  :taskType="props.taskType" />
    </v-card>
</template>
<script setup lang="ts">
import { colors } from '@/scripts/record';
import { colorTheme } from '@/scripts/record';
import taskCardMaine from './taskCardMaine.vue';

const props = defineProps<{taskType:string}>();

</script>
<style scoped>

.taskType{
width: 30%;
height: 100%;
top:12%;
margin:1%;
background-color: rgb(255, 255, 255);
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

