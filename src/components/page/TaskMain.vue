<template>
    <div :style="{'background-color': BackColor }" class="setPosition  mx-auto">  
        <v-card class="startField flex mx-auto">
                <v-btn icon="mdi-pen" size="large" @click="curtain()"></v-btn>
                <v-btn icon="mdi-delete"  size="large"  @click="alldelet"></v-btn>
                <v-btn icon="mdi-sort"  size="large"  @click="sorting" ></v-btn>
        </v-card>
        <v-card class="inputZoon" v-if="inputForum">
            <div class="lsd">
                <v-btn  icon="mdi-send" size="x-small"  @click="submit"></v-btn>
                <v-btn  icon="mdi-calendar-month" size="x-small"  @click="CalendarReset()"></v-btn>
                <v-btn  icon="mdi-backspace-outline" size="x-small"  @click="reset()"></v-btn>
            </div>
                <div class="InputAria mx-auto mt-1">
                    <div class="d-flex flex-row">
                        <v-select
                        class="bg-white"
                        label="Icon"
                        width="150"
                        v-model="task.action"
                        :items="['銀行', 'ごはん', 'ゲーム', 'ガーデン', '病院', '仕事', '探す', 'ペット', '学校', '買い物', '交通', 'その他']"
                        ></v-select>
                        <v-text-field
                            class="bg-white"
                            label="title"
                            width="600"
                            variant="underlined"
                            v-model="task.title"
                            />
                    </div>                            
                    <v-date-input 
                    v-if="task.dateDisplay"
                    label="Date input"
                    class="bg-white"
                    width="450"
                    hight="100"
                    type="mm/dd/yyyy"
                    v-model="task.date"
                    ><!--type = が効かない　 -->
                    </v-date-input>
                    <v-textarea
                        class="bg-white"
                        label="content"
                        width="450"
                        v-model="task.content"
                    />
                
                </div>
        </v-card>   
        <div  class="flex relative mt-15">
            <v-card v-for="t in tasks" :key="t.title" class="flex relative mt-5"><!--移動させるもの-->
                    <v-container class="bg-light-green-accent-3">
                        <v-card  class="my-4" width="500" >
                            <div class="d-flex flex-row relative">
                                <v-btn  icon="mdi-delete" size="x-small" @click="deletes(t.id)" class="delete">
                                </v-btn>
                                <v-card-title class="titleField"  variant="underlined" >
                                    {{t.title}}
                                    <p v-if="t.dateDisplay">{{ t.date }}</p> 
                                </v-card-title>
                                <v-img :src="photoCollection[t.action]"   class="photoField"> 
                                </v-img>
                            </div>
                                <v-card-text class="textField" >  
                                    {{t.content}}
                                </v-card-text>    
                        </v-card>
                    </v-container>
            </v-card>  
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Task, Tasks } from '../../scripts/types';
import { setTask, getTasks , deleteTask , sortTask } from '@/scripts/record';
import   {photoCollection } from '@/scripts/imgs';
import { VDateInput } from 'vuetify/labs/VDateInput'
import { green, red } from 'vuetify/util/colors';


const inputForum = ref<boolean>(true)
const fovaColor = ref<boolean>(true)
const keepID = ref<number>(0) 
const task = ref<Task>({title: "", content: "" , date: new Date(),  dateDisplay:false, good: "white"  ,action: "another" ,id : 0});
const tasks = ref<Tasks>([])
const BackColor = ref<string>("rgba(255,255, 255, 1)");

function submit() {
    task.value.id = keepID.value
    setTask(task.value);
    loadTasks()
    inputForum.value = false;
    reset()
   // console.log(`${year}年${month}月${day}日`);
}//taskの追加

function loadTasks() {
    tasks.value = getTasks();
for( const t of tasks.value){
        keepID.value = t.id
}
    tasks.value = getTasks();
    inputForum.value = false;
}//taskの追加の時に実行。表示される

function deletes(id:number){
    deleteTask(id)
    loadTasks()
}//データを消す

function sorting(){
    sortTask()
    loadTasks()
}
function reset(){
    inputForum.value = false
    BackColor.value = "rgba(0,0, 0, 0)"
    task.value.dateDisplay = false
    task.value.content = ""
    task.value.title = ""
    task.value.action = "その他"


}
function CalendarReset(){
    task.value.dateDisplay = !task.value.dateDisplay
}




onMounted(loadTasks);

function alldelet(){
    if (window.confirm("全てのデータを消しますか？")) {
        localStorage.removeItem('TasksData');
    loadTasks()
}
}
function curtain(){
        inputForum.value  = true
        BackColor.value = "rgba(0,0, 0, 0.5)";
      
}
</script>

<style src="./TaskMain.css" scoped>


</style>

