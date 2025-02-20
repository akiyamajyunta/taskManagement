<template>
        <v-container class="relative  mt-10">
            <v-card :style="{width: cardSize+'px'}"  class="flex bg-black" elevation="4">
                <v-card :style="{width: 95+'%',height:90+'%'}" class="bg-white mx-auto mt-1">
                    <template v-slot:prepend>
                        <v-avatar 
                            tile
                            border="info md"
                            class="ml-n3 mt-n2"
                            :size=" cardSize *0.2 +'px'"
                            >
                            <v-img
                                alt="John"
                                class="border-thin bg-black" 
                                src="https://cdn.vuetifyjs.com/images/john.png"
                            ></v-img>
                        </v-avatar>
                        <div>
                            <v-card  class="mt-0 ml-1 relative"
                                    color="grey-lighten-2"
                                    :style="{width: cardSize * 0.7 +'px',height: cardSize * 0.1 +'px'}"
                            >
                                <v-card-title 
                                    class="titleField mt-1"  
                                    :style="{fontSize: cardSize * 0.35 +'%'}"  
                                    >久留米駅に集合
                                </v-card-title>
                            </v-card>
                                <div >                
                                    <v-icon 
                                    v-for="n in star" :key="n"
                                    icon="mdi-star"
                                    color="yellow"
                                    class="mx-1"
                                    :style="{fontSize: cardSize * 0.5 +'%'}"  
                                    >
                                    </v-icon>
                                </div>   
                        </div>
                    </template>
                        <div>
                            <v-card-title class="timeFelid mt-n4 ml-2"  
                                            variant="underlined"   
                                            :style="{fontSize: cardSize * 0.3 +'%'}"  
                                            v-if="true">
                                            <v-icon 
                                            left>mdi-calendar-text</v-icon>
                                <a>2025年11月22日</a>
                            </v-card-title> 
                        </div>
                        <div>
                            <v-card-title class="timeFelid mt-n4 ml-2"  
                                            variant="underlined"
                                            :style="{fontSize: cardSize * 0.3 +'%'}"    
                                            v-if="true">
                                            <v-icon 
                                            left>mdi-clock-time-four-outline</v-icon>
                                <a>7時22分</a><a>まで</a>
                            </v-card-title> 
                        </div>
                    <div  v-if="false" class="mt-n6">
                        <v-card-text
                        :style="{fontSize: cardSize * 0.25 +'%'}" 
                        >
                            祇園精舎の鐘の声、諸行無常の響きあり。
                            娑羅双樹の花の色、盛者必衰の理をあらわす。
                            おごれる人も久しからず、唯、春の夜の夢のごとし。
                            猛きものもついにはほろびぬ、
                            偏に風の前の塵に同じ。
                        </v-card-text>
                    </div>
                <v-card class="bottomOption bg-green">
                        <v-icon
                            :style="{fontSize: cardSize * 0.4 +'%'}" 
                            @click="xxx"
                            >{{ kawatte ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                        </v-icon>
                            <v-icon
                            :style="{fontSize: cardSize * 0.4 +'%'}" 
                                icon="mdi-arrow-left-bold ml-3"
                                >
                            </v-icon>
                            
                            <v-icon
                            :style="{fontSize: cardSize * 0.4 +'%'}" 
                                icon="mdi-arrow-right-bold ml-3"
                            
                                >
                            </v-icon>
                        <v-icon
                        :style="{fontSize: cardSize * 0.4 +'%'}" 
                            icon="mdi-delete ml-10"
                            @click="kesu"
                            >
                        </v-icon>
                    
                </v-card>          
                </v-card>
            </v-card>
            
        </v-container>
</template>


<script setup lang="ts">
import { ref } from 'vue';
const  cardSize= ref<number>(300)
const star = ref<number>(5)
const kawatte = ref<boolean>(true)

function xxx(){
    alert("arawareru")
    kawatte.value  = !kawatte.value 
}

function kesu(){
    alert("消しました")
}
//30- 
</script>



<style  scoped>
.xyz{

    background-color: black;
}
.titleField{
    background-color: rgba(0, 255, 255, 0);
    color: black;
    width: 130%;
    font-weight: bold;
    position: relative;
}


</style>
