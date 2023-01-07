<template>
    <h1>{{ $store.state.recipes.name }}</h1>
    <p> {{  $store.state.recipes?.description }}</p>
    <p> {{  $store.state.recipes?.user?.username }}</p>
</template>


<script>
export default {

    async mounted() {
       this.$store.dispatch('getOneRecipe')
    }
}

</script>