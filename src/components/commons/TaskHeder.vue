<template>
    <v-card class="startField flex mx-auto">
        <div class="">
            <v-btn icon="mdi-menu" size="large" @click="sideBar" ></v-btn>
            <v-btn icon="mdi-pen" size="large" @click="curtain()"></v-btn>

            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn
                        v-bind="props"
                        icon="mdi-sort"
                        size="large"
                    ></v-btn>
                </template>
                <v-list>
                    <v-list-item key="1" value="1" title="50音" @click="sortTask(1)"/>
                    <v-list-item key="1" value="2" title="日時" @click="sortTask(2)"/>
                    <v-list-item key="1" value="3" title="優先度" @click="sortTask(3)"/>
                </v-list>
                <v-list>
                </v-list>
            </v-menu>
            
        </div>

    
    </v-card>
    <Transition>
        <menue-bar v-if="menubar"/>
    </Transition>

</template>

<script setup lang="ts">
import {  inputForum , menubar} from '@/scripts/input';
import { sortTask } from '@/scripts/record';
import menueBar from './sideBar.vue';
import { sideBar } from '@/scripts/input';


function curtain(){
        inputForum.value  = true
}


</script>


<style  scoped>
.startField{
    background-color: chartreuse;
    width: 100%;
    justify-content: center;
    position: fixed;
    z-index: 1000;
    }
.taskType{
width: 30%;
height: 10%;

}

.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease;
}

.v-enter-from {
  transform: translateX(-100%);
}

.v-leave-to {
  transform: translateX(-100%);
}


</style>
