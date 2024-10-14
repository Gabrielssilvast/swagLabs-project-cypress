Cypress.Commands.add("loginStandartUser", () => {
  cy.getUserData().then((data) => {
    cy.get('[data-test="username"]')
      .should("be.visible")
      .type(data.user01.username);
    cy.get('[data-test="password"]')
      .should("be.visible")
      .type(data.user01.password);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should("be.visible");
  });
});

Cypress.Commands.add("loginLockedOutUser", () => {
  cy.getUserData().then((data) => {
    cy.get('[data-test="username"]')
      .should("be.visible")
      .type(data.user02.username);
    cy.get('[data-test="password"]')
      .should("be.visible")
      .type(data.user02.password);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]', { timeout: 10000 }).should("be.visible");
  });
});

Cypress.Commands.add("loginProblemUser", () => {
  cy.getUserData().then((data) => {
    cy.get('[data-test="username"]')
      .should("be.visible")
      .type(data.user03.username);
    cy.get('[data-test="password"]')
      .should("be.visible")
      .type(data.user03.password);
    cy.get('[data-test="login-button"]').click();
  });
});

Cypress.Commands.add("invalidUser", () => {
  cy.getUserData().then((data) => {
    cy.get('[data-test="username"]')
      .should("be.visible")
      .type(data.user07.username);
    cy.get('[data-test="password"]')
      .should("be.visible")
      .type(data.user07.password);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]', { timeout: 10000 }).should("be.visible");
  });
});

Cypress.Commands.add("addBikeLight", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    .should("be.visible")
    .click();
});

Cypress.Commands.add("addBackpack", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .should("be.visible")
    .click();
});

Cypress.Commands.add("addJacket", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    .should("be.visible")
    .click();
});

Cypress.Commands.add("filterHighToLow", () => {
  cy.get('[data-test="product-sort-container"]')
    .should("be.visible")
    .select("Price (high to low)");
});

Cypress.Commands.add("verifyProductList", () => {
  cy.get('[data-test="shopping-cart-link"]').click();

  cy.get("#item_0_title_link", { timeout: 10000 }).should("be.visible");

  cy.get("#item_4_title_link", { timeout: 10000 }).should("be.visible");

  cy.get("#item_5_title_link", { timeout: 10000 }).should("be.visible");
});

Cypress.Commands.add("verifyProductListProblemUser", () => {
  cy.get('[data-test="shopping-cart-link"]').click();

  cy.get("#item_0_title_link", { timeout: 10000 }).should("be.visible");

  cy.get("#item_4_title_link", { timeout: 10000 }).should("be.visible");
});

Cypress.Commands.add("logout", () => {
  cy.get(".bm-burger-button").click();
  cy.get('[data-test="logout-sidebar-link"]').should("be.visible").click();
});

Cypress.Commands.add("checkoutProducts", () => {
  cy.get('[data-test="checkout"]', { timeout: 10000 })
    .should("be.visible")
    .click();

  cy.get('[data-test="title"]', { timeout: 10000 }).should("be.visible");

  cy.get('[data-test="firstName"]').type("standard_user");
  cy.get('[data-test="lastName"]').type("last name");
  cy.get('[data-test="postalCode"]').type("123456");

  cy.get('[data-test="continue"]').click();

  cy.get('[data-test="title"]', { timeout: 10000 }).should("be.visible");
  cy.get('[data-test="payment-info-label"]', { timeout: 10000 }).should(
    "be.visible"
  );
  cy.get('[data-test="finish"]').click();

  cy.get('[data-test="complete-header"]', { timeout: 10000 }).should(
    "be.visible"
  );
});

Cypress.Commands.add("checkoutProductsProblemUser", () => {
  cy.get('[data-test="checkout"]', { timeout: 10000 })
    .should("be.visible")
    .click();

  cy.get('[data-test="title"]', { timeout: 10000 }).should("be.visible");

  cy.get('[data-test="firstName"]').type("standard_user");
  cy.get('[data-test="lastName"]').type("last name");
  cy.get('[data-test="postalCode"]').type("123456");

  cy.get('[data-test="continue"]').click();

  cy.get('[data-test="error"]', { timeout: 10000 }).should("be.visible");
});
