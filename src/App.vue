<script>
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';
import SearchBar from './components/partials/SearchBar.vue';
import Loader from './components/partials/Loader.vue';


export default {
  components:{
   Header,
   SearchBar,
   Loader,
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
    store.isLoading = true,
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
    store.isLoading = false;
    
   })
   .catch(err =>{
    console.log(err);
    store.isLoading = false;
    // ciclo di tutti gli archetipi
    store.cardsList.forEach(type => {
      if(!store.archetypeList.includes(type.archetype)){
        store.archetypeList.push(type.archetype)
      }
    })
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
    <Loader v-if="store.isLoading" />
    <Main v-else />

  </body>
</template>



<style lang="scss">

@use './scss/main.scss';


body{
 background-color: rgb(205, 156, 71);;
}
</style>