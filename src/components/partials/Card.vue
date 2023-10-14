<script>
export default {
name: 'Card',
props:{
  name: String,
  archetype: String,
  image: String,
}
}
</script>

<template>
  <div class="col-2 mx-3 mb-3  debug">

      <img :src="image" alt="image">
    
    <h5 class="text-center my-3 white-text">{{ name }}</h5>
    <h5 class="text-center my-3 ">{{ archetype }}</h5>
  </div>
</template>



<style lang="scss" scoped>

.col-2{
  background-color: rgb(205, 156, 71);
}
img{
  width: 100%;
}
.white-text{
  color: white;
}

.debug{
  border: 1px solid red;
}

</style>