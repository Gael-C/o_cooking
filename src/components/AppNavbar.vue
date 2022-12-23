<template>
    <nav class="AppNavbar">
        <ul class="links">
            <li>
                <router-link :to="{ name: 'home' }">
                    Liste des recettes
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'recipe-add' }">
                    Ajouter une recette
                </router-link>
            </li>
        </ul>
    </nav> 
</template>

<style lang="scss">
@import "../assets/styles/variables.scss";

.AppNavbar {
    padding: 15px;
    background-color: $bgColor;
    box-shadow: 0 0 5px rgb(118, 118, 118);

    ul {
        display: flex;
        justify-content: space-around;
    }
}
</style>