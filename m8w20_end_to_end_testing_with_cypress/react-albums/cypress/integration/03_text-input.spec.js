describe("Text Input", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("accepts text input", () => {
    cy.get(".search")
      .find("form")
      .find("input")
      .type("Tragically Hip", { delay: 100 })
      .should("have.value", "Tragically Hip");
  });

  it("accepts text input with backspaces", () => {
    cy.get(".search")
      .find("form")
      .find("input")
      .type("Tragicaly {backspace}{backspace}ly Hip", { delay: 100 })
      .should("have.value", "Tragically Hip");
  });
});
