<template>
    <header class="AppHeader" :class="{ 'AppHeader-logged': loggedIn }">
        <div class="logo">
            <img class="logo-img" :src="logoSVG" alt="Logo">
            <div class="title">
                <p>10 minutes</p>
                <h1>O'Four</h1>
            </div>
        </div>

        <div class="user" v-if="loggedIn">
            <h2>John Doe</h2>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            // DOC : https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling
            logoSVG: require('@/assets/images/oven.svg'),
            loggedIn: false
        }
    }
}
</script>

<style scoped>
.AppHeader {
    display: flex;
    padding: 10px;
    justify-content: center;
    background-color: #f0f4ee;
    box-shadow: 0 0 5px rgb(118, 118, 118);
}

.AppHeader-logged {
    justify-content: space-between;
}

/*
scoped permet d'ajouter automatiquement des classes CSS
à notre code qui vont garantir que les règles ajoutées ne s'appliqueront
qu'à notre composant
*/

.logo {
    display: flex;
}

.logo-img {
    height: 40px;
    width: 40px;
}

.user {
    display: flex;
    align-items: center;
}

p {
    font-weight: 700;
    margin: 0;
}

h1 {
    font-weight: 300;
    margin: 0;
    font-size: 1.7em;
}
</style>