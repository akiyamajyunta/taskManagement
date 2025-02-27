<template>
    <v-card :style="{height: CardSize * 0.14 +'px'}" 
        :color="colors[colorTheme].bottomColor">
    <v-icon
        :style="{fontSize: CardSize * 0.4 +'%'}" 
        @click="openContents(props.forTasks[0].id)"
        >{{props.forTasks[0].contentDisplay ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
    </v-icon>
    <v-icon
        :style="{fontSize: CardSize * 0.4 +'%'}" 
        icon="mdi-arrow-left-bold ml-3"
        @click="moveCard(-1,props.forTasks[0].position,props.forTasks[0].id)"
        >
    </v-icon>
    <v-icon
        :style="{fontSize: CardSize * 0.4 +'%'}" 
        icon="mdi-arrow-right-bold ml-3"
        @click="moveCard(1,props.forTasks[0].position,props.forTasks[0].id)"
        >
    </v-icon>
    <v-icon
        :style="{fontSize: CardSize * 0.4 +'%'}" 
        icon="mdi-delete delateCard"
        @click="deletes(props.forTasks[0].id)"
        >
    </v-icon>
</v-card>         

</template>

<script setup lang="ts">

import { colors,colorTheme,openContent,
        deleteTask,MovingTask,movingAfterSortTask  } from '@/scripts/record';
import { task,  loadTasks, CardSize } from '@/scripts/input';
import { defineProps } from 'vue';
import type { Task } from '@/scripts/types';

const props = defineProps<{
            forTasks:Task[]}>();

function openContents(id:number){
    task.value.contentDisplay =!task.value.contentDisplay
    openContent(id)
    movingAfterSortTask()
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

</script>

<style scoped>
.delateCard{
    position: relative;
    left:50%
}







</style>

