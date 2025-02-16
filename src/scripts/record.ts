import type { Task, Tasks } from "./types";

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
                console.log("タイトルは"+task.content)
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
    //const rawData  = JSON.parse('TasksData');
if(rawData == null){
    alert("データがありません")
}else{
    console.log(id)
    const tasksData: {tasks: Tasks} = JSON.parse(rawData);
    tasksData.tasks = tasksData.tasks.filter(task => !(task.id === id));
    localStorage.setItem('TasksData', JSON.stringify(tasksData));
}

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

