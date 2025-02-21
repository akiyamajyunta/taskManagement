<template>
    <div class="d-flex flex-row mt-3">
        <v-select
            class=""
            variant="outlined"
            label="Icon"
            hight="100%"
            width="30%"
            :items="lists"
            item-title="name"
            v-model="task.action"
        >
            <template v-slot:item="{ props, item }" >
                <v-list-item
                    v-bind="props"> 
                    <v-img
                    class="mt-n5 ml-15"
                    :src="item.raw.photo"
                    max-width="20"
                    max-height="40"
                    contain
                    ></v-img><!--ここでのSrcは選択肢の横のアイコン -->
                </v-list-item>
            </template>
        </v-select>
        <v-text-field
            class=""
            label="title"
            width="70%"
            variant="outlined"
            v-model="task.title"
            />
    </div>     
    <div class="mt-n5 mx-7">
        <div>
            <div class="ml-10 d-inline "> 
                <v-icon icon="mdi-menu-left" class="mt-2  flex absolute" @click="taskRank(-1)"></v-icon>  
                <div class="d-inline">
                    <div class="d-inline">
                        <v-icon 
                            v-for="n in 5" :key="n"
                            icon="mdi-star"
                            color="black"
                            class="mx-3"
                        >
                        </v-icon >
                    </div>  
                </div>
                <v-icon icon="mdi-menu-right" class="mt-1  flex absolute"  @click="taskRank(1)"></v-icon> 
            </div>
        </div>    
        <div class="ml-10 d-inline">   
            <div class="flex ml-16 mt-n13">
                <v-icon 
                    v-for="n in task.star" :key="n"
                    icon="mdi-star"
                    color="yellow"
                    class="mx-3"
                    v-model="task.star"
                >
                </v-icon >
            </div>
        </div>    <!-- 本物の星 -->
    </div>
</template>

<script setup lang="ts">

import { task } from '@/scripts/input';
import { lists } from '@/scripts/imgs';





function taskRank(taskRank:number){
    task.value.star = task.value.star + taskRank 
    if (task.value.star < 1) {
        task.value.star = 1;
    }else if  (task.value.star > 5) {
        task.value.star = 5;
    }else{}

}
</script>




<style scoped>


</style>
