<template>
    <div class="flex relative mt-15">
        <v-card 
            :style="{width:300+'px', left:0+'%'}" 
                v-for="t in tasks" :key="t.title" class="flex relative mt-5">
                <v-container class="bg-light-green-accent-3" width="99%">
                    <v-card  class="my-n3 bg-blue ">
                        <v-btn  class="delete  my-2" icon="mdi-delete" size="x-small" @click="deletes(t.id)" >
                        </v-btn>
                    
                        <div class="d-flex flex-row relative">

                            
                            <v-card-title class="titleField"  variant="underlined" >
                                {{t.title}}
                            </v-card-title>
                            <v-img
                            :src="photoCollection[t.action]"
                            >
                            </v-img>
                            <!-- <div class="testBox mt-1">  -->
                                <!-- <img :src="photoCollection[t.action]" alt="Image">  -->
                            <!-- </div>  -->
                            <!-- <v-img :src="photoCollection[t.action]" class="flex relative ly-10"> 
                            </v-img> -->
                            <!-- <div class="box"></div> -->
                            <!-- <img class="box" :src="photoCollection[t.action]" /> -->
                            <!-- <v-img :src="photoCollection[t.action]"> 
                            </v-img>  -->
                        </div>
                        <p v-if="t.dateDisplay">{{getData(t.date) }}</p>  
                            <v-card-text class="textField" v-if="true" >  
                                <p>{{t.content}}</p>
                            </v-card-text>    
                    </v-card>
                </v-container>
        </v-card>
    </div>
</template>

<style  scoped>

.titleField{
    background-color: rgb(0, 255, 255);
    width: 80%;
    position: relative;
    left:10%;
    font-size: 15px;
    border-bottom:  double 1px  rgb(0, 0, 0); 
}
.textField{
    background-color: rgb(8, 255, 255);
    width: 100%;
    height: 10%;
    font-size: 10px;
    /* border: 1px solid rgb(0, 0, 0); */
}

.delete{
    position: absolute;
    display: flex;
    left:90%;
    width: 8%;
    height: auto; 
    aspect-ratio:1; 
    z-index: 10;
    background-color: rgba(117, 255, 193, 0);
}
.testBox{
    position: absolute;
    display: flex;
    left:1%;
    top:6%;
    width: 9%;
    height: auto; 
    aspect-ratio:1; 
    z-index: 10;
    border: 2px solid #000000;    
    background-color: rgb(248, 3, 3);
    border-radius: 1px; 
}


.testBox img{

    width: 90%;
    height: 90%;
    margin: auto;
}

</style>

  
<script setup lang="ts">
import { tasks,loadTasks } from '@/scripts/input';
import { photoCollection } from '@/scripts/imgs';
import { deleteTask } from '@/scripts/record';


function getData(data: Date){
    const calenders  = new Date(data);
    const year = calenders.getFullYear();
    const month = calenders.getMonth() + 1;
    const day = calenders.getDate();
        return  year +"年"+month + "月" + day + "日"
}
 function deletes(id:number){
    deleteTask(id)
    loadTasks()
}//データを消す


</script>


