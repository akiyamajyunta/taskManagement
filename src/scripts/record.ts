import { loadTasks } from "./input";
import type { Task, Tasks,ColorsType ,ColorsName} from "./types";
import { ref } from "vue";

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
}


export function sortTask(sortingPattern:number ){
if (window.confirm("並べ変えますか？")){
    const rawData = localStorage.getItem('TasksData')
    if(rawData == null){
        alert("データがありません")
    }else{
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);
        switch (sortingPattern) {
        case 1:
            tasksData.tasks.sort((a,b) => a.title.localeCompare(b.title, 'ja'))
        case 2:
            // tasksData.tasks.sort((a,b) => (b.date.getTime() - a.date.getTime()))
        case 3:
            tasksData.tasks.sort((a,b) => (b.star -  a.star))
        }
        localStorage.setItem('TasksData', JSON.stringify(tasksData));
    }
}
loadTasks()
}//最後にloadtaskする


export const colorTheme  = ref<keyof  ColorsName>('summer')
export const colors : ColorsName = {
    summer: {head:'indigo-accent-2',button:'lime-accent-2',backGrand:'cyan-accent-1',MainCard:'white',
                            cardTypeBackGrand:'cyan-lighten-5' ,bottomColor:'yellow-accent-2' },//summer
    chocMint:{head:'brown-darken-1',button:'cyan-accent-1', backGrand:'cyan-accent-1',MainCard:'white',
                                cardTypeBackGrand:'yellow-lighten-4' ,bottomColor:'brown-darken-1' },//chocoMint
    kyoto:    {head:'green-darken-2',button:'lime-accent-2', backGrand:'red-lighten-1',MainCard:'white',
                                cardTypeBackGrand:'red-lighten-4' ,bottomColor:'lime-accent-2' },//kyoto
    America:    {head:'indigo-darken-3',button:'white', backGrand:'white',MainCard:'white',
                                cardTypeBackGrand:'red-accent-4' ,bottomColor:'lime-accent-2' },//America
    Italy:    {head:'green',button:'white', backGrand:'white',MainCard:'white',
                                cardTypeBackGrand:'deep-orange-accent-3' ,bottomColor:'cyan-darken-1' },//Italy
    mono:   {head:'black',button:'white', backGrand:'grey-lighten-2',MainCard:'white',
                                cardTypeBackGrand:'white' ,bottomColor:'white' },//mono
    }
export function colorsChange(color:number){
    switch (color){
        case 1:
        colorTheme.value = 'summer'
        case 2:
        colorTheme.value = 'chocMint'
        case 3 :
        colorTheme.value = 'kyoto'
        case 4 :
        colorTheme.value = 'America'
        case 5 :
        colorTheme.value = 'Italy'
        case 6 :
        colorTheme.value = 'mono'
    }
}
//夏　チョコミント　京都　アメリカ　イタリア　モノ