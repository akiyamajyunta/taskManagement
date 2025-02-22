export type Task = {title: string, content: string,star:number,
                    date:Date, time:Date, particle : string,
                    dateDisplay:boolean, timeDisplay:boolean,
                    action:string  ,id : number, position : number };
export type ColorsType = {
    summer: {
        head: string;
        button: string;
        backGrand: string;
        MainCard: string;
        cardTypeBackGrand: string;
        bottomColor: string;
    };
};

export type Tasks = Task[];

