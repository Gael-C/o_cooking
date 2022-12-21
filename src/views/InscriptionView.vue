<template>
    <div class="inscription">
        <div class="container">
            <form class="form">
                <h1 style="font-weight: bold;">Créer votre compte</h1>
                <Input label="prenom" id="prenom" nom="Prénom" placeholder="John"/>
                
                <Input label="nom" id="nom" nom="Nom" placeholder="Doe"/>

                <Input label="email" id="email" nom="E-mail" placeholder="johndoe@mail.com"/>

                <Input label="identifiant" id="identifiant" nom="Identifiant" placeholder="John"/>

                <Input label="password" id="password" nom="Mot de Passe"/>

                <Input label="password" id="password" nom="Confirmation Mot de Passe"/>

                <button type="submit" class="btn btn-primary">S'inscrire</button>
            </form>
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import Input from '@/components/Input.vue'

export default {
    name: 'InscriptionView',
    components: {
        Input
    }
}
</script>
  