import loginPage from "../../support/pages/login";
const users = require("../../fixtures/credentials.json");

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
    Cypress.on('uncaught:exception', () => false); // evita falha por erros de JS da aplicação
  });

  describe('Credencial inválida ao logar', () => {
    users.usuariosInvalidos.forEach((user) => {
      it('Credencial - ' + user.scenario, () => {
        loginPage.clickLoginMain();
        loginPage.submitLogin(user.email, user.password);
        cy.on('window:alert', (msg) => {
          expect(msg).to.equal(user.expectedAlert);
        });
      });
    });
  });

  describe('Acessando com credencial válida', () => {
    users.usuarioValido.forEach((user) => {
      it('Login válido - ' + user.email, () => {
        loginPage.clickLoginMain();
        loginPage.submitLogin(user.email, user.password);
        cy.contains(`Welcome ${user.email}`, { timeout: 10000 }).should('be.visible');
      });
    });
  });

  describe('Realizando logout', () => {
    users.usuarioValido.forEach((user) => {
      it('Logout após login - ' + user.email, () => {
        loginPage.clickLoginMain();
        loginPage.submitLogin(user.email, user.password);
        cy.contains(`Welcome ${user.email}`, { timeout: 10000 }).should('be.visible');
        
        // Logout
        loginPage.clickLogout();
        cy.contains(`Welcome ${user.email}`, { timeout: 10000 }).should('not.exist');
      });
    });
  });
});
