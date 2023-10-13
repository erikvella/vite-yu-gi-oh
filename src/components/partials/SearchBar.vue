<script>
export default {
name: 'SearchBar'
}
</script>



<template>
  <div class="d-flex justify-content-center my-5">
    <select class="form-select" aria-label="Default select example">
  <option selected>Seleziona il tipo di mostro</option>
  <option value="Alien">Alien</option>
  <option value="Insect">Insect</option>
  <option value="Best">Beast</option>
</select>
  </div>

</template>


<style lang="scss" scoped>
.form-select{
  width: 300px;

}
</style>