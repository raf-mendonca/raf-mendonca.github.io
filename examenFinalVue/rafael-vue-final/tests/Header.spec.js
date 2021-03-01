import Header from "@/components/Header";
import { shallowMount } from "@vue/test-utils";

// Vérifie si header exists
describe("Test unitaire", () => {
  test("Header exist", () => {
    const wrapper = shallowMount(Header, {
      data() {
        return {
          menu: [
            { id: 0, title: "home" },
            { id: 1, title: "projects" },
            { id: 2, title: "contact" },
            { id: 3, title: "presentation" },
          ],
        };
      },
    });
    expect(wrapper.exists()).toBeTruthy;
  });

  // Verifie si header contiens utilisateur connecté, c'est faux!
  test("Header", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.contains("connecte")).toBe(false);
  });
});
