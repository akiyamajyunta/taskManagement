<template>
    <v-card class="menuBar">
        <v-btn
        @click="sideBar()"
        >サイドバーです
        </v-btn>
        <v-btn icon="mdi-delete"  size="large"  @click="alldelet()"></v-btn>
    </v-card>
</template>
<script setup lang="ts">

import { sideBar,loadTasks } from '@/scripts/input';

function alldelet(){
    if (window.confirm("全てのデータを消しますか？")) {
        localStorage.removeItem('TasksData');
        loadTasks()
}
}


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
