<template>
    <footer v-copyright></footer><!--Copyright lié par la directive v-copyright-->
</template>

<script>
export default {
    name: 'Footer',
    directives: {
    copyright: {
      bind: function (el) {
        var date = new Date();
        var annee = date.getFullYear();
        let copyright = "<p>Copyright &copy;" + annee + " - <a href='https://github.com/raf-mendonca/raf-mendonca.github.io/blob/main/LICENSE' target='_blank'>Rafael Izaias De Mendonça</a> </p>"; //Lien pour la license MIT
        el.insertAdjacentHTML( 'beforeend', copyright );
      }
    }
  }

}
</script>
<!--Ne pas ajouter scoped pour que le style soit fonctionnel dans toute l'application -->
<style> 
    footer {
        width: 100%;
        background-color: #555;
        color: #f2f2f2;
        position: fixed;
        bottom: 0;
    }
   
</style>
<!--3 commentaires-->