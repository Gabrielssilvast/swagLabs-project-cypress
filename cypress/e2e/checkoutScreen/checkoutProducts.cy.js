describe("Sauce Labs: Products", () => {
  it("Adding produts", () => {
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
