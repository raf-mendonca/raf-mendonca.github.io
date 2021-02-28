<template>
    <div class="container">
        <div id="projet" >
            <h1>Projets</h1>
            <h3>Découvrez tous les projets du portfolio. <a href="https://raphpro.ca"  target="_blank">Accedez le site.</a></h3>
        </div>
        <h2>{{ Projets }}</h2>
            <ul><!--Directive v-for qui traverse tous les éléments de la liste -->
                <li v-for="(projet, i) in projets" :key="i">{{ projet }} 
                </li>
            </ul>
    </div>   
</template>

<script>
export default {
  name: 'Projet',
  data() {
      return {
          projets: [
              "Portfolio",
              "MégaDystopiques",
              "SpotBec",
              "Paypall",
          ]
      }
  }
}
</script>

<style scoled>

#projet {
    padding: 20px;
    margin: 200px auto auto auto;
    background-color: #C6DFDA;
}

.card {
    max-width: 20rem;
}

ul, li {
    list-style: none;
}

</style>