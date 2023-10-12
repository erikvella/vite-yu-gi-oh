<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';

export default {
  components:{
   Header,
   Main
  },
name : 'App',
data(){
  return{
    store
  }
},
methods:{
  getApi(){
   axios.get(store.apiUrl)
   .then(res =>{
    store.cardsList = res.data.data;
    console.log(store.cardsList); 
    store.imageList = res.data.data.card_images;
    console.log(store.imageList);
   })
   .catch(err =>{
    console.log(err);
   })
  },
},
mounted(){
  this.getApi();
}
}
</script>


<template>
  <body>
    
    <Header class="text-center p-3" />
  
    <Main />

  </body>
</template>



<style lang="scss">

@use './scss/main.scss';


body{
 background-color: rgb(205, 156, 71);;
}
</style>