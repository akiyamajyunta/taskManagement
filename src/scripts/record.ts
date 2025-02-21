import {  tasks,loadTasks } from "./input";
import type { Task, Tasks } from "./types";
import { task } from "./input";

export function setTask(task: Task) {
        if(task.title.length <= 0){
            alert("タイトルを入力してください")
        }else if(task.title.length > 10){
            alert("タイトルは10文字以内にしてください"+(task.title.length-10)+"文字オーバーしてます。")
        }else if( task.content.length > 140){
            alert("タイトルは10文字以内にしてください"+(task.content.length-140)+"文字オーバーしてます。")
        }else{
                const rawData = localStorage.getItem('TasksData')
                task.id ++
            if (rawData != null) {
                const tasksData: {tasks: Tasks} = JSON.parse(rawData);
                tasksData.tasks.push(task);
                localStorage.setItem('TasksData', JSON.stringify(tasksData));
            } else{
                const tasksData: {tasks: Tasks} = {tasks: []};
                tasksData.tasks.push(task);
                localStorage.setItem('TasksData', JSON.stringify(tasksData));
            };
}}
//titelは20文字以内、textは140以内に収めるとする。

export function getTasks(): Tasks {
    const rawData = localStorage.getItem('TasksData')
    if (rawData == null) {
        return []
    } else {
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);
        return tasksData.tasks;
    };
}


export function deleteTask(id:number){
    const rawData = localStorage.getItem('TasksData')
if(rawData == null){
    alert("データがありません")
    }else{
        console.log(id)
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);
        tasksData.tasks = tasksData.tasks.filter(task => !(task.id === id));
        localStorage.setItem('TasksData', JSON.stringify(tasksData));
    }
}

export function upeDateTask(id:number,position:number){
    const rawData = localStorage.getItem('TasksData')
    if(rawData == null){
        alert("データがありません")
    }else{
        const upDateTasksData : {tasks: Tasks}  = JSON.parse(rawData);//アップデート用のタスク
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);//アップデートしないタスク
                upDateTasksData.tasks = tasksData.tasks.filter(task => (task.id === id));
                tasksData.tasks = tasksData.tasks.filter(task =>!(task.id === id));
                upDateTasksData.tasks[0].position = position
                tasksData.tasks.push(upDateTasksData.tasks[0]);
                localStorage.setItem('TasksData', JSON.stringify(tasksData));
    }
                sorting()
}


export function sortTask(){
if (window.confirm("並べ変えますか？")){
    const rawData = localStorage.getItem('TasksData')
    if(rawData == null){
        alert("データがありません")
    }else{
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);
        tasksData.tasks.sort((a,b) => a.title.localeCompare(b.title, 'ja'))
        localStorage.setItem('TasksData', JSON.stringify(tasksData));
    }
}
}//最後にloadtaskする


export function sorting(){
    sortTask()
    loadTasks()
}


