<script>
import { store } from '../../data/store';
export default {
name: 'SearchBar',
data(){
  return{
    store
  }
}
}
</script>



<template>
  <div class="d-flex justify-content-center my-5">
    <select v-model="store.archetypeToSearch"
  
    class="form-select" aria-label="Default select example">
  <option selected value="">Seleziona l'archetipo</option>
  <option value="Alien">Alien</option>
  <option value="Insect">Insect</option>
  <option value="Beast">Beast</option>
</select>

<button @click="$emit('startSearch')"
class="btn btn-secondary mx-5">Start</button>
  </div>

</template>


<style lang="scss" scoped>
.form-select{
  width: 300px;

}
</style>