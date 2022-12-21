<template>
    <div class="home">
      <h1 style="font-weight: bold;"> Se Connecter</h1>
      <Input label="email" id="email" nom="E-mail" placeholder="johndoe@mail.com"/>
     
      <Input label="password" id="password" nom="E-Mot de passe"/>

      <button type="submit" class="btn btn-primary">Se connecter</button>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Input from '@/components/Input.vue'
  
  export default {
    name: 'ConnecionView',
    components: {
      Input
    }
  }
  </script>
  