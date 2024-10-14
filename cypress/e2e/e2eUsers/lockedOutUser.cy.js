describe("Sauce Labs: E2E Users", () => {
  it("Purchase flow: Problem User", () => {
    cy.loginLockedOutUser();

    cy.get('[data-test="error"]', { timeout: 10000 }).should("be.visible");
  });
});
