<template>
  <div class="home">
    <div class="container">

      <Card v-for="recipes in $store.state.recipes" :key="recipes.id" :id="recipes.id"
         :name="recipes.name" />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "HomeView",
  components: {
    Card,
  },
  mounted() {
    this.$store.dispatch('getRecipes');
  }
};
</script>

