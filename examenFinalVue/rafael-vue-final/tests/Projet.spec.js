//import { shallowMount } from '@vue/test-utils';
import Projet from "@/views/Projet";
import { mount } from "@vue/test-utils";

describe("Test unitaire", () => {
  test("Cherche un objet projets dans ce composant", () => {
    const wrapper = mount(Projet);
    // Vérifie si l'objet projets exists.
    expect(wrapper.find("projets")).toBeTruthy;
  });

  test("Select vide?", () => {
    const wrapper = mount(Projet);
    // Vérifie si l'objet projets est vide, c'est faux.
    expect(wrapper.find("projets").isEmpty()).toBeTruthy;
  });
});
