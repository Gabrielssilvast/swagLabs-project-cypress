import "./commands";
// Carregar fixture 'userData' globalmente antes de todos os testes
let userData;

before(() => {
  cy.fixture("userData").then((data) => {
    userData = data; // Armazenar os dados globalmente
  });
});

beforeEach(() => {
  cy.clearCookies()
    .clearLocalStorage()
    .viewport(1366, 768)
    .visit(Cypress.env("baseUrl"), { timeout: 10000 });
});

// Comando Cypress para acessar os dados da fixture de qualquer teste
Cypress.Commands.add("getUserData", () => {
  return userData; // Retorna os dados carregados da fixture
});
