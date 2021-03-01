import Footer from "../src/views/Footer";
import { mount } from "@vue/test-utils";

describe("Vérifie l'affichage du composant", () => {
  test("Footer est un component", () => {
    const wrapper = mount(Footer);
    console.log(wrapper);
  });

  // Verifie si footer contiens des 'router-link' c'est faux!
  test("Footer", () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.contains("router-link")).toBe(false);
  });
});
