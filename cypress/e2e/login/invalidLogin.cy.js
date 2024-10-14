describe("Sauce Labs: Login", () => {
  it("Invalid User", () => {
    cy.invalidUser();
  });

  it("Locked out User", () => {
    cy.loginLockedOutUser();
  });
});
