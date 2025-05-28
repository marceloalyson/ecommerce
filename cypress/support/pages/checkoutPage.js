class CheckoutPage {
    validarInformacoesCheckout() {
        cy.get('p.lead.text-muted', { timeout: 10000 })
          .should('be.visible')
          .invoke('text')
          .then((texto) => {
              expect(texto).to.match(/Amount:/); // Verifica se contém "Amount:"
              expect(texto).to.match(/Card Number: \d+/); // Verifica se tem um número após "Card Number:"
              expect(texto).to.match(/Name: \w+/); // Verifica se tem um nome após "Name:"
            });

    }
}

export default new CheckoutPage();
