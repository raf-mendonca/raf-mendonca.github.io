import Contact from "../src/views/Contact";
import { mount } from "@vue/test-utils";

describe("Test unitaire", () => {
  test("Cherche un objet projets dans ce composant", () => {
    const wrapper = mount(Contact);
    // vérifie si l'element dropdown exists
    expect(wrapper.find("dropdown")).toBeTruthy;
  });

  test("Vérifie si id content exists", () => {
    const wrapper = mount(Contact);

    // vérifie si l'element id #dropdownt exists, ce faux!
    expect(wrapper.find("#dropdown").isEmpty()).toBeTruthy;
  });
});
