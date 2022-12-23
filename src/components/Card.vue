<template>
  <div class="card">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="card col-12" style="width: 13rem">
        <img src='https://picsum.photos/300/200' class="card-img-top" alt="..." />
        <div class="card-body">
          <router-link :to="{ name: 'recipe', params: { id } }">
            <h5 class="card-title">{{ name }}</h5>
          </router-link>
          <p class="card-text">Par {{ username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
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

.row {
  margin-bottom: 20px;
}

.card.col-12 {
  background-color: #f0f4ee;
}

.card-title {
  font-weight: bold;
}
</style>
