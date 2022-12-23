<template>
    <h1>{{ recipe.name }}</h1>
    <p> {{ recipe.description }}</p>
    <p> {{ recipe?.user?.username }}</p>
</template>


<script>
export default {

    data() {
        return {
            recipe: {}
        }
    },
    async mounted() {
        const res = await fetch(`https://www.pierrebriffaux.com/recipes/${this.$route.params.id}`);
        const recipes = await res.json();
        this.recipe = recipes;
    }
}

</script>