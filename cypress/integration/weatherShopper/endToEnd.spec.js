// Weather Shopper End-to-End Tests using Design Patterns
import { HomePage } from '../../support/pages/homePage';
import { ShopPage } from '../../support/pages/shopPage';
import { CartPage } from '../../support/pages/cartPage';
import { PaymentPage } from '../../support/pages/paymentPage';

describe('Weather Shopper End-to-End Test', () => {
  const homePage = new HomePage();
  const shopPage = new ShopPage();
  const cartPage = new CartPage();
  const paymentPage = new PaymentPage();

  beforeEach(() => {
    homePage.visit();
  });

  it('Should complete the shopping workflow successfully', () => {
    const shopType = homePage.checkTemperatureAndNavigate();
    shopPage.addProductsToCart();
    cartPage.validateCartItems();
    paymentPage.completePayment();

    // Verify purchase success
    cy.contains('PAYMENT SUCCESS').should('be.visible');
  });
});
