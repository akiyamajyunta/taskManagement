<template>
    <v-container class="relative mt-n10 flex justify-center">
        <v-card :style="{width: CardSize+'px'}" 
                :color="colors[colorTheme].head"  
                class="flex mx-auto mt-3" 
                v-for="t in tasks" :key="t.title" > 
            <v-card :style="{width: 95+'%',height:90+'%'}" 
                    class="mx-auto mt-1" 
                    :color="colors[colorTheme].MainCard"  
                    v-if="movingCardJuge(props.taskType,t.position)">
                <template v-slot:prepend>
                    <CardAvatar :forTasks="[t]"/>
                    <div>
                        <CardTitle :forTasks="[t]"/>
                        <CardStar :forTasks="[t]"/>
                        </div>
                </template>
                <CardTimeDate  :forTasks="[t]"/>
                <div class="box">
                </div> <!--空間用 -->
                <div  v-if="t.contentDisplay" class="mt-n4">
                    <v-card-text
                        :style="{fontSize: CardSize * 0.25 +'%'}" 
                        >{{ t.content }}
                    </v-card-text>
                </div>
                <CardButton :forTasks="[t]"/>
            </v-card>
        </v-card>
    </v-container>
</template>


<script setup lang="ts">

import { tasks,taskAction, CardSize } from '@/scripts/input';
import { colors,colorTheme } from '@/scripts/record';
import CardButton from './CardButton.vue';
import CardTimeDate from './CradTimeDate.vue';
import CardStar from './CardStar.vue';
import CardTitle from './CardTitle.vue';
import CardAvatar from './CardAvatar.vue';
const props = defineProps<{taskType:string}>();


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
