// Traduction utilisant Filtre V2

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
  },
  filters: {
    traduction: function(value, language) {
      // if language is FR
      if (language === "FR") {
        let keys = Object.keys(TRADUCTIONS.fr);
        for (let i = 0; i < keys.length; i++) {
          return TRADUCTIONS.fr[value];
        }
      } else if (language === "EN") {
        /* if language is EN */
        let keys = Object.keys(TRADUCTIONS.en);
        for (let i = 0; i < keys.length; i++) {
          return TRADUCTIONS.en[value];
        }
      }
    },
  },
};
