import Accueil from "../src/views/Accueil";
import { mount } from "@vue/test-utils";

describe("Test unitaire", () => {
  test("Accueil est un composant", () => {
    const wrapper = mount(Accueil);
    // vérifie si accueil exists
    expect(wrapper.find("Accueil")).toBeTruthy;
  });

  test("Vérifie si id content exists", () => {
    const wrapper = mount(Accueil);
    // vérifie si l'element #content est vide
    expect(wrapper.find("#content").isEmpty()).toBeTruthy;
  });
});
