describe("Sauce Labs: E2E Users", () => {
  it("Purchase flow: Standart User", () => {
    cy.loginStandartUser();

    cy.filterHighToLow();

    cy.addBikeLight();

    cy.addBackpack();

    cy.addJacket();

    cy.verifyProductList();

    cy.checkoutProducts();

    cy.logout();
  });
});
