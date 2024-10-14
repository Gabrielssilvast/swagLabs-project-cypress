describe("Sauce Labs: Login", () => {
  it("Success login", () => {
    cy.loginStandartUser();

    cy.get('[data-test="title"]', { timeout: 10000 }).should("be.visible");

    cy.get('[data-test="product-sort-container"]', { timeout: 10000 }).should(
      "be.visible"
    );

    cy.get('[data-test="shopping-cart-link"]', { timeout: 10000 }).should(
      "be.visible"
    );

    cy.logout();
  });
});
