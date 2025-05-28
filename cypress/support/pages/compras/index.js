import { ELEMENTS as el} from './elements'

class comprasPage{
    clickCategoriaNotebook(){
        el.ecoommrceComum.clickCategoriaNotebook().click();
    }
    clickCategoriaMonitor(){
        el.ecoommrceComum.clickCategoriaMonitor().click();
    }
    clickAddCarrinho(){
        el.ecoommrceComum.addCarrinho().click()
    }
    clickNexus6(){
        el.produtoNotebook.SonyVaioI5().click();
    }
    clickAppleMonitor24(){
        el.produtoMonitor.AppleMonitor24().click();
    }
    clickMenuCarrinho(){
        el.menuCarrinho.menuCarrinho().click();
    }
    verificaSeTemitems(){
        el.produtos.checarItems().should('have.length.greaterThan', 0);
    }
    guardarQuantidadeInicial(){
        return cy.get('#tbodyid tr');
    }
    excluiPrimeiroItem(){
        el.produtos.checarItems().first().find('a').contains('Delete').click();
    }
    confirmaItemRemovido(quantidadeAntes) {
        el.produtos.checarItems().should('have.length.lessThan', quantidadeAntes);
    }
    clickButtonPlaceOrder(){
        el.buttonPlaceOrder.buttonPlaceOrder().click();
    }
    clickButtonClose(){
        el.formCarrinho.buttonClose().click();
    }
    clickButtonPurschase(){
        el.formCarrinho.buttonPurschase().click();
    }
    clickButtonConfirm(){
        el.formCarrinho.buttonConfirm().click();
    }
    enterName(name){
        el.formCarrinho.nameField().clear();
        if (name !== ""){
            el.formCarrinho.nameField().type(name, {delay: 0});
        }

    }
    enterCountry(country){
        el.formCarrinho.countryField().clear();
        if (country !== ""){
            el.formCarrinho.countryField().type(country, {delay: 0});
        }

    }
    enterCity(city){
        el.formCarrinho.cityField().clear();
        if (city !== ""){
            el.formCarrinho.cityField().type(city, {delay: 0});
        }

    }
    enterCard(card){
        el.formCarrinho.cardField().clear();
        if (card !== ""){
            el.formCarrinho.cardField().type(card, {delay: 0});
        }

    }
    enterMonth(month){
        el.formCarrinho.monthField().clear();
        if (month !== ""){
            el.formCarrinho.monthField().type(month, {delay: 0});
        }

    }
     enterYear(year){
        el.formCarrinho.yearField().clear();
        if (year !== ""){
            el.formCarrinho.yearField().type(year, {delay: 0});
        }

    }
    performAllInteractions(
        name,
        country,
        city,
        card,
        month,
        year
    ){
        this.enterName(name);
        this.enterCountry(country);
        this.enterCity(city);
        this.enterCard(card);
        this.enterMonth(month);
        this.enterYear(year);
        this.clickButtonPurschase();
    }
    cartMainForm(data){
        this.enterName(data.name);
        this.enterCountry(data.country);
        this.enterCity(data.city);
        this.enterCard(data.card);
        this.enterMonth(data.month);
        this.enterYear(data.year);
    }


}
export default new comprasPage();