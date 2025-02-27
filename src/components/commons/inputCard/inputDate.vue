<template>
    <div class="d-flex flex-row relative" 
            style="width: 50%;"  >
        <v-date-input
            v-if="task.dateDisplay"
            label="日付"
            prepend-inner-icon="$calendar"
            variant="outlined"
            v-model="task.date"
            :append-icon="''"
        ></v-date-input>
</div> 




</template>


<script setup lang="ts">
import { VDateInput } from 'vuetify/labs/VDateInput';
import { task } from '@/scripts/input';


</script>
<style scoped>




</style>