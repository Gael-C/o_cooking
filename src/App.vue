<template>
    <router-view/>

    <nav class="navbar-fixed navbar-expand">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="link">Liste des recettes</router-link> 
        <router-link to="/inscription" class="link">Inscription</router-link> 
        <router-link to="/connexion" class="link">Connexion</router-link> 

      </div>
    </div>
  </div>
</nav>
 

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.link{
  margin-left: 10px;
  margin-right: 20px;
}
</style>
