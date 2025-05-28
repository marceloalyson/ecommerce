export const ELEMENTS = {
    clickLogin: () => cy.get('#login2'),
    usernameField: () => cy.get('#loginusername'),
    passwordField: () => cy.get('#loginpassword'),
    loginButton: () => cy.get('#logInModal .modal-footer .btn-primary'),
    closeLoginButton: () => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'),
    clickLogout: () => cy.get('#logout2', { timeout: 10000 }),
   
}