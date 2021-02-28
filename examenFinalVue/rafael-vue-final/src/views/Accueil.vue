
<template>
  <div id="Accueil">  
    <div class="content img">
      <img class="resize" src="https://images.freeimages.com/images/large-previews/b77/down-home-1228563.jpg"/>
    </div>
    <div v-if="!connecte">
      <h3>Vous n'êtes pas connecté...</h3>
    </div> 
    <div v-if="connecte"> <!--Simulation d'affichage ou de connexion.-->
      <h1>Bienvenue Rafael</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at elementum turpis, id pharetra arcu. Aenean egestas faucibus felis, suscipit tempus felis condimentum consequat. Sed vel dui turpis. Nam vitae dui vitae mi lacinia congue. Donec et magna nec odio iaculis euismod. Sed sit amet pharetra ante. Suspendisse tincidunt pulvinar ligula, pellentesque porta odio sodales sed. Donec iaculis nibh nec lectus pellentesque, vel euismod metus lobortis. Sed tincidunt tortor eget turpis cursus luctus. Mauris vestibulum rhoncus risus, id vulputate orci rutrum nec. Sed eleifend mi sed felis congue pharetra. Integer volutpat dapibus elit, vel feugiat mauris euismod a. Duis eget arcu sed ligula aliquam vestibulum.</p> 
    </div>
  </div>
</template>


<script>
export default {
  name: 'Accueil',
    data() {
        return {
            connecte: true, // Lorsqu'on change la condiction booleanne à false la contenue n'est plus affichée.
        }
    },
}
</script>

<!-- Ajoutez l'attribut "scoped" pour limiter le CSS à ce composant uniquement -->
<style scoped>
  #accueil {
    padding: 20px;
    margin: 200px auto auto auto;
    background-color: #C6DFDA;
  }
   h1, h3 {
    text-align: center;
  }

  .img,
  .title {
    text-align: center;
  }
  img.resize {
    max-width: 50%;
    max-height: 50%;
}
</style>
<!--3 commentaires -->