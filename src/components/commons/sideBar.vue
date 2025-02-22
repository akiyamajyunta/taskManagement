<template>
    <v-card class="menuBar">
        <v-btn
        tile
        icon="mdi-menu" 
        size="large"
        @click="sideBar()"
        :color="colorsTest[testSend]['head']"
        ></v-btn>

        <v-card>
            <p>カードサイズ</p>
            <input type="range" min="200" max="400" value="50" class="slider" v-model="CardSize "/>
            {{ CardSize }}
        </v-card>
           <v-btn icon="mdi-delete"  size="large"  @click="alldelet()"></v-btn>
    </v-card>
</template>
<script setup lang="ts">

import { sideBar,loadTasks } from '@/scripts/input';
import { CardSize } from '@/scripts/input';
import { colorsTest ,testSend} from '@/scripts/record';
import type { ColorsType } from '@/scripts/types';


function alldelet(){
    if (window.confirm("全てのデータを消しますか？")) {
        localStorage.removeItem('TasksData');
        loadTasks()
}
}

//console.log(colorsTest[testSend.value]['head'])
</script>


<style scoped>
.menuBar{
    position: fixed;
    width: 250px;
    height: 100%;
    z-index: 1000;
    left:0%;
}


</style>
