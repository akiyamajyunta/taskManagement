<template>
<v-dialog v-model="inputForum" max-width="480">
        <v-card class="inputZoon mt-n16" :color="colors[colorTheme].head">
            <v-card  class="inputAria mx-auto">
                    <inputFromUpper/>
                    <inputFromUnder/>
            </v-card>
            <v-card class="buttonZone">
                <v-btn  icon="mdi-send" size="x-small" @click="submit"></v-btn>
                <v-btn  icon="mdi-calendar-month" size="x-small" @click="CalendarVisible()"></v-btn>
                <v-btn  icon="mdi-clock-time-five-outline" size="x-small" @click="DateVisible"></v-btn>
                <v-btn  icon="mdi-backspace-outline" size="x-small"  @click="reset()"></v-btn>
            </v-card>
        </v-card>
</v-dialog>

</template>
<script setup lang="ts">
import { inputForum ,reset, task} from '@/scripts/input';
import inputFromUpper from './inputFromUpper.vue';
import inputFromUnder from './inputFromUnder.vue';
import { submit } from '@/scripts/input';
import { colors } from '@/scripts/record';
import { colorTheme } from '@/scripts/record';
function CalendarVisible(){
    task.value.dateDisplay = !task.value.dateDisplay
}
function DateVisible(){
    task.value.timeDisplay = !task.value.timeDisplay
}


</script>
<style scoped>

.inputZoon{
    width:  500px;
    height: auto;
    position: fixed;
    top:-100px;
    z-index: 100;
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