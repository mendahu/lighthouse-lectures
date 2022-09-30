describe("filters", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("can toggle the explicit filter", () => {
    cy.get(".filters__form-group")
      .first()
      .find("input")
      .uncheck()
      .should("not.be.checked");
  });

  it("can toggle the EP filter by clicking the text", () => {
    // cy.get("#EP").as("epCheckbox");

    cy.get("#EP")
      .parent()
      .find("label")
      .click()
      .parent()
      .find("input")
      .should("be.checked");
    // cy.get("@epCheckbox").should("be.checked");
  });
});

// RETURN AT 2:05 EDT
