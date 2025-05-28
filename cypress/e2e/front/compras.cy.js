import loginPage from '../../support/pages/login';
import comprasPage from '../../support/pages/compras';
import checkoutPage from '../../support/pages/checkoutPage';
const users = require('../../fixtures/credentials.json');
const user = users.usuarioValido[0]; // usar apenas um usuário válido
const credentials = require('../../fixtures/credentialsCart.json');

describe('Fluxo completo no ecommerce', () => {
  beforeEach(() => {
    cy.visit('/');
    Cypress.on('uncaught:exception', () => false);
    loginPage.clickLoginMain();
    loginPage.submitLogin(user.email, user.password);
    cy.contains(`Welcome ${user.email}`, { timeout: 10000 }).should('be.visible');

    cy.on('window:alert', (msg) => {
      if (msg.includes('Product added')) {
        expect(msg).to.include('Product added');
      }
      if (msg.includes('Please fill out Name and Creditcard.')) {
        expect(msg).to.include('Please fill out Name and Creditcard.');
      }
    });
  });

  afterEach(() => {
    loginPage.clickLogout();
  });

  it('Deve acessar a categoria Laptops e adicionar um produto ao carrinho', () => {
    comprasPage.clickCategoriaNotebook();
    comprasPage.clickNexus6();
    comprasPage.clickAddCarrinho();
  });

  it('Deve acessar a categoria Monitors e adicionar um produto', () => {
    comprasPage.clickCategoriaMonitor();
    comprasPage.clickAppleMonitor24();
    comprasPage.clickAddCarrinho();
  });

  it('Deve remover item do carrinho', () => {
    comprasPage.clickMenuCarrinho();
    comprasPage.verificaSeTemitems();
    comprasPage.guardarQuantidadeInicial().then(($rowsAntes) => {
      const quantidadeAntes = $rowsAntes.length;
      comprasPage.excluiPrimeiroItem();
      comprasPage.confirmaItemRemovido(quantidadeAntes);
    });
  });

  it('Deve preencher formulário e clicar em close', () => {
    comprasPage.clickMenuCarrinho();
    comprasPage.clickButtonPlaceOrder();
    credentials.credentialsCart.forEach((data) => {
      comprasPage.cartMainForm(data);
      comprasPage.clickButtonClose();
    });
  });

  it('Deve realizar compra e validar confirmação', () => {
    comprasPage.clickMenuCarrinho();
    comprasPage.clickButtonPlaceOrder();
    credentials.credentialsCart.forEach((data) => {
      comprasPage.cartMainForm(data);
      comprasPage.clickButtonPurschase();
    });
    checkoutPage.validarInformacoesCheckout();
    comprasPage.clickButtonConfirm();
  });

  describe('Validação de campos obrigatórios', () => {
    credentials.credentialsCartBlankFiled.forEach((data) => {
      it(`Validando campos obrigatórios - ${data.descriptive}`, () => {
        comprasPage.clickCategoriaMonitor();
        comprasPage.clickAppleMonitor24();
        comprasPage.clickAddCarrinho();
        comprasPage.clickMenuCarrinho();
        comprasPage.clickButtonPlaceOrder();
        comprasPage.cartMainForm(data);
      });
    });
  });
});
