import { ref } from "vue";
import type { Task,Tasks } from "./types";

export const items = ['銀行', 'ごはん', 'ゲーム', 'ガーデン', '病院', '仕事', '探す', 'ペット', '学校', '買い物', '交通', 'その他'];
export const icons = ['mdi-bank', 'mdi-dog-side', 'mdi-controller', 'mdi-home', 'mdi-hospital-box-outline', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home']

export const dialog = ref<boolean>(false)

export const inputForum = ref<boolean>(true)

export const keepID = ref<number>(0) 
export const task = ref<Task>({title: "", content: "" , date: new Date(),  dateDisplay:false, good: "white"  ,action: "another" ,id : 0});
export const tasks = ref<Tasks>([])

export const BackColor = ref<string>("rgba(255,255, 255, 1)");

export const menubar = ref<boolean>(false)


import {  onMounted } from 'vue';

import { setTask, getTasks , deleteTask , sortTask } from '@/scripts/record';
import   {photoCollection,} from '@/scripts/imgs';
import { VDateInput } from 'vuetify/labs/VDateInput'





export function submit() {
    task.value.id = keepID.value
    setTask(task.value);
    loadTasks()
    inputForum.value = false;
    reset()
}//taskの追加

export function loadTasks() {
    tasks.value = getTasks();
    for( const t of tasks.value){
            keepID.value = t.id
    }
    tasks.value = getTasks();
    inputForum.value = false;
}//taskの追加の時に実行。表示される




export function reset(){
    inputForum.value = false
    BackColor.value = "rgba(0,0, 0, 0)"
    task.value.dateDisplay = false
    task.value.content = ""
    task.value.title = ""
    task.value.action = "その他"


}
export function CalendarReset(){
    task.value.dateDisplay = !task.value.dateDisplay
}

export function sideBar(){
    menubar.value =!  menubar.value

}








