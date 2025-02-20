<template>
    <!-- <v-dialog v-model="dialog">
        <v-card
            title="Test"
            text="this is test dialog"
        />
    </v-dialog>
    <v-btn @click="dialog = true">Dialog</v-btn> -->

    
    <div class="setPosition">  
            <TaskHeder/>
            <inputCardMain/>
            <div class="taskContainer" >
                <TaskType :taskType="taskAction[0]"/>
                <TaskType :taskType="taskAction[1]"/>
                <TaskType :taskType="taskAction[2]"/>
            </div>
            <inputForm/>
            <!-- <ahoShine/> -->
            <TaskCard/>
    </div>
</template>

<script setup lang="ts">
import { loadTasks } from '@/scripts/input';
import  TaskHeder from '../commons/TaskHeder.vue';
import inputForm from '../commons/inputForm.vue';
import TaskCard from '../commons/TaskCard.vue';
import inputCardMain from '../commons/inputCardMain.vue';

import TaskType from '../commons/TaskType.vue';

import { onMounted } from 'vue';


onMounted(loadTasks);
const taskAction = ["実行前","実行中","終了"]



</script>

<style scoped>
.setPosition{
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    background-color: rgba(50, 53, 53, 0);
} 

.taskContainer {
    width: 300%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* アイテム間にスペースを追加 */
    background-color: aqua;
}


</style>

