<template>
  <div id="app"> 
    <Header :language="this.language"/>   
    <router-view />
    <Footer/> 
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
    name: "app",
    data: function(){
      return{
        language: "FR",
      }
    },
    components: {
      Header,
      Footer
  }  
}
</script>

<style>
body, html {
  margin: 0;
  background-color: #C6DFDA;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  width: 100%; /* Full-width */
        position: fixed;
        top: 0;
        margin: 0;
        background-color: #555; /* Dark-grey background */
        overflow: auto; /* Overflow due to float */
}

</style>
