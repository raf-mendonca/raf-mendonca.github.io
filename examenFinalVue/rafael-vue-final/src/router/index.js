import Vue from "vue";
import VueRouter from "vue-router";
// Importation des composants utilisées dans la route.
import Accueil from "../views/Accueil.vue";
import Contact from "../views/Contact.vue";
import Projet from "../views/Projet.vue";

Vue.use(VueRouter);
// Création de la route.
const routes = [
  {
    path: "/Accueil",
    name: "home",
    component: Accueil,
  },
  {
    path: "/Projet",
    name: "projet",
    component: Projet,
  },
  {
    path: "/Contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/Presentation",
    name: "presentation",
    component: () =>
      import(
        /* webpackChunkName: "Presentation" */ "../views/Presentation.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
// 2 commentaire
