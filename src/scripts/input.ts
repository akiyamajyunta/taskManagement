import { ref } from "vue";
import type { Task,Tasks } from "./types";


export const items = ['銀行', 'ごはん', 'ゲーム', 'ガーデン', '病院', '仕事', '探す', 'ペット', '学校', '買い物', '交通', 'その他'];
//export const icons = ['mdi-bank', 'mdi-dog-side', 'mdi-controller', 'mdi-home', 'mdi-hospital-box-outline', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home']

export const dialog = ref<boolean>(false)

export const inputForum = ref<boolean>(true)

export const keepID = ref<number>(0) 
export const task = ref<Task>({title: "", content: "" , star:3, date: new Date(), time: new Date(), particle :"",
                                dateDisplay:false, timeDisplay:false,  action: "another" ,id : 0 ,position : 1});
export const tasks = ref<Tasks>([])

export const BackColor = ref<string>("rgba(255,255, 255, 1)");

export const menubar = ref<boolean>(false)





import { setTask, getTasks } from '@/scripts/record';

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

export function getData(data: Date){
    const calenders  = new Date();
    const year = calenders.getFullYear();
    const month = calenders.getMonth() + 1;
    const day = calenders.getDate();
    console.log( year +"年"+month + "月" + day + "日")
        return  year +"年"+month + "月" + day + "日"
}

export function getTime(date : Date){
    const calenders  = date
    const Hours = calenders.getHours();
    const minute = calenders.getMinutes();    
        return  Hours + "時" + minute +"分"
}

export const taskAction = ["実行前","実行中","終了"]




