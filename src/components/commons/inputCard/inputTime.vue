<template>
<div class="d-flex flex-row relative timeFelid" 
        style="width: 50%;" 
        v-if="task.timeDisplay">
        <v-text-field
            v-if="task.timeDisplay"
            label="時間"
            variant="outlined"
            width="60%"
            format="HH:mm"
            v-model="task.time"
            >
            <v-menu
                :close-on-content-click="false"
                activator="parent"
                transition="scale-transition"
                >
                <v-time-picker
                    v-model="task.time">
                </v-time-picker>
            </v-menu>
        </v-text-field>
        <v-select
            class=""
            variant="outlined"
            label="助詞"
            width="40%"
            :items="particle"
            v-model="task.particle"
        ></v-select> 助詞
</div>  



</template>


<script setup lang="ts">
import { task } from '@/scripts/input';
import { VTimePicker } from 'vuetify/labs/VTimePicker';

const particle = ["から","まで"]


</script>
<style scoped>




</style>