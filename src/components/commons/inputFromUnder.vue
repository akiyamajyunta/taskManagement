<template>
    <div class="d-flex flex-row mt-4" style="width: 100%;" >
        <div class="d-flex flex-row  relative" style="width: 50%;"  >
                <v-date-input
                    v-if="task.dateDisplay"
                    label="日付"
                    prepend-inner-icon="$calendar"
                    variant="outlined"
                    v-model="task.date"
                    :append-icon="''"
                ></v-date-input>
        </div> 
        <div class="d-flex flex-row relative timeFelid" style="width: 50%;"   v-if="task.timeDisplay">
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
                    v-model="task.time"
                    ></v-time-picker>
                </v-menu>
            </v-text-field>
            <v-select
                class=""
                variant="outlined"
                label="助詞"
                width="40%"
                :items="particle"
                v-model="task.particle"
            ></v-select> <!--助詞 -->
        </div> 
    </div>
<v-textarea
    class="bg-white mx-auto"
    label="content"
    width="450"
    variant="outlined"
    v-model="task.content"
/>
</template>
<script setup lang="ts">
import { getTime, task } from '@/scripts/input';
import { VDateInput } from 'vuetify/labs/VDateInput';
import { VTimePicker } from 'vuetify/labs/VTimePicker';

const particle = ["から","まで"]

</script>


<style scoped>


</style>
