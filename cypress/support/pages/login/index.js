import { ELEMENTS as el } from "./elements";

class LoginPage {
    typeUsername(username){
        if (username !== ""){
            el.usernameField().click().should('be.visible').clear().type(username, {delay: 0});
        }
    }

    typePassword(password){
        if (password !== ""){
            el.passwordField().click().should('be.visible').clear().type(password, {delay: 0});
        } 
    }

    clickLoginMain(){
        el.clickLogin().click();
    }

    clickLogin(){
        el.loginButton().click();
    }

    MessageLogado(){
        el.MessageLogado()
    }

    clickLogout(){
        el.clickLogout().click({ force: true });
    }

    submitLogin(username, password){
        this.typeUsername(username);
        this.typePassword(password);
        el.loginButton().click();
    }

    //Método reutilizável de login completo
    login(email, password){
        cy.visit('/');
        this.clickLoginMain();
        this.submitLogin(email, password);
        cy.contains(`Welcome ${email}`, { timeout: 10000 }).should('be.visible');
    }

    //Método reutilizável de logout
    logout(email){
        this.clickLogout();
        cy.contains(`Welcome ${email}`, { timeout: 10000 }).should('not.exist');
    }
}

export default new LoginPage();
