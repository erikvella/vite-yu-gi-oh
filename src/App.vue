<script>
import { store } from './data/store';
export default {
name : 'App',
data(){
  return{
    store
  }
}
}
</script>


<template>
  <h1>{{ store.titleApp }}</h1>
</template>



<style lang="scss">

@use './scss/main.scss';

</style>