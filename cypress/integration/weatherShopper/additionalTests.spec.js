// Additional Tests for Weather Shopper using Page Object Model
import { HomePage } from '../../support/pages/homePage';
import { ShopPage } from '../../support/pages/shopPage';
import { CartPage } from '../../support/pages/cartPage';

describe('Additional Tests for Weather Shopper', () => {
  const homePage = new HomePage();
  const shopPage = new ShopPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    homePage.visit();
  });

  it('Should navigate to the correct shop based on temperature', () => {
    const shopType = homePage.checkTemperatureAndNavigate();
    expect(['moisturizers', 'sunscreens']).to.include(shopType);
  });

  it('Should validate product names and prices in the shop', () => {
    homePage.checkTemperatureAndNavigate();
    shopPage.validateProductsInShop();
  });

  it('Should add and validate multiple products in the cart', () => {
    homePage.checkTemperatureAndNavigate();
    shopPage.addProductsToCart();
    cartPage.validateCartItems();
  });
});
