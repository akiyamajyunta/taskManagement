import type { Task, Tasks } from "./types";

export function setTask(task: Task) {
    const rawData = localStorage.getItem('TasksData')
    if (rawData != null) {
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);
        tasksData.tasks.push(task);
        localStorage.setItem('TasksData', JSON.stringify(tasksData));
    } else{
        const tasksData: {tasks: Tasks} = {tasks: []};
        tasksData.tasks.push(task);
        localStorage.setItem('TasksData', JSON.stringify(tasksData));
    };
}


export function getTasks(): Tasks {
    const rawData = localStorage.getItem('TasksData')
    if (rawData == null) {
        return []
    } else {
        const tasksData: {tasks: Tasks} = JSON.parse(rawData);
        return tasksData.tasks;
    };
}

//TasksData "tasks":{"title":"タイトル","content":"データ"}]
export function deleteTask(){
    localStorage.removeItem('TasksData');



}