<template>
    <v-text-field
        label="title"
        width="300"
        v-model="task.title"
    />
    <v-text-field
        label="content"
        width="300"
        v-model="task.content"
    />

    <v-btn @click="submit">Submit</v-btn>
    <v-btn @click="deletes">データを消す</v-btn>
    
    <div v-for="t in tasks" :key="t.title">
       <v-card
            class="my-4"
            :title="t.title"
            :text="t.content"
            width="300"
            
        />
        
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Task, Tasks } from '../../scripts/types';
import { setTask, getTasks , deleteTask} from '@/scripts/record';


const task = ref<Task>({title: "", content: ""});
const tasks = ref<Tasks>([])

function submit() {
    setTask(task.value);
    loadTasks()
}

function loadTasks() {
    tasks.value = getTasks();
}
function deletes(){
    deleteTask()
    loadTasks()
}

onMounted(loadTasks);



</script>