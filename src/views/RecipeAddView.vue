<template>
    <div class="recipe">

      <form>
      <h1 style="font-weight: bold;">Créer une recette</h1>
      <Input label="titre" id="titre" nom="Titre" placeholder="Titre de la recette"/>

      <Input label="cuisson" id="cuisson" nom="Temps de cuisson" placeholder="10 minutes"/>

      <Input label="cout" id="cout" nom="Coût par personne (€)" placeholder="1€"/>

      <Textarea id="recette" forLabel="recette" nom="Recette" placeholder="Le texte de la recette" />

      <button type="submit" class="btn btn-primary">Sauvegarder</button>

    </form>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Input from '@/components/Input.vue'
  import Textarea from '@/components/Textarea.vue'
  
  export default {
    name: 'RecipeAddView',
    components: {
      Input,
      Textarea
    }
  }
  </script>
  