<template>
<v-dialog v-model="aaaaa" max-width="480">
        <v-card class="inputZoon mt-n16" v-if="true">
            <v-card  class="inputAria mx-auto">
                <div class="d-flex flex-row">
                    <v-select
                        class=""
                        variant="outlined"
                        label="Icon"
                        hight="100%"
                        width="30%"
                        :items="lists"
                        item-title="name"
                    >
                        <template v-slot:item="{ props, item }" >
                            <v-list-item
                                v-bind="props"> 
                            <v-img
                            class="mt-n5 ml-10"
                            :src="item.raw.department"
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
                        />
                </div>     
            <div>
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
                            v-for="n in Rank" :key="n"
                            icon="mdi-star"
                            color="yellow"
                            class="mx-3"
                        >
                        </v-icon >
                    </div>
                </div>    <!-- 本物の星 -->
            </div>
        <div class="d-flex flex-row" style="width: 100%;" >
            <div class="d-flex flex-row  relative" style="width: 50%;"  >
                <v-text-field
                    label="日付"
                    variant="outlined"
                    width="50%"
                >
                    <v-menu
                        :close-on-content-click="false"
                        activator="parent"
                        transition="scale-transition"
                    >
                        <v-date-picker></v-date-picker>
                    </v-menu>
                </v-text-field>
            </div> 
            <div class="d-flex flex-row relative timeFelid" style="width: 50%;">
                <v-text-field
                    label="時間"
                    variant="outlined"
                    width="60%"
                >
                    <v-menu
                        :close-on-content-click="false"
                        activator="parent"
                        transition="scale-transition"
                    >
                        <v-time-picker
                        
                        ></v-time-picker>
                    </v-menu>
                </v-text-field>
                <v-select
                    class=""
                    variant="outlined"
                    label="Icon"
                    width="40%"
                    :items=" particle"
                    item-title="[aa]"
                ></v-select>
            </div> 
        </div>
        <v-textarea
        class="bg-white mx-auto"
        label="content"
        width="450"
        variant="outlined"
    />
    </v-card>
            <v-card class="buttonZone">
                <v-btn  icon="mdi-send" size="x-small"></v-btn>
                <v-btn  icon="mdi-calendar-month" size="x-small"></v-btn>
                <v-btn  icon="mdi-clock-time-five-outline" size="x-small"></v-btn>
                <v-btn  icon="mdi-backspace-outline" size="x-small"></v-btn>
            </v-card>
        </v-card>
</v-dialog>

</template>
<script setup lang="ts">
import { ref } from 'vue';
import { VDateInput } from 'vuetify/labs/VDateInput'
import { VTimePicker } from 'vuetify/labs/VTimePicker'





import { ImgsCollection } from '@/scripts/imgs';

const aaaaa = true
const Rank = ref<number>(3)




function taskRank(taskRank:number){
    Rank.value = Rank.value + taskRank 
 if (Rank.value < 1) {
    Rank.value = 1;
}else if  (Rank.value > 5) {
    Rank.value = 5;
}else{}

}

const items = ['銀行', 'ごはん', 'ゲーム', 'ガーデン', '病院', '仕事', '探す',
                    'ペット', '学校', '買い物', '交通', 'その他'];
const lists= ref([
    {
        name: '銀行',
        department: ImgsCollection[0],
        },
        {
        name: '発見',
        department: ImgsCollection[1],
    },
    {
        name: '散歩',
        department: ImgsCollection[2],
    },



])
const particle = ["から","まで"]






</script>
<style scoped>

.inputZoon{
    width:  500px;
    height: auto;
    position: fixed;
    top:-100px;
    z-index: 100;
    background-color: rgb(74, 255, 14);
}

.inputAria{
    width: 95%;
    height: 99%;
    margin: 1%;
    z-index: 100;
    background-color: rgb(255, 255, 255);
}


.buttonZone{
    width:  100%;
    height: 30px;
    z-index: 100;
    background-color: rgb(255, 227, 14);
}

.trueStar{
    position: relative;
    top:-100px;
    display: flex;
}
.timeFelid{
    position: relative;
    
}
.zzz{
    width: 30%;
}
</style>