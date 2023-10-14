<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';
import SearchBar from './components/partials/SearchBar.vue';


export default {
  components:{
   Header,
   SearchBar,
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
   axios.get(store.apiUrl ,
    {
    params:{
      archetype:store.archetypeToSearch
    }
   }
   )
  
   .then(res =>{
    store.cardsList = res.data.data;
    console.log(store.cardsList); 

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

   <SearchBar @startSearch="getApi" />
  
    <Main />

  </body>
</template>



<style lang="scss">

@use './scss/main.scss';


body{
 background-color: rgb(205, 156, 71);;
}
</style>