<script>
import { store } from '../data/store';
import Card from './partials/Card.vue';
import SearchBar from './partials/SearchBar.vue';
export default {
name:'Main',

components:{
 Card,
 SearchBar
},

data(){
  return{
    store
  }
},
mounted(){
 console.log(store.cardsList);
 
}
}
</script>

<template>
  <div>
    <SearchBar />
  </div>
  
 <div class="container my-5 ">
  
  <div class="row justify-content-between">
    <div class="col-12 d-flex ">
      <h5>risultati trovati??</h5>
    </div>
     <Card 
     v-for="card in store.cardsList"
     :key="card.id"
     :name="card.name"
     :archetype="card.archetype"
     :image="card.card_images[0].image_url"
     />
     
  </div>

 </div>
  
</template>



<style lang="scss" scoped>

.row{
  flex-wrap: wrap;
}
.container{
  background-color: white;
  min-height: 100vh;
}

.col-12{
  background-color: black;
  color: white;
  height: 100px;
  
}

h5{
  margin-top: 40px;
}
</style>