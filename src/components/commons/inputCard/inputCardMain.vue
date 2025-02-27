<template>
<v-dialog v-model="inputForum" 
                max-width="480">
        <v-card class="inputZoon mt-n16" 
                :color="colors[colorTheme].head">
            <v-card  class="inputAria mx-auto">
                    <inputTitle/>
                    <inputStar/>
                    <div class="d-flex flex-row mt-4" 
                        style="width: 100%;" >
                        <inputDate/>
                        <inputTime/>
                    </div>
                    <inputTextarea/>
            </v-card>
        <InputButton/>
        </v-card>
</v-dialog>

</template>
<script setup lang="ts">
import { inputForum } from '@/scripts/input';
import { colors ,colorTheme} from '@/scripts/record';
import InputButton from './inputButton.vue';
import inputTime from './inputTime.vue';
import inputDate from './inputDate.vue';
import inputTextarea from './inputTextarea.vue';
import inputStar from './inputStar.vue';
import inputTitle from './inputTitle.vue';

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
}

</style>