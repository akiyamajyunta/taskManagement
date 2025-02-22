<template>
    <v-card class="menuBar">
        <v-btn
        tile
        icon="mdi-menu" 
        size="large"
        @click="sideBar()"
        ></v-btn>

        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                    v-bind="props"
                    icon="mdi-sort"
                    size="large"
                ></v-btn>
            </template>
            <v-list>
                <v-list-item key="1" value="1" title="夏" @click="colorsChange(1)"/>
                <v-list-item key="1" value="2" title="チョコミント" @click="colorsChange(2)"/>
                <v-list-item key="1" value="3" title="京都" @click="colorsChange(3)"/>
                <v-list-item key="1" value="4" title="アメリカ" @click="colorsChange(4)"/>
                <v-list-item key="1" value="5" title="イタリア" @click="colorsChange(5)"/>
                <v-list-item key="1" value="6" title="モノ" @click="colorsChange(6)"/>
            </v-list>
        </v-menu>

        <v-card>
            <p>カードサイズ</p>
            <input type="range" min="200" max="400" value="50" class="slider" v-model="CardSize "/>
            {{ CardSize }}
        </v-card>
           <v-btn icon="mdi-delete"  size="large"  @click="alldelet()"></v-btn>
    </v-card>
</template>
<script setup lang="ts">
//夏　チョコミント　京都　アメリカ　イタリア　モノ
import { sideBar,loadTasks } from '@/scripts/input';
import { CardSize } from '@/scripts/input';
import { colorsChange } from '@/scripts/record';

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
