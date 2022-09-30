describe("Basic Cypress test", () => {
  it("is loading", () => {
    expect(true).to.equal(true);
  });

  it("loads a site", () => {
    cy.visit("http://localhost:8765");
  });
});
