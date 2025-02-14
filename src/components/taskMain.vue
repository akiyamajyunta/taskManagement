<template>
  <div class="container">
      <div>
          <!-- <v-text-field  type="text" class="textBox mx-auto" label="タイトル" v-model="title"></v-text-field>
          <v-text-field  type="text"  class="textBox mx-auto" label="よてい" v-model="text"></v-text-field> -->
      </div>
      <!-- <v-btn @click="set()">保存</v-btn> -->
      <v-card>
          <!-- <p>{{tag}}</p>
          <p>{{sentence}}</p> -->
      </v-card>
      <textCard/>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
// import { title, text, id, tag, sentence} from './constant';
// import { set, getDate, getId} from './record';
import textCard from '@/commons/textCard.vue';


// getId()
// getDate()


//@vue/compiler-dom 



</script>


<style scoped>
.textBox{
  width: 200px;
  height: 30px;
  margin: 30px;
  background-color: rgb(255, 255, 255);
  border: 3px solid #ffffff;

}


</style>
