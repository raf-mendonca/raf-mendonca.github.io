<template>
<!--
 <div id="header">  
    <nav>
        <router-link to="/" >Accueil</router-link> 
        <router-link to="/Projet" >Projets</router-link>         
        <router-link to="/Contact" >Contact</router-link> 
        <router-link to="/Presentation" >Présentation</router-link>  
    </nav>   
  </div>
-->

  <nav>
    <ul id="nav" class="text-white">
      <li v-for="item in menuItems" v-bind:key="item.id">  <!--Directve v-for qui traverse tous les éléments de la liste menuItems / v-bind liera chaque élément à un identifiant-->    
        <router-link :to="item.path">{{ item.title | traduction(language) }}</router-link> <!-- item.title | traduction ira traduire le title de chaque element lorsque choisi pour l:utilisateur -->     
          </li>
          <li>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitches"
                v-on:click="toggleLanguage">
              <label class="custom-control-label" for="customSwitches"><span class="slider round"></span></label>
              <h4>{{language}}</h4>
            </div>
          </li>          
        </ul>
    </nav>
</template>

<script>
import { TRADUCTIONS }  from "../mixins/mixinTraducteur"; // Importe le mixin
export default {
    mixins: [TRADUCTIONS], //Appele l'objet Traduction avec la liste des mots traduits
    name:'Header',
    methods: {
      // ToggleLanguage methode pour changer la langue dans les elements du header
        toggleLanguage() {
            if(this.language === "EN"){
                this.language = "FR"
            }
            else{
                this.language= "EN"
            }
        },
    },
    data(){
        return {
            language: "EN",
            menuItems: [ //Ajout du path de navigation dans le header
                    {
                        id:0,
                        path: "/Accueil",//nom du composant affiche sur header
                        title: "home"// nom du component à traduire
                    },
                    {
                        id: 1,
                        path: "/Projet", 
                        title: "projet"
                    },
                    {
                        id: 2,
                        path: "/Contact",
                        title: "contact"
                    },
                    {
                        id: 3,
                        path: "/Presentation",
                        title: "presentation",
                    },
                ]
            }
        }
}
</script>
<!--Ne pas ajouter scoped pour que le style soit fonctionnel dans toute l'application -->
<style> 
body, html {
  margin: 0;
  background-color: #C6DFDA;
}


nav {
  width: 100%; 
  position: fixed;
  top: 0;
  margin: 0;
  background-color: #555; 
  overflow: auto; 
}

nav a {
  float: left; 
  text-align: center; 
  width: 10%;
  padding: 12px 0; 
  transition: all 0.3s ease;
  color: white; 
  font-size: 36px; 
  text-decoration: none; 
}

#nav li a {
  display: block;
  color: white;
  text-decoration: none;
}
nav > * {
  flex: 1;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
} 
</style>