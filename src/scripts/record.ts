import { ref } from "vue";
import { loadTasks, sortPatternStore ,option } from "./input";
import type { Task, Tasks, ColorsName, Option} from "./types";


//changeColor getOption




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


//
export function  MovingTask(id:number,position:number){
    const rawData = localStorage.getItem('TasksData')
    if(rawData == null){
        alert("データがありません")
    }else{
        const upDateTasksData : {tasks: Tasks}  = JSON.parse(rawData);//移動する用のタスク
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);//移動しないタスク
                upDateTasksData.tasks = tasksData.tasks.filter(task => (task.id === id));
                tasksData.tasks = tasksData.tasks.filter(task =>!(task.id === id));
                upDateTasksData.tasks[0].position = position
                tasksData.tasks.push(upDateTasksData.tasks[0]);
                localStorage.setItem('TasksData', JSON.stringify(tasksData));
    }
}
export function openContent(id:number){
    const rawData = localStorage.getItem('TasksData')
    if(rawData == null){
        alert("データがありません")
    }else{
        const upDateTasksData : {tasks: Tasks}  = JSON.parse(rawData);//オープンするタスク
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);//オープンしないタスク
                upDateTasksData.tasks = tasksData.tasks.filter(task => (task.id === id));
                tasksData.tasks = tasksData.tasks.filter(task =>!(task.id === id));
                upDateTasksData.tasks[0].contentDisplay = !upDateTasksData.tasks[0].contentDisplay
                tasksData.tasks.push(upDateTasksData.tasks[0]);
                localStorage.setItem('TasksData', JSON.stringify(tasksData));
    }
}

export function sortTask(sortingPattern:number ){
    const rawData = localStorage.getItem('TasksData')
if (window.confirm("並べ変えますか？")){  
    if(rawData == null){
    }else{
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);
        switch (sortingPattern) {
        case 1:
            tasksData.tasks.sort((a,b) => a.title.localeCompare(b.title, 'ja'))
            break
        case 2:
            tasksData.tasks.sort((a,b) => (b.date.getTime() - a.date.getTime()))//No
            break
        case 3:
            tasksData.tasks.sort((a,b) => (b.star -  a.star))
            break
        }
        sortPatternStore.value = sortingPattern
        localStorage.setItem('TasksData', JSON.stringify(tasksData));
    }
}
loadTasks()
}//最後にloadtaskする

export function movingAfterSortTask(){
    const rawData = localStorage.getItem('TasksData')
    if(rawData == null){
    }else{
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);
        switch (sortPatternStore.value) {
        case 1:
            tasksData.tasks.sort((a,b) => a.title.localeCompare(b.title, 'ja'))
            break
        case 2:
            tasksData.tasks.sort((a,b) => (b.date.getTime() - a.date.getTime()))//No
            break
        case 3:
            tasksData.tasks.sort((a,b) => (b.star -  a.star))
            break
        }
        localStorage.setItem('TasksData', JSON.stringify(tasksData));
    }
    loadTasks()
}



//localStorage.setItem('option', JSON.stringify(option));
export function  changeColor(SendThemeColor:number){
    const rawData = localStorage.getItem('option')
   // console.log(rawData)
    if(rawData != null){
    const upDateOptionData = JSON.parse(rawData);
                upDateOptionData.themeColor = SendThemeColor
                console.log(JSON.stringify(upDateOptionData.themeColor))
                localStorage.setItem('option', JSON.stringify(upDateOptionData));
    }else{
            const newData = option
                localStorage.setItem('option', JSON.stringify(newData));
    }
}





export function getOption():number {
    const rawData = localStorage.getItem('option')
    if (rawData == null) {
            return 0
    } else {
        const optionData = JSON.parse(rawData);
                return  optionData.themeColor
        
    };
}



export const colorTheme  = ref<keyof  ColorsName>('America')
export const colors : ColorsName = {
    Antarctic: {head:'black',button:'lime-accent-2',backGrand:'white',MainCard:'white',
                            cardTypeBackGrand:'cyan-accent-1' ,bottomColor:'yellow-accent-2' ,sideColor:'lime-accent-1'},//summer
    chocMint:{head:'brown-darken-1',button:'cyan-accent-1', backGrand:'cyan-accent-1',MainCard:'white',
                                cardTypeBackGrand:'yellow-lighten-4' ,bottomColor:'brown-darken-1',sideColor:'black' },//chocoMint
    kyoto:{head:'green-darken-2',button:'lime-accent-2', backGrand:'red-lighten-1',MainCard:'lime-lighten-4',
                                cardTypeBackGrand:'red-lighten-4' ,bottomColor:'lime-accent-2',sideColor:'black' },//kyoto
    America:{head:'indigo-darken-3',button:'white', backGrand:'white',MainCard:'white',
                                cardTypeBackGrand:'red-accent-4' ,bottomColor:'lime-accent-2',sideColor:'white' },//America
    Italy:{head:'green',button:'white', backGrand:'white',MainCard:'white',
                                cardTypeBackGrand:'deep-orange-accent-3' ,bottomColor:'cyan-darken-1',sideColor:'black' },//Italy
    mono:{head:'black',button:'white', backGrand:'grey-lighten-2',MainCard:'white',sideColor:'black',
                                cardTypeBackGrand:'white' ,bottomColor:'white' },//mono
    }
export function colorsChange(color:number){
    switch (color){ 
        case 1:
            colorTheme.value = 'Antarctic'
            break
        case 2:
            colorTheme.value = 'chocMint'
            break
        case 3 :
            colorTheme.value = 'kyoto'
            break
        case 4 :
            colorTheme.value = 'America'
            break
        case 5 :
            colorTheme.value = 'Italy'
            break
        case 6 :
            colorTheme.value = 'mono'
            break
    }
        changeColor(color)      
        //option.value.themeColor = getOption()

}

