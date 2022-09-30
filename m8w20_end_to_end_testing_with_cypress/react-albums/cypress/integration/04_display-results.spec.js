describe("Display Results", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays results from API", () => {
    cy.intercept("GET", "**/search*", { fixture: "itunes" }).as("getSearch");

    cy.get(".search")
      .find("form")
      .find("input")
      .type("Daft Punk", { delay: 100 })
      .should("have.value", "Daft Punk");

    cy.get(".spinner").should("be.visible");

    cy.wait("@getSearch")
      .get("main")
      .contains("Random Access Memories")
      .should("be.visible");

    cy.get("#Explicit").click();

    cy.get("article.album").should("not.contain", "Daft Club");
  });
});
