<template>
    <!-- このインプットフォームは使いません -->
    <v-card class="inputZoon" v-if="inputForum">
        <div class="lsd">
            <v-btn  icon="mdi-send" size="x-small"  @click="submit"></v-btn>
            <v-btn  icon="mdi-calendar-month" size="x-small"  @click="CalendarReset()"></v-btn>
            <v-btn  icon="mdi-backspace-outline" size="x-small"  @click="reset()"></v-btn>
        </div>
            <div class="InputAria mx-auto mt-1">
                <div class="d-flex flex-row">
                    <v-select
                        class="bg-white"
                        label="Icon"
                        width="150"
                        v-model="task.action"
                        :items="items"
                    >
                    </v-select>

                    <v-text-field
                        class="bg-white"
                        label="title"
                        width="600"
                        variant="underlined"
                        v-model="task.title"
                        />
                </div>                            
                <v-date-input 
                v-if="task.dateDisplay "
                label="Date input"
                class="bg-white"
                width="450"
                hight="100"
                type="date"
                v-model="task.date"
                >
                </v-date-input>
                
                <v-textarea
                    class="bg-white"
                    label="content"
                    width="450"
                    v-model="task.content"
                />
            </div>
    </v-card>   
</template>


<script setup lang="ts">
import { reset,inputForum ,task ,keepID ,loadTasks} from '@/scripts/input';
import { setTask } from '@/scripts/record';

import { VDateInput } from 'vuetify/labs/VDateInput'


const items = ['銀行', 'ごはん', 'ゲーム', 'ガーデン', '病院', '仕事', '探す',
                    'ペット', '学校', '買い物', '交通', 'その他'];
const icons = ['mdi-bank', 'mdi-dog-side', 'mdi-controller', 'mdi-home', 'mdi-hospital-box-outline', 
                        'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home', 'mdi-home']


function CalendarReset(){
    task.value.dateDisplay = !task.value.dateDisplay
}

 function submit() {
    task.value.id = keepID.value
    setTask(task.value);
    loadTasks()
    inputForum.value = false;
    reset()
}//taskの追加



</script>



<style  scoped>
.inputZoon{
    width:  500px ;
    top:22%;
    height: 350px;
    position: fixed;
    z-index: 100;
    display: flex;
    background-color: rgb(216, 216, 216);

}
.InputAria{
    width:  90%;
    height: 80%;
}
.lsd{
    background-color: chartreuse;
    position: absolute;
    top: 90%;
    width: 100%;
}

</style>
