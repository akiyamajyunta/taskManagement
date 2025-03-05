<template>
<div class="d-flex flex-row relative timeFelid" 
        style="width: 50%;" 
        v-if="task.timeDisplay">
        <v-text-field
            v-if="task.timeDisplay"
            variant="outlined"
            width="60%"
            v-model="task.time"
            >
            <v-menu
                :close-on-content-click="false"
                activator="parent"
                label="時間"
                transition="scale-transition"
                >
                <v-time-picker
                format="24hr"
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