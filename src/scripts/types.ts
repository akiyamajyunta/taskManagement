export type Task = {title: string, content: string ,date:Date , dateDisplay:boolean,good:string, action:string  ,id : number};

export type Tasks = Task[];


const calenders  = new Date('mm/dd/yy');
const year = calenders.getFullYear();
const month = calenders.getMonth() + 1;
const day = calenders.getDate();
