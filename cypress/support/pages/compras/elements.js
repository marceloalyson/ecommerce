export const ELEMENTS = {

    ecoommrceComum:{
    clickCategoriaNotebook: () =>  cy.get('a[onclick="byCat(\'notebook\')"]'),
    clickCategoriaMonitor: () => cy.get('[onclick="byCat(\'monitor\')"]'),
    addCarrinho: () => cy.get('.col-sm-12 > .btn'),
   },
   produtoNotebook: {
    SonyVaioI5: () => cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top'),
   },
   produtoMonitor: {
    AppleMonitor24: () => cy.get('img[src="imgs/apple_cinema.jpg"]'),
   },
   produtos: {
    checarItems: () => cy.get('#tbodyid tr'),
   },
   menuCarrinho: {
    menuCarrinho: () => cy.get('#cartur'),
   },
   buttonPlaceOrder: {
    buttonPlaceOrder: () => cy.get('.col-lg-1 > .btn')
   },
   formCarrinho:{
    nameField: () => cy.get('#name'),
    countryField: () => cy.get('#country'),
    cityField: () => cy.get('#city'),
    cardField: () => cy.get('#card'),
    monthField: () => cy.get('#month'),
    yearField: () => cy.get('#year'),
    buttonClose: () => cy.get('#orderModal .btn-secondary'),
    buttonPurschase: () => cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
    buttonConfirm: () => cy.get('.confirm')

   }
}