<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="mb-3">
      <label :for="label" class="form-label">{{ nom }} </label>
      <input v-if="id === 'email'" type="email" class="form-control" :id="id" aria-describedby="emailHelp" :placeholder="placeholder">
      <input v-else-if="id === 'password'" type="password" class="form-control" :id="id" aria-describedby="emailHelp">
      <input v-else type="text" class="form-control" :id="id" :placeholder="placeholder">

      

    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Input',
  props: {
    for: String,
    id: String,
    nom: String,
    placeholder : String
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

label {
  font-weight: bold;
}

input {
  background-color: #f0f4ee;
}
</style>
  