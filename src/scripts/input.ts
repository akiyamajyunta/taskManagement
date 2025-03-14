import { ref } from "vue";
import type { Task,Tasks,Option} from "./types";
import { setTask, getTasks ,getOption, colorsChange} from '@/scripts/record';

export const task = ref<Task>({title: "", 
                                content: "" , 
                                star:3, 
                                date: new Date(), 
                                time: "", 
                                particle :"",
                                dateDisplay:false, 
                                timeDisplay:false, 
                                contentDisplay:false,
                                action: "another",
                                id : 0 ,
                                position : 1});

export const option = ref<Option>({themeColor:1,size:300})                               
export const taskAction = ["実行前","実行中","終了"]

export const dialog = ref<boolean>(false)
export const inputForum = ref<boolean>(true)
export const keepID = ref<number>(0) 
export const tasks = ref<Tasks>([])
export const menubar = ref<boolean>(false)
export const CardSizeVolume = ref<boolean>(false)
export const CardSize = ref<number>(200)

export const sortPatternStore = ref<number>(0)//タスクの移動後に並び替えをする。そのパターンの保存


export function addTask() {
    task.value.id = keepID.value
    setTask(task.value);
    loadTasks()
    inputForum.value = false;
    reset()
}//taskの追加

export function loadTasks(){
    tasks.value = getTasks();
    for( const t of tasks.value){
            keepID.value = t.id
    }
    tasks.value = getTasks();
    inputForum.value = false;
}//taskの追加の時に実行。loadTasksdで表示される

export function setArt(){
    option.value.themeColor = getOption()
    colorsChange(option.value.themeColor)
}



export function reset(){
    inputForum.value = false
    task.value.dateDisplay = false
    task.value.content = ""
    task.value.title = ""
    task.value.action = "その他"
}

export function getData(date: Date):string{
    const calenders  = new Date(date)
    const year = calenders.getFullYear();
    const month = calenders.getMonth() + 1;
    const day = calenders.getDate();
    console.log( year +"年"+month + "月" + day + "日")
        return  String(year +"年"+month + "月" + day + "日")
}