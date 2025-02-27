<template>
    <v-card class="menuBar" color="while"  >
        <v-btn
            tile
            flat
            icon="mdi-menu" 
            size="large"
            @click="menubar=false">
        </v-btn>
        <ul class="nav-list mt-10">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn
                        v-bind="props"
                        class="sendOption"
                        flat
                        tile
                    > <v-icon left>mdi-palette</v-icon>
                    テーマカラーを選択
                </v-btn>
                </template>
                <v-list>
                    <v-list-item key="1" value="1" title="南極" @click="colorsChange(1)"/>
                    <v-list-item key="1" value="2" title="チョコミント" @click="colorsChange(2)"/>
                    <v-list-item key="1" value="3" title="京都" @click="colorsChange(3)"/>
                    <v-list-item key="1" value="4" title="アメリカ" @click="colorsChange(4)"/>
                    <v-list-item key="1" value="5" title="イタリア" @click="colorsChange(5)"/>
                    <v-list-item key="1" value="6" title="モノ" @click="colorsChange(6)"/>
                </v-list>
            </v-menu>
            <v-btn
                class="sendOption"
                flat
                tile
                @click="OpenColorVolume"
                ><v-icon>{{ CardSizeVolume ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
                </v-icon>カードの大きさを選択
            </v-btn>
            <v-card 
                    class="cardSizeVolume"  
                    flat tile  
                    v-if="CardSizeVolume">
                <div class="mt-5">
                    <input type="range" 
                            min="200" 
                            max="400" 
                            value="50"
                            class="w-80 mx-5"
                            v-model="CardSize "/>
                    <p class="flex text-center">
                        {{ CardSize }}
                    </p>
                </div>
            
            </v-card>
            <v-btn 
                class="sendOption"
                flat
                tile
                @click="allDelete">全てのデータを消す
            </v-btn>
        </ul>            
    </v-card>
</template>
<script setup lang="ts">

import { loadTasks,CardSize,CardSizeVolume,menubar } from '@/scripts/input';
import { colorsChange } from '@/scripts/record';


function OpenColorVolume(){

    CardSizeVolume.value =! CardSizeVolume.value
}

function allDelete(){
    if (window.confirm("全てのデータを消しますか？")) {
        localStorage.removeItem('TasksData');
        loadTasks()
}
}

</script>


<style scoped>
.menuBar{
    position: fixed;
    width: 250px;
    height: 100%;
    z-index: 1000;
    left:0%;
    border-right: black 5px double; 
}
.sendOption{

    width: 100%;
    border-bottom: black 1px solid; 
}
.cardSizeVolume{
    position: relative;
    height: 100px;
    border-bottom: black 1px solid; 

}
.center {
    width: fit-content;
    margin: auto;
    height: 10px;
}


</style>
