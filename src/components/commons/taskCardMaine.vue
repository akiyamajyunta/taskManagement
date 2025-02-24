<template>
    <v-container class="relative  mt-10  flex  justify-center">
        <v-card :style="{width: CardSize+'px'}" :color="colors[colorTheme].head"  
        v-for="t in tasks" :key="t.title" class="flex" elevation="4"> 
            <v-card :style="{width: 95+'%',height:90+'%'}" class="mx-auto mt-1" :color="colors[colorTheme].MainCard"  
                                v-if="movingCardJuge(props.taskType,t.position)">
                <template v-slot:prepend>
                    <v-avatar 
                        tile
                        border="info md"
                        class="ml-n3 mt-n2"
                        :color="colors[colorTheme].head"  
                        :size=" CardSize *0.2 +'px'"
                        >
                        <v-img
                            class="border-thin bg-white"
                            :src="photoCollection[t.action]"
                        ></v-img>
                    </v-avatar>
                    <div>
                        <v-card class="mt-0 ml-1 relative"
                                :color="colors[colorTheme].backGrand"
                                :style="{width: CardSize * 0.7 +'px',height: CardSize * 0.1 +'px'}"
                        >
                            <v-card-title 
                                class="titleField mt-1"  
                                :style="{fontSize: CardSize * 0.35 +'%'}"  
                                >{{ t.title }}
                            </v-card-title>
                        </v-card>
                        <div >                
                            <v-icon 
                            v-for="n in t.star" :key="n"
                            icon="mdi-star"
                            color="yellow"
                            class="mx-1"
                            :style="{fontSize: CardSize * 0.5 +'%'}"  
                            >
                            </v-icon>
                        </div>   
                    </div>
                </template>
                    <div>
                        <v-card-title class="timeFelid  ml-2"  
                                        variant="underlined"   
                                        :style="{fontSize: CardSize * 0.3 +'%'}"  
                                        v-if="t.dateDisplay">
                                        <v-icon 
                                        left>mdi-calendar-text</v-icon>
                            <a>{{getData(t.date)}}</a>
                        </v-card-title> 
                    </div>
                    <div>
                        <v-card-title class="timeFelid mt-n4 ml-2"  
                                        variant="underlined"
                                        :style="{fontSize: CardSize * 0.3 +'%'}"    
                                        v-if="t.timeDisplay">
                                        <v-icon 
                                        left>mdi-clock-time-four-outline</v-icon>
                            <a>{{(t.time)}}</a><a>{{t.particle}}</a>
                        </v-card-title> 
                    </div>
                <div class="box">
                </div>
                <div  v-if="t.contentDisplay" class="mt-n4">
                    <v-card-text
                    :style="{fontSize: CardSize * 0.25 +'%'}" 
                    >{{ t.content }}
                    </v-card-text>
                </div>
            <v-card :style="{height: CardSize * 0.14 +'px'}" :color="colors[colorTheme].bottomColor">
                    <v-icon
                        :style="{fontSize: CardSize * 0.4 +'%'}" 
                        @click="openContents(t.id)"
                        >{{ t.contentDisplay ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
                    </v-icon>
                        <v-icon
                        :style="{fontSize: CardSize * 0.4 +'%'}" 
                            icon="mdi-arrow-left-bold ml-3"
                            @click="moveCard(-1,t.position,t.id)"
                            >
                        </v-icon>
                        <v-icon
                        :style="{fontSize: CardSize * 0.4 +'%'}" 
                            icon="mdi-arrow-right-bold ml-3"
                            @click="moveCard(1,t.position,t.id)"
                            >
                        </v-icon>
                    <v-icon
                    :style="{fontSize: CardSize * 0.4 +'%'}" 
                        icon="mdi-delete ml-10"
                        @click="deletes(t.id)"
                        >
                    </v-icon>
            </v-card>          
            </v-card>
        </v-card>
        </v-container>
</template>


<script setup lang="ts">

import { loadTasks, tasks,getData, taskAction, CardSize, task } from '@/scripts/input';
import { deleteTask,  MovingTask,colors,colorTheme,openContent,movingAfterSortTask } from '@/scripts/record';
import { photoCollection } from '@/scripts/imgs';

const props = defineProps<{taskType:string}>();

function openContents(id:number){
    task.value.contentDisplay =!task.value.contentDisplay
    console.log("open"+ task.value.contentDisplay )
    openContent(id)
    loadTasks()
}

function deletes(id:number){
    deleteTask(id)
    loadTasks()
}//データを消す

function moveCard(move:number,position:number,id:number){
        position = position + move 
    if (position < 0) {
        position = 0;
    }else if  (position > 2) {
        position = 2;
    }else{}
    MovingTask(id,position)//移動
    movingAfterSortTask()
    loadTasks()
}

function movingCardJuge(zoonName:string,positionNumber:number):boolean{
if(zoonName == taskAction[positionNumber]){
    return true
}else{
    return false
}
}

</script>



<style  scoped>
.titleField{
    color: black;
    width: 130%;
    font-weight: bold;
    position: relative;
}
.box{
    height: 10px;
    width: 10px;
    display: flex;
}



</style>
