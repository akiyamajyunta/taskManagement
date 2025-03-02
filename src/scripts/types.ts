export type Task = {title: string, content: string,star:number,
                    date:Date, time:string, particle : string,
                    dateDisplay:boolean, timeDisplay:boolean,
                    contentDisplay:boolean,
                    action:string  ,id : number, position : number }
export type Tasks = Task[];  

export type Option = {
    themeColor : number,
    size : number
}                
    
export type ColorsType = {
    head: string;
    button: string;
    backGrand: string;
    MainCard: string;
    cardTypeBackGrand: string;
    bottomColor: string;
    sideColor:string
}


export type ColorsName = {
    Antarctic: ColorsType,
    chocMint : ColorsType
    Italy:ColorsType,
    America : ColorsType,
    mono:ColorsType,
};



