describe("Sauce Labs: E2E Users", () => {
  it("Purchase flow: Problem User", () => {
    cy.loginLockedOutUser();

    cy.filterHighToLow();

    cy.addBikeLight();

    cy.addBackpack();

    cy.addJacket();

    cy.verifyProductList();

    cy.checkoutProducts();

    cy.logout();
  });
});
