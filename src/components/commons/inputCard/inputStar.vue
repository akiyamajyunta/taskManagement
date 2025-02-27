<template>
    <div class="mt-n5 mx-7">
        <div>
            <div class="ml-10 d-inline "> 
                <v-icon icon="mdi-menu-left" 
                        class="mt-2  flex absolute" 
                        @click="taskRank(-1)">
                </v-icon>  
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
                <v-icon icon="mdi-menu-right" 
                        class="mt-1  flex absolute"  
                        @click="taskRank(1)">
                </v-icon> 
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