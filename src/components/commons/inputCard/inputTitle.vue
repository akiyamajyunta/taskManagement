<template>
    <div class="d-flex flex-row mt-3">
        <v-select
            class=""
            variant="outlined"
            label="Icon"
            hight="100%"
            width="30%"
            :items="lists"
            item-title="name"
            v-model="task.action"
        >
            <template v-slot:item="{ props, item }" >
                <v-list-item
                    v-bind="props"> 
                    <v-img
                    class="mt-n5 ml-15"
                    :src="item.raw.photo"
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
            v-model="task.title"
            />
    </div>     
</template>


<script setup lang="ts">
import { task } from '@/scripts/input';
import { lists } from '@/scripts/imgs';



</script>
<style scoped>




</style>