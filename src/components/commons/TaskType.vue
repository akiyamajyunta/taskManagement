<template>
    <v-card class="taskType">
        <p class="text-center">{{ props.taskType}}</p>
        <taskCardMaine  :taskType="props.taskType" />
    </v-card>
</template>
<script setup lang="ts">
const props = defineProps<{taskType:string}>();
import taskCardMaine from './taskCardMaine.vue';


</script>
<style scoped>

.taskType{
width: 30%;
height: 100%;
top:12%;
margin:1%;
background-color: rgb(255, 255, 255);
}

@media (max-width: 980px) {
    .taskType{
        width: 45%;
        margin: auto;
     
        
        }
}
@media (max-width: 580px) {
    .taskType{
        width: 60%;
        margin: auto;

        }
}


</style>

