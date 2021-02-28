<template>
    <div class="container" id="contact">
        <form >
            <h2>{{ 'Rendez-vous'  }}</h2>        
            <input type="name" name="prenom" :placeholder="'Prénom' " required/>
            <input type="name" name="nom" :placeholder="'Nom' " required/>
            <input type="email" name="courriel" :placeholder="'Courriel' " required/>

            <label><h3>Raison du contact</h3></label><!---->
                <select name="selectDrop">
                    <option v-for="(item, i) in dropdown" :key="i"> {{ item }}</option> <!--Directive v-for qui traverse tous les éléments de la liste -->
                </select>
            <button type="submit" class="btn btn-dark">{{'submit' }}</button>    
        </form>
    </div>
</template>

<script>

export default {
    name: 'Contact',   
    data() {
        return {
            dropdown: [ //Dropdown des options dans le formulaire lié par v-for
                        "Informations",
                        "Compétences",
                        "Profession",
                        "Portfolio professionnel",
                        "Projet villes fictives",
                        "Projet SpotBéc",
                        "Projet paypall",
                    ]
        }
    },
}
</script>

<style>
#contact {
    padding: 20px;
    margin: 200px auto auto auto;
    background-color: #C6DFDA;
}

input,
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
</style>
<!--2 commentaires-->