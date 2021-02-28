// TRADUCTIONS, objet contenant les mots qui seront traduits.
export const TRADUCTIONS = {
  en: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Mail",
    nom: "",
    prenom: "",
    home: "Home",
    contact: "Contact",
    projet: "Project",
    presentation: "Presentation",
    projetPort:
      "Professional portfolio of projects carried out during the course.",
    projetMega:
      "Project about fictional cities, created by several authors during the twentieth century",
    projetSpot: "The spotfy quebecois",
    projetPaypall: "Paypall payments site",
    Achievements: "Achievements",
  },
  fr: {
    firstName: "Prénom",
    lastName: "Nom",
    email: "Courriel",
    nom: "",
    prenom: "",
    home: "Accueil",
    contact: "Contact",
    projet: "Projet",
    presentation: "Présentation",
    projetPort:
      "Portfolio professionnel des projets réalisées pendent le cours.",
    projetMega:
      "Projet sur les villes fictives, créé par plusieurs auteurs au XXe siècle",
    projetSpot: "Projet le spotfy québécois",
    projetPaypall: "Site web de paiment paypall",
    Achievements: "Réalisations",
  },
  // Ce filtre vérifie si un mot est disponible pour la traduction et renvoie sa valeur
  filters: {
    traduction: function(value, language) {
      // Si la langue est française
      if (language === "FR") {
        let keys = Object.keys(TRADUCTIONS.fr);
        for (let i = 0; i < keys.length; i++) {
          return TRADUCTIONS.fr[value];
        }
      } else if (language === "EN") {
        // Si la langue est englaise
        let keys = Object.keys(TRADUCTIONS.en);
        for (let i = 0; i < keys.length; i++) {
          return TRADUCTIONS.en[value];
        }
      }
    },
  },
};
// 4 commentaires
