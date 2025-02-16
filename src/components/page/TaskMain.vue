<template>
    <div class="setPosition ">
        <div class="main mx-auto">
            <v-card class="flex mx-auto relative overflow-hidden" >
                <div class="flex mx-auto" v-if="true">
                    <v-btn  icon="mdi-pen" size="large" @click="inputForum=true"></v-btn>
                    <v-btn @click="alldelet">全てのデータを消す</v-btn>
                </div>
                <div class="inputZoon " v-if="inputForum">
                    <div>
                        <div class="lsd">
                            <v-btn  icon="mdi-send" size="x-small"  @click="submit"></v-btn>
                            <v-btn  icon="mdi-backspace-outline" size="x-small"  @click="inputForum=false"></v-btn>
                        </div>
                        <div class="d-flex flex-row">
                            <v-autocomplete
                            label="e"
                            width="100"
                            :items="[]"
                            ></v-autocomplete>
                            <v-text-field
                                label="title"
                                width="400"
                                variant="underlined"
                                v-model="task.title"
                            />
                        </div>
                                <!-- :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"-->
                        <v-textarea
                            label="content"
                            width="500"
                            v-model="task.content"
                        />
                    </div>
                </div>
                <div v-for="t in tasks" :key="t.title" class="flex relative">
                    <v-container class="bg-black">
                        <v-card  class="my-4" width="500" >
                            <div class="d-flex flex-row relative">
                                <v-btn  icon="mdi-delete" size="x-small" @click="deletes(t.id)" class="delete">
                                </v-btn>
                                <v-card-title class="titleField"  variant="underlined" >
                                    {{t.title}}
                                </v-card-title>
                                <v-img class="photoField">
                                        <p>aaa</p>
                                </v-img>
                            </div>
                                <v-card-text class="textField" >  
                                    {{t.content}}
                                </v-card-text>    
                        </v-card>
                    </v-container>
                </div>
            </v-card>
        </div>

    </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Task, Tasks } from '../../scripts/types';
import { setTask, getTasks , deleteTask} from '@/scripts/record';


const inputForum = ref<boolean>(true)
const keepID = ref<number>(0) 
const task = ref<Task>({title: "", content: "" , id : 0});
const tasks = ref<Tasks>([])


function submit() {
    task.value.id = keepID.value
    setTask(task.value);
    loadTasks()
    inputForum.value = false;
}//taskの追加

function loadTasks() {
    tasks.value = getTasks();
for( const t of tasks.value){
        keepID.value = t.id
}
    tasks.value = getTasks();
}//taskの追加の時に実行。表示される

function deletes(id:number){
    deleteTask(id)
    loadTasks()
}//データを消す

onMounted(loadTasks);

function alldelet(){
    localStorage.removeItem('TasksData');
    loadTasks()
}
function set(){
    alert("aa")
}

</script>

<style src="./TaskMain.css" scoped>

</style>


