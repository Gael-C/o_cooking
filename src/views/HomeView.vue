<template>
  <div class="home">
    <div class="container">

      <Card titre="Gloubi Boulga" description="Un met savoureux"
        src="https://media.gettyimages.com/id/1201586372/fr/photo/soupe-de-citrouille-r%C3%B4tie-cr%C3%A9meuse-v%C3%A9g%C3%A9talienne.jpg?s=612x612&w=0&k=20&c=Tb3ULTw0iKfmeyKirDQHzbyEyBmnsJeG1zw3fj5Ao6w=" />

      <Card titre="Niglo grillé" description="Un rafraichissement divin."
        src="https://media.gettyimages.com/id/484574198/fr/photo/filet-de-porc-grill%C3%A9-fra%C3%AEchement-barbecue-avec-sauce-aux-herbes.jpg?s=612x612&w=0&k=20&c=OyWTY4DUnY6DzOaTEVV2tfk8rkeitskAK-F6M21J8j8=" />

      <Card titre="Enfant glacé" description="Parfait pour les journées d'été"
        src="https://media.gettyimages.com/id/646011015/fr/photo/close-up-of-strawberry-ice-cream.jpg?s=612x612&w=0&k=20&c=fHxO-Zth3W9eFZQtNRWV4lstefYZ32lHomdpXBbFrjw=" />

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
};
</script>

