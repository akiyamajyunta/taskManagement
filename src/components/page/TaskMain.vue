<template>
    <div class="setPosition">  
            <TaskHeder/>
            <inputCardMain/>
                <v-card class="taskContainer"  
                        :color="colors[colorTheme].backGrand">
                    <TaskType :taskType="taskAction[0]"/>
                    <TaskType :taskType="taskAction[1]"/>
                    <TaskType :taskType="taskAction[2]"/>
                </v-card>
    </div>
</template>

<script setup lang="ts">
import { loadTasks,taskAction} from '@/scripts/input';
import  TaskHeder from '../commons/TaskHeder.vue';
import inputCardMain from '../commons/inputCardMain.vue';
import { colors } from '@/scripts/record';
import TaskType from '../commons/TaskType.vue';
import { colorTheme } from '@/scripts/record';
import { onMounted } from 'vue';


onMounted(loadTasks);

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

}


</style>

